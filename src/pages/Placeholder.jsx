import Layout from '../components/Layout'

export default function Placeholder({ title }) {
  return (
    <Layout>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-600">Coming soon.</p>
        </div>
      </section>
    </Layout>
  )
}
