export default function ShowroomHighlight() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Showroom</h2>
          <a href="#contact" className="text-sm font-semibold text-gray-900 hover:underline">Book a Visit</a>
        </div>
        <div className="mt-6 columns-2 md:columns-3 gap-3 [&>*]:mb-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-32 md:h-40 w-full bg-gray-100 rounded-lg border border-gray-200" />
          ))}
        </div>
      </div>
    </section>
  )
}
