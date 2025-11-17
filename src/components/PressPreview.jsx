export default function PressPreview() {
  const items = [
    { title: 'Retailer win: Back-to-School', desc: 'Assortment build + on-time delivery' },
    { title: 'Case Study: Sell-through 70%+', desc: 'Comfort sandals program' },
    { title: 'Lookbook', desc: 'Seasonal highlights' },
  ]
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Press & Results</h2>
          <a href="#" className="text-sm font-semibold text-gray-900 hover:underline">See all</a>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((it) => (
            <article key={it.title} className="rounded-xl border border-gray-200 p-5 bg-gradient-to-br from-gray-50 to-white hover:shadow-sm transition">
              <h3 className="font-semibold text-gray-900">{it.title}</h3>
              <p className="text-sm text-gray-600">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
