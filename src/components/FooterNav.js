import { footerNav } from './data'

export default function FooterNav() {
  return (
    <ul className='footer-links'>
      {footerNav.map((item, index) => (
        <li key={index}>
          <a href={item.href} className='footer-link'>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
