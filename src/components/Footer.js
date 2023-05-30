import FooterNav from './FooterNav'
import FooterIcons from './FooterIcons'

export default function Footer() {
  return (
    <>
      <footer className='section footer'>
        <FooterNav />
        <FooterIcons />

        <p className='copyright'>
          copyright &copy; Backroads travel tours company
          <span id='date'></span> all rights reserved
        </p>
      </footer>
    </>
  )
}
