import ServiceItems from './ServiceItems'

export default function Services() {
  return (
    <>
      <section className='section services' id='services'>
        <div className='section-title'>
          <h2>
            our <span>services</span>
          </h2>
        </div>
        <ServiceItems />
      </section>
    </>
  )
}
