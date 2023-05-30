export default function FooterIcons() {
  const footerIcons = [
    { href: 'https://www.facebook.com', iconClass: 'fab fa-facebook', target: '_blank' },
    { href: 'https://www.twitter.com', iconClass: 'fab fa-twitter', target: '_blank' },
    { href: 'https://www.squarespace.com', iconClass: 'fab fa-squarespace', target: '_blank' },
  ]
  return (
    <ul className='footer-icons'>
      {footerIcons.map((item, index) => (
        <li key={index}>
          <a href={item.href} target={item.target} className='footer-icon'>
            <i className={item.iconClass}></i>
          </a>
        </li>
      ))}
    </ul>
  )
}
