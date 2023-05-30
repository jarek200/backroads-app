export default function Navbar() {
  const navIcons = [
    { href: 'https://www.facebook.com', iconClass: 'fab fa-facebook', target: '_blank' },
    { href: 'https://www.twitter.com', iconClass: 'fab fa-twitter', target: '_blank' },
    { href: 'https://www.squarespace.com', iconClass: 'fab fa-squarespace', target: '_blank' },
  ]

  const navLinks = [
    { href: '#home', label: 'home' },
    { href: '#about', label: 'about' },
    { href: '#services', label: 'services' },
    { href: '#tours', label: 'tours' },
  ]

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src='./images/logo.svg' className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>

        <ul className='nav-links' id='nav-links'>
          {navLinks.map((item, index) => (
            <li key={index}>
              <a href={item.href} className='nav-link'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className='nav-icons'>
          {navIcons.map((item, index) => (
            <li key={index}>
              <a href={item.href} target={item.target} className='nav-icon'>
                <i className={item.iconClass}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
