import NavbarIcons from './NavbarIcons'
import NavbarLinks from './NavbarLinks'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src='./images/logo.svg' className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <NavbarLinks />
        <NavbarIcons />
      </div>
    </nav>
  )
}
