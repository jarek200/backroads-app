export default function NavbarLinks() {
  const navLinks = [
    { href: '#home', label: 'home' },
    { href: '#about', label: 'about' },
    { href: '#services', label: 'services' },
    { href: '#tours', label: 'tours' },
  ]

  return (
    <ul className='nav-links' id='nav-links'>
      {navLinks.map((item, index) => (
        <li key={index}>
          <a href={item.href} className='nav-link'>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
