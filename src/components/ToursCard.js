import { tours } from './data'

export default function ToursCard() {
  return (
    <div className='section-center featured-center'>
      {tours.map((tour, index) => (
        <article className='tour-card' key={index}>
          <div className='tour-img-container'>
            <img src={tour.imageSrc} className='tour-img' alt='' />
            <p className='tour-date'>{tour.date}</p>
          </div>
          <div className='tour-info'>
            <div className='tour-title'>
              <h4>{tour.title}</h4>
            </div>
            <p>{tour.description}</p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                </span>{' '}
                {tour.location}
              </p>
              <p>{tour.duration}</p>
              <p>{tour.price}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
