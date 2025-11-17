export default function FactoryBand() {
  const badges = [
    'VN', 'BD', 'EG', 'CN', 'CPSIA', 'Prop 65', 'REACH', 'MOQ 2k+', 'LT 60-90d'
  ]
  return (
    <section className="bg-gradient-to-r from-emerald-50 to-teal-50 border-y border-emerald-100">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap gap-2 items-center justify-center">
        {badges.map((b) => (
          <span key={b} className="text-xs px-3 py-1 rounded-full bg-white text-emerald-700 border border-emerald-200 shadow-sm">
            {b}
          </span>
        ))}
      </div>
    </section>
  )
}
