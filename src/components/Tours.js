import ToursCard from './ToursCard'

export default function Tours() {
  return (
    <>
      <section className='section' id='tours'>
        <div className='section-title'>
          <h2>
            featured <span>tours</span>
          </h2>
        </div>
        <ToursCard />
      </section>
    </>
  )
}
