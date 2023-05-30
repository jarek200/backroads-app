export default function Tours() {
  const tours = [
    {
      imageSrc: './images/tour-1.jpeg',
      date: 'august 26th, 2020',
      title: 'Tibet Adventure',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
      location: 'china',
      duration: '6 days',
      price: 'from $2100',
    },
    {
      imageSrc: './images/tour-2.jpeg',
      date: 'october 1st, 2020',
      title: 'Best of Java',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
      location: 'indonesia',
      duration: '11 days',
      price: 'from $1400',
    },
    {
      imageSrc: './images/tour-3.jpeg',
      date: 'september 15th, 2020',
      title: 'Explore Hong Kong',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
      location: 'hong kong',
      duration: '8 days',
      price: 'from $5000',
    },
    {
      imageSrc: './images/tour-4.jpeg',
      date: 'december 5th, 2019',
      title: 'Kenya Highlights',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
      location: 'kenya',
      duration: '20 days',
      price: 'from $3300',
    },
  ]

  return (
    <>
      <section className='section' id='tours'>
        <div className='section-title'>
          <h2>
            featured <span>tours</span>
          </h2>
        </div>

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
      </section>
    </>
  )
}
