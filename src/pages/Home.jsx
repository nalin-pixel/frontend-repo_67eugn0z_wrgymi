import Layout from '../components/Layout'
import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'
import BrandsPreview from '../components/BrandsPreview'
import Capabilities from '../components/Capabilities'
import FactoryBand from '../components/FactoryBand'
import ShowroomHighlight from '../components/ShowroomHighlight'
import PressPreview from '../components/PressPreview'
import LeadForm from '../components/LeadForm'

export default function Home() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const goToBrands = () => {
    window.location.href = '/brands'
  }

  return (
    <Layout>
      <Hero onPrimaryClick={goToBrands} onSecondaryClick={scrollToContact} />
      <TrustStrip />
      <BrandsPreview />
      <Capabilities />
      <FactoryBand />
      <ShowroomHighlight />
      <PressPreview />
      <LeadForm />
    </Layout>
  )
}
