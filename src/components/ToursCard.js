import tour1 from '../images/tour-1.jpeg'
import tour2 from '../images/tour-2.jpeg'
import tour3 from '../images/tour-3.jpeg'
import tour4 from '../images/tour-4.jpeg'
import tour5 from '../images/tour-5.jpeg'
import tour6 from '../images/tour-6.jpeg'

export default function ToursCard() {
  const tours = [
    {
      imageSrc: tour1,
      date: 'august 26th, 2020',
      title: 'Tibet Adventure',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
      location: 'china',
      duration: '6 days',
      price: 'from $2100',
    },
    {
      imageSrc: tour2,
      date: 'october 1st, 2020',
      title: 'Best of Java',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
      location: 'indonesia',
      duration: '11 days',
      price: 'from $1400',
    },
    {
      imageSrc: tour3,
      date: 'september 15th, 2020',
      title: 'Explore Hong Kong',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
      location: 'hong kong',
      duration: '8 days',
      price: 'from $5000',
    },
    {
      imageSrc: tour4,
      date: 'december 5th, 2019',
      title: 'Kenya Highlights',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
      location: 'kenya',
      duration: '20 days',
      price: 'from $3300',
    },
    {
      imageSrc: tour5,
      date: 'december 5th, 2019',
      title: 'Mozambik',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
      location: 'mozambik',
      duration: '20 days',
      price: 'from $3300',
    },
    {
      imageSrc: tour6,
      date: 'december 5th, 2019',
      title: 'India',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
      location: 'india',
      duration: '20 days',
      price: 'from $3300',
    },
  ]
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
