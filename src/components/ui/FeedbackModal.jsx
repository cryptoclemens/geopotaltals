import { useState } from 'react'

const SUPABASE_URL = 'https://ixqcktaxdkqnbpkujzqj.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4cWNrdGF4ZGtxbmJwa3VqenFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzOTEyMzgsImV4cCI6MjA1Nzk2NzIzOH0.QD2kXgFZ2SBMsMbPSFqvWlJjPdIuiXFG8UwFWl1LGzo'

// Styles replicating original HTML exactly
const panelStyle = {
  position:'fixed', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
  width:340, zIndex:5000,
  background:'#0f1d35', border:'1px solid rgba(90,175,214,0.25)',
  borderRadius:12, overflow:'hidden', boxShadow:'0 16px 48px rgba(0,0,0,.7)',
}
const overlayStyle = {
  position:'fixed', inset:0, zIndex:4900, background:'rgba(0,0,0,.55)',
}
const inputStyle = {
  width:'100%', background:'rgba(22,38,64,.85)',
  border:'1px solid rgba(91,175,214,0.18)', borderRadius:6,
  padding:'7px 10px', color:'#ddeeff', fontSize:11,
  outline:'none', fontFamily:'inherit',
}
const btnStyle = {
  width:'100%', padding:'8px 0', borderRadius:6, border:'none',
  background:'linear-gradient(135deg,#1d6a9e,#2a8ab8)',
  color:'#fff', fontSize:12, fontWeight:600, cursor:'pointer',
}

export default function FeedbackModal() {
  const [open, setOpen]       = useState(false)
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [message, setMessage] = useState('')
  const [rating, setRating]   = useState(0)
  const [status, setStatus]   = useState('idle')

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
        setOpen(false); setName(''); setEmail(''); setMessage(''); setRating(0); setStatus('idle')
      }, 1800)
    } catch {
      setStatus('err')
    }
  }

  return (
    <>
      {/* Pill button */}
      <button id="fb-tab" onClick={() => setOpen(true)}>
        <span>✉</span> Feedback geben
      </button>

      {/* Overlay (no backdrop-filter to avoid stacking context bug) */}
      {open && <div style={overlayStyle} onClick={() => setOpen(false)} />}

      {/* Modal panel */}
      {open && (
        <div style={panelStyle}>
          <div style={{background:'linear-gradient(90deg,#1d3a5e,#1d6a9e)',padding:'14px 18px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <span style={{color:'#fff',fontWeight:700,fontSize:13}}>✉ Feedback geben</span>
            <button onClick={() => setOpen(false)} style={{background:'none',border:'none',color:'rgba(255,255,255,.6)',fontSize:18,cursor:'pointer',lineHeight:1}}>×</button>
          </div>
          <form onSubmit={handleSubmit} style={{padding:'16px 18px',display:'flex',flexDirection:'column',gap:10}}>
            {/* Stars */}
            <div style={{display:'flex',gap:4,justifyContent:'center'}}>
              {[1,2,3,4,5].map(s => (
                <button key={s} type="button" onClick={() => setRating(s)}
                  style={{background:'none',border:'none',fontSize:20,cursor:'pointer',color:s<=rating?'#f0c040':'rgba(255,255,255,.2)',transition:'transform .1s'}}
                >★</button>
              ))}
            </div>
            <input value={name} onChange={e=>setName(e.target.value)}
              placeholder="Name (optional)" style={inputStyle} />
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
              placeholder="E-Mail (optional)" style={inputStyle} />
            <textarea value={message} onChange={e=>setMessage(e.target.value)}
              placeholder="Ihr Feedback…" required rows={4}
              style={{...inputStyle, resize:'none'}} />
            {status==='ok'  && <div style={{fontSize:11,color:'#5bd68a',textAlign:'center'}}>✓ Feedback gesendet – vielen Dank!</div>}
            {status==='err' && <div style={{fontSize:11,color:'#d65b5b',textAlign:'center'}}>✗ Fehler beim Senden. Nochmals versuchen.</div>}
            <button type="submit" disabled={status==='sending'||status==='ok'} style={{...btnStyle,opacity:status==='sending'||status==='ok'?.5:1}}>
              {status==='sending'?'Sende…':'Absenden →'}
            </button>
          </form>
        </div>
      )}
    </>
  )
}
