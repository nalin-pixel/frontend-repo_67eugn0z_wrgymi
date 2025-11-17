import { useMemo, useState } from 'react'
import Layout from '../components/Layout'

const ALL_BRANDS = [
  { name: 'CCM', segment: ['Women', 'Kids'], type: ['Licensed'], tagline: "Women’s & Girls’ fashion", cats: ['Flats','Sandals','Wedges'] },
  { name: 'Nicole Miller', segment: ['Women'], type: ['Licensed'], tagline: 'Women’s fashion', cats: ['Sandals','Sneakers'] },
  { name: 'Hurley', segment: ['Men','Kids'], type: ['Licensed'], tagline: 'Lifestyle/Athletic', cats: ['Water/Outdoor','Sneakers'] },
  { name: 'Tahari', segment: ['Women','Men'], type: ['Licensed'], tagline: 'Dress/Casual', cats: [] },
  { name: 'Taryn Rose', segment: ['Women'], type: ['Licensed'], tagline: 'Comfort dress', cats: [] },
  { name: 'Ann Taylor', segment: ['Women'], type: ['Licensed'], tagline: 'Elevated classics', cats: [], status: 'Active' },
]

const FILTERS = ['All','Women','Men','Kids','Licensed','Private Label']

function BrandCard({ b }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 hover:shadow-sm transition">
      <div className="h-12 w-12 rounded-md bg-gray-900 text-white flex items-center justify-center font-bold text-sm">{b.name[0]}</div>
      <div className="mt-3">
        <h3 className="font-semibold text-gray-900">{b.name}</h3>
        <p className="text-sm text-gray-600">{b.tagline}</p>
        {b.cats?.length > 0 && (
          <p className="text-xs text-gray-500 mt-1">{b.cats.join(', ')}</p>
        )}
        <button className="mt-3 text-xs font-semibold text-gray-900 underline">View details</button>
      </div>
    </div>
  )
}

export default function Brands() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    if (active === 'All') return ALL_BRANDS
    if (['Women','Men','Kids'].includes(active)) {
      return ALL_BRANDS.filter(b => b.segment.includes(active))
    }
    if (['Licensed','Private Label'].includes(active)) {
      return ALL_BRANDS.filter(b => b.type.includes(active))
    }
    return ALL_BRANDS
  }, [active])

  return (
    <Layout>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-gray-900">Brands</h1>
          <p className="text-gray-600">From everyday comfort to elevated dress, our portfolio spans Women’s, Men’s, and Kids across private label and licensed programs.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setActive(f)} className={`text-sm px-3 py-1 rounded-full border ${active===f?'bg-gray-900 text-white border-gray-900':'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'}`}>
                {f}
              </button>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {filtered.map(b => <BrandCard key={b.name} b={b} />)}
          </div>
        </div>
      </section>
    </Layout>
  )
}
