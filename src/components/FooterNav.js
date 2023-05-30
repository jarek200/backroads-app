import { navLinks } from './data'

export default function FooterNav() {
  return (
    <ul className='footer-links'>
      {navLinks.map((item, index) => (
        <li key={index}>
          <a href={item.href} className='footer-link'>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
