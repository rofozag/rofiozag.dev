import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createAdminClient } from '@/lib/supabase/server'

// ── Validation schema ─────────────────────────────────────────────────────────
const ContactSchema = z.object({
  name:    z.string().min(2,  'Name must be at least 2 characters'),
  email:   z.string().email('Invalid email address'),
  budget:  z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

// ── POST /api/contact ─────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = ContactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
        { status: 422 },
      )
    }

    const { name, email, budget, service, message } = parsed.data

    const supabase = createAdminClient()

    const { error } = await supabase.from('contact_submissions').insert({
      name,
      email,
      budget:  budget  ?? null,
      service: service ?? null,
      message,
      submitted_at: new Date().toISOString(),
    })

    if (error) {
      console.error('[contact] Supabase insert error:', error.message)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
