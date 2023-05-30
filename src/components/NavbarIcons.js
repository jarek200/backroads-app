import { navIcons } from './data'
export default function NavbarIcons() {
  return (
    <ul className='nav-icons'>
      {navIcons.map((item, index) => (
        <li key={index}>
          <a href={item.href} target={item.target} className='nav-icon'>
            <i className={item.iconClass}></i>
          </a>
        </li>
      ))}
    </ul>
  )
}
