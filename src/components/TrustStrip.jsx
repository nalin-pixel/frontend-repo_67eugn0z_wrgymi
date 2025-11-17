export default function TrustStrip() {
  const stats = [
    { label: 'Active Programs', value: '40+' },
    { label: 'Annual Sales', value: '$60M+' },
    { label: 'Factory Network', value: 'Non-China' },
  ]

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="text-sm text-gray-600">Trusted by leading U.S. retailers</p>
          <div className="flex-1 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                <div className="text-xl font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
