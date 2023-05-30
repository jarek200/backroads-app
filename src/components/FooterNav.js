export default function FooterNav() {
  const footerNav = [
    { href: '#home', label: 'home' },
    { href: '#about', label: 'about' },
    { href: '#services', label: 'services' },
    { href: '#featured', label: 'featured' },
  ]
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
