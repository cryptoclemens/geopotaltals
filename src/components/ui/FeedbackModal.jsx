import { useState } from 'react'

const SUPABASE_URL = 'https://ixqcktaxdkqnbpkujzqj.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4cWNrdGF4ZGtxbmJwa3VqenFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzOTEyMzgsImV4cCI6MjA1Nzk2NzIzOH0.QD2kXgFZ2SBMsMbPSFqvWlJjPdIuiXFG8UwFWl1LGzo'

export default function FeedbackModal() {
  const [open, setOpen]       = useState(false)
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [message, setMessage] = useState('')
  const [rating, setRating]   = useState(0)
  const [status, setStatus]   = useState('idle') // idle | sending | ok | err

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({ name, email, message, rating }),
      })
      if (!res.ok) throw new Error(res.statusText)
      setStatus('ok')
      setTimeout(() => {
        setOpen(false)
        setName(''); setEmail(''); setMessage(''); setRating(0); setStatus('idle')
      }, 1800)
    } catch {
      setStatus('err')
    }
  }

  return (
    <>
      {/* Pill button – bottom center */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[4000]
                   flex items-center gap-2 px-5 py-2.5 rounded-full
                   text-white text-[12px] font-semibold shadow-lg
                   transition-transform hover:scale-105 active:scale-95"
        style={{ background: 'linear-gradient(135deg, #1d6a9e, #2a8ab8)' }}
      >
        <span>💬</span> Feedback
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[4900]"
          style={{ background: 'rgba(0,0,0,0.55)' }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Modal */}
      {open && (
        <div
          className="fixed z-[5000] w-[340px] rounded-2xl shadow-2xl overflow-hidden"
          style={{
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#0f1d35',
            border: '1px solid rgba(90,175,214,0.25)',
          }}
        >
          {/* Modal header */}
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{ background: 'linear-gradient(90deg,#1d3a5e,#1d6a9e)' }}
          >
            <span className="text-white font-bold text-sm">💬 Feedback</span>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white text-lg leading-none"
            >×</button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-5 py-4 flex flex-col gap-3">
            {/* Rating stars */}
            <div className="flex gap-1 justify-center">
              {[1,2,3,4,5].map(s => (
                <button
                  key={s} type="button"
                  onClick={() => setRating(s)}
                  className={`text-xl transition-transform hover:scale-125 ${
                    s <= rating ? 'text-yellow-400' : 'text-white/20'
                  }`}
                >★</button>
              ))}
            </div>

            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name (optional)"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2
                         text-white text-xs placeholder-white/30 outline-none
                         focus:border-[#2a8ab8]/60 transition-colors"
            />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="E-Mail (optional)"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2
                         text-white text-xs placeholder-white/30 outline-none
                         focus:border-[#2a8ab8]/60 transition-colors"
            />
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Ihr Feedback…"
              required
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2
                         text-white text-xs placeholder-white/30 outline-none resize-none
                         focus:border-[#2a8ab8]/60 transition-colors"
            />

            {status === 'ok' && (
              <div className="text-xs text-green-400 text-center py-1">
                ✓ Feedback gesendet – vielen Dank!
              </div>
            )}
            {status === 'err' && (
              <div className="text-xs text-red-400 text-center py-1">
                ✗ Fehler beim Senden. Bitte nochmals versuchen.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending' || status === 'ok'}
              className="w-full py-2 rounded-lg text-white text-sm font-semibold
                         transition-opacity disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg, #1d6a9e, #2a8ab8)' }}
            >
              {status === 'sending' ? 'Sende…' : 'Absenden'}
            </button>
          </form>
        </div>
      )}
    </>
  )
}
