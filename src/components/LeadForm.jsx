import { useState } from 'react'

export default function LeadForm() {
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState({
    name: '', email: '', company: '', role: '', retailer: '', category: '', target_retail: '', timeline: '', message: ''
  })

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${backend}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' })
      })
      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus('Thanks — we7ll be in touch soon.')
      setForm({ name: '', email: '', company: '', role: '', retailer: '', category: '', target_retail: '', timeline: '', message: '' })
    } catch (e) {
      setStatus('Could not send. Please try again later.')
    }
  }

  return (
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900">Get in touch</h2>
        <p className="text-sm text-gray-600">Quick intro so we can route you to the right team.</p>
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { name: 'name', label: 'Name*' },
            { name: 'email', label: 'Email*', type: 'email' },
            { name: 'company', label: 'Company' },
            { name: 'role', label: 'Role' },
            { name: 'retailer', label: 'Retailer' },
            { name: 'category', label: 'Category' },
            { name: 'target_retail', label: 'Target Retail' },
            { name: 'timeline', label: 'Timeline' },
          ].map((f) => (
            <div key={f.name} className="flex flex-col">
              <label className="text-xs text-gray-600 mb-1">{f.label}</label>
              <input
                required={['name','email'].includes(f.name)}
                type={f.type || 'text'}
                value={form[f.name]}
                onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              />
            </div>
          ))}
          <div className="sm:col-span-2">
            <label className="text-xs text-gray-600 mb-1">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
            <p className="text-[11px] text-gray-500 mt-2">By submitting, you agree to our privacy policy.</p>
          </div>
          <div className="sm:col-span-2 flex items-center gap-3">
            <button className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-semibold hover:bg-gray-800 transition">Send</button>
            {status && <span className="text-sm text-gray-700">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
