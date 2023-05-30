import SectionTitle from './SectionTitle'
import ToursCard from './ToursCard'

export default function Tours() {
  return (
    <>
      <section className='section' id='tours'>
        <SectionTitle firstWord={'featured'} secondWord={'tours'} />
        <ToursCard />
      </section>
    </>
  )
}
