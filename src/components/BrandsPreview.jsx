import { useNavigate } from 'react-router-dom'

const brands = [
  { name: 'CCM', tagline: "Women’s & Girls’ fashion", cats: 'Flats, sandals, wedges' },
  { name: 'Nicole Miller', tagline: 'Women’s fashion', cats: 'Sandals, sneakers' },
  { name: 'Hurley', tagline: 'Kids & Men’s lifestyle/athletic', cats: 'Water/outdoor sandals, sneakers' },
  { name: 'Tahari', tagline: 'Women’s & Men’s dress/casual', cats: '' },
  { name: 'Taryn Rose', tagline: 'Women’s comfort dress', cats: '' },
  { name: 'Ann Taylor', tagline: 'Women’s elevated classics', cats: 'Active' },
]

export default function BrandsPreview() {
  const navigate = useNavigate()
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Our Brands</h2>
          <button onClick={() => navigate('/brands')} className="text-sm font-semibold text-gray-900 hover:underline">See all</button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {brands.map((b) => (
            <div key={b.name} className="group rounded-xl border border-gray-200 p-5 hover:shadow-sm transition bg-gradient-to-br from-gray-50 to-white">
              <div className="h-12 w-12 rounded-md bg-gray-900 text-white flex items-center justify-center font-bold text-sm">{b.name[0]}</div>
              <div className="mt-3">
                <h3 className="font-semibold text-gray-900">{b.name}</h3>
                <p className="text-sm text-gray-600">{b.tagline}</p>
                {b.cats && <p className="text-xs text-gray-500 mt-1">{b.cats}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
