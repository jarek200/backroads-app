export default function ServiceItems() {
  const services = [
    {
      iconClass: 'fas fa-wallet fa-fw',
      title: 'saving money',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    },
    {
      iconClass: 'fas fa-tree fa-fw',
      title: 'endless hiking',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    },
    {
      iconClass: 'fas fa-socks fa-fw',
      title: 'amazing comfort',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    },
  ]

  return (
    <div className='section-center services-center'>
      {services.map((service, index) => (
        <article className='service' key={index}>
          <span className='service-icon'>
            <i className={service.iconClass}></i>
          </span>
          <div className='service-info'>
            <h4 className='service-title'>{service.title}</h4>
            <p className='service-text'>{service.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
