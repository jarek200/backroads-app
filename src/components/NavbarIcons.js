export default function NavbarIcons() {
  const navIcons = [
    { href: 'https://www.facebook.com', iconClass: 'fab fa-facebook', target: '_blank' },
    { href: 'https://www.twitter.com', iconClass: 'fab fa-twitter', target: '_blank' },
    { href: 'https://www.squarespace.com', iconClass: 'fab fa-squarespace', target: '_blank' },
  ]
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
