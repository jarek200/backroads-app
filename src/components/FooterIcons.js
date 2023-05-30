import { navIcons } from './data'
export default function FooterIcons() {
  return (
    <ul className='footer-icons'>
      {navIcons.map((item, index) => (
        <li key={index}>
          <a href={item.href} target={item.target} className='footer-icon'>
            <i className={item.iconClass}></i>
          </a>
        </li>
      ))}
    </ul>
  )
}
