import { motion } from 'framer-motion'

export default function Hero({ onPrimaryClick, onSecondaryClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-sky-50" />
      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Design. License. Deliver. Footwear at scale.
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-gray-700 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Family-owned since 1983, LV1 Group powers private label and licensed footwear for leading retailers.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onPrimaryClick} className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-semibold hover:bg-gray-800 transition">
                View Brands
              </button>
              <button onClick={onSecondaryClick} className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-semibold ring-1 ring-gray-200 hover:bg-gray-50 transition">
                Book a Line Review
              </button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <motion.div
              className="aspect-[4/3] rounded-xl bg-white/70 backdrop-blur border border-white/60 shadow-xl"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="h-full w-full grid grid-cols-3 gap-3 p-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.03, duration: 0.4 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
