'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

// ── Device detection hook ─────────────────────────────────────────────────────
function useDeviceProfile() {
  const [profile, setProfile] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth
      if (w < 640)       setProfile('mobile')
      else if (w < 1024) setProfile('tablet')
      else               setProfile('desktop')
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return profile
}

// ── Camera FOV auto-adjust for viewport ──────────────────────────────────────
function CameraRig({ isMobile }: { isMobile: boolean }) {
  const { camera } = useThree()
  useEffect(() => {
    const cam = camera as THREE.PerspectiveCamera
    cam.fov      = isMobile ? 90 : 72   // wider FOV on mobile feels better
    cam.position.z = isMobile ? 6 : 7
    cam.updateProjectionMatrix()
  }, [camera, isMobile])
  return null
}

// ── Particle field ────────────────────────────────────────────────────────────
function ParticleField({ count, spread }: { count: number; spread: [number, number, number] }) {
  const ref   = useRef<THREE.Points>(null)
  const frame = useRef(0)           // frame counter for mobile throttle

  const { positions, velocities } = useMemo(() => {
    const positions  = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * spread[0]
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread[1]
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread[2]

      velocities[i * 3]     = (Math.random() - 0.5) * 0.006
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.006
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.003
    }
    return { positions, velocities }
  }, [count, spread])

  useFrame(() => {
    if (!ref.current) return
    frame.current++

    // On low count (mobile), skip every other frame to save GPU
    if (count < 100 && frame.current % 2 !== 0) return

    const pos = ref.current.geometry.attributes.position as THREE.BufferAttribute
    const arr = pos.array as Float32Array
    const hx = spread[0] / 2
    const hy = spread[1] / 2
    const hz = spread[2] / 2

    for (let i = 0; i < count; i++) {
      arr[i * 3]     += velocities[i * 3]
      arr[i * 3 + 1] += velocities[i * 3 + 1]
      arr[i * 3 + 2] += velocities[i * 3 + 2]

      if (arr[i * 3]     >  hx) arr[i * 3]     = -hx
      if (arr[i * 3]     < -hx) arr[i * 3]     =  hx
      if (arr[i * 3 + 1] >  hy) arr[i * 3 + 1] = -hy
      if (arr[i * 3 + 1] < -hy) arr[i * 3 + 1] =  hy
      if (arr[i * 3 + 2] >  hz) arr[i * 3 + 2] = -hz
      if (arr[i * 3 + 2] < -hz) arr[i * 3 + 2] =  hz
    }
    pos.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#C9A84C"
        size={count < 100 ? 0.055 : 0.045}
        sizeAttenuation
        transparent
        opacity={0.7}
        depthWrite={false}
      />
    </points>
  )
}

// ── Wireframe icosahedron ─────────────────────────────────────────────────────
function FloatingWireframe({
  position,
  size,
  detail,
}: {
  position: [number, number, number]
  size: number
  detail: number
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.10
    ref.current.rotation.y += delta * 0.07
  })

  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[size, detail]} />
      <meshBasicMaterial color="#C9A84C" wireframe transparent opacity={0.09} />
    </mesh>
  )
}

// ── Orbiting octahedron — desktop/tablet only ─────────────────────────────────
function OrbitShape({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.position.x = position[0] + Math.sin(t * 0.3) * 1.2
    ref.current.position.y = position[1] + Math.cos(t * 0.2) * 0.8
    ref.current.rotation.z += 0.004
  })

  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.7]} />
      <meshBasicMaterial color="#C9A84C" wireframe transparent opacity={0.11} />
    </mesh>
  )
}

// ── Scene — adapts to device ──────────────────────────────────────────────────
function Scene({ profile }: { profile: 'mobile' | 'tablet' | 'desktop' }) {
  const isMobile  = profile === 'mobile'
  const isDesktop = profile === 'desktop'

  // Particle count: mobile 60, tablet 110, desktop 180
  const particleCount = isMobile ? 60 : profile === 'tablet' ? 110 : 180

  // World spread: narrower + shallower on mobile
  const spread: [number, number, number] = isMobile
    ? [12, 10, 5]
    : profile === 'tablet'
    ? [18, 12, 6]
    : [22, 14, 8]

  // Icosahedron: smaller + more centred on mobile
  const hexPos: [number, number, number] = isMobile ? [1.5, 0.5, -2] : [4, 0.5, -3]
  const hexSize   = isMobile ? 1.2 : 2
  const hexDetail = isMobile ? 0 : 1   // lower geometry complexity on mobile

  return (
    <>
      <CameraRig isMobile={isMobile} />
      <ParticleField count={particleCount} spread={spread} />
      <FloatingWireframe position={hexPos} size={hexSize} detail={hexDetail} />

      {/* Orbit shape — skip on mobile to save draw calls */}
      {!isMobile && <OrbitShape position={[-5, -1, -2]} />}

      {/* Bloom — full on desktop, lighter on tablet, off on mobile */}
      {isDesktop && (
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} intensity={0.35} height={300} />
        </EffectComposer>
      )}
      {profile === 'tablet' && (
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} intensity={0.2} height={200} />
        </EffectComposer>
      )}
    </>
  )
}

// ── Exported canvas wrapper ───────────────────────────────────────────────────
export function HeroScene() {
  const profile = useDeviceProfile()
  const isMobile = profile === 'mobile'

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 72 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{
        antialias: !isMobile,       // skip AA on mobile = big perf win
        alpha: true,
        powerPreference: isMobile ? 'low-power' : 'high-performance',
      }}
      dpr={isMobile ? [1, 1] : [1, 1.5]}   // no high-DPR on mobile
      frameloop="always"
      performance={{ min: 0.5 }}            // auto-degrade if FPS drops
    >
      <Scene profile={profile} />
    </Canvas>
  )
}
