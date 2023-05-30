import { services } from './data'

export default function ServiceItems() {
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
