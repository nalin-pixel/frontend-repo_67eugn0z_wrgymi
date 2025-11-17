import { Check } from 'lucide-react'

const items = [
  { title: 'Design & Merch', desc: 'Trend → line sheets' },
  { title: 'Sourcing & Costing', desc: 'Multi-country, tariff-aware' },
  { title: 'QA & Compliance', desc: 'CPSIA / Prop 65 / REACH' },
  { title: 'Sales, Ops & E‑Com', desc: 'Forecasting, delivery, dropship' },
]

export default function Capabilities() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900">Capabilities</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-gray-200 p-5 bg-gradient-to-br from-gray-50 to-white">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white text-xs">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{it.title}</h3>
                  <p className="text-sm text-gray-600">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
