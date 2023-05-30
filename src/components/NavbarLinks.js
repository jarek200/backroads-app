import { navLinks } from './data'

export default function NavbarLinks() {
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
