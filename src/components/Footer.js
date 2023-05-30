export default function Footer() {
  const footerNav = [
    { href: '#home', label: 'home' },
    { href: '#about', label: 'about' },
    { href: '#services', label: 'services' },
    { href: '#featured', label: 'featured' },
  ]

  const footerIcons = [
    { href: 'https://www.facebook.com', iconClass: 'fab fa-facebook', target: '_blank' },
    { href: 'https://www.twitter.com', iconClass: 'fab fa-twitter', target: '_blank' },
    { href: 'https://www.squarespace.com', iconClass: 'fab fa-squarespace', target: '_blank' },
  ]

  return (
    <>
      <footer className='section footer'>
        <ul className='footer-links'>
          {footerNav.map((item, index) => (
            <li key={index}>
              <a href={item.href} className='footer-link'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className='footer-icons'>
          {footerIcons.map((item, index) => (
            <li key={index}>
              <a href={item.href} target={item.target} className='footer-icon'>
                <i className={item.iconClass}></i>
              </a>
            </li>
          ))}
        </ul>
        <p className='copyright'>
          copyright &copy; Backroads travel tours company
          <span id='date'></span> all rights reserved
        </p>
      </footer>
    </>
  )
}
