import SectionTitle from './SectionTitle'
import ServiceItems from './ServiceItems'

export default function Services() {
  return (
    <>
      <section className='section services' id='services'>
        <SectionTitle firstWord={'our'} secondWord={'services'} />
        <ServiceItems />
      </section>
    </>
  )
}
