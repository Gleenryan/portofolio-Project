import Link from 'next/link'
import '../utils/utils.css'
import './styles/about.css'
import './styles/feature.css'
import './styles/work.css'
export default function Home() {
  return (
    <main >
      {/* about section */}
      <section id='about' className='about container section'>
        <div className="about__content">
          <h2 className='about__title'>About</h2>
          <p className='about__description'>Hello! I'm Ryan, a <strong>Frontend / Fullstack</strong> web developer based in Indonesia. I code everyday, especially in the morning and learn to build things on the web all day, everyday.</p>
          <p className='about__description'>People who know me say I'm disciplined, that's fair, I am very <strong>self-disciplined</strong>, enthusiast and love to learn & improve.</p>
          <p className='about__description'>I started learning to code when I was 15 & from that moment until now I still excited to code. </p>
          <hr className='about__hr' />
          <h3 className='about__subtitle'>Technologies</h3>
          <div className="about__ul-container">
            <ul className='about__ul'>
              <li className='about__list'>JavaScript</li>
              <li className='about__list'>CSS</li>
              <li className='about__list'>HTML</li>

            </ul>
            <ul className='about__ul'>
              <li className='about__list'>ReactJS</li>
              <li className='about__list'>NextJS</li>
              <li className='about__list'>Python</li>
            </ul>
          </div>
        </div>
        <div className="about__img-wrapper">
          <img loading='lazy' className='about__img' src="/about.jpg" alt="about picture" />
        </div>
      </section>

      {/* featured section */}
      <section id='featured' className='featured container section'>
        <h3 className='featured__subtitle'> Featured project</h3>
        <div className="featured__wrapper">
          <h2>The TyperMaster</h2>
          <Link className='featured__link' href='#'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
          </svg>
          </Link>
        </div>
        <p className='featured__description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis error cumque ipsam eveniet rem natus consectetur. Quas possimus nisi, magni rerum, omnis vero aut, illum voluptatum aspernatur veniam nobis dolor.</p>
        <div className="featured__info-container">
          <div >
            <h3 className="featured__label">Tech stack</h3>
            <ul className='featured__tech-stack'>
              <li className='featured__info'>TypeScript</li>
              <li className='featured__info'>ReactJs</li>
              <li className='featured__info'>React-hook-form</li>
              <li className='featured__info'>NextJs</li>
              <li className='featured__info'>--</li>
              <li className='featured__info'>--</li>
              <li className='featured__info'>--</li>
            </ul>
          </div>
          <div className="">
            <h3 className="featured__label">Project type</h3>
            <p className='featured__info'>Fullstack-Jamstack</p>
          </div>
          <div className="">
            <h3 className="featured__label">Timeline</h3>
            <p className='featured__info'>December 2023 - present</p>
          </div>
        </div>
        <div className="featured__img-container">
          <div className='featured__img-wrapper'>
            <img loading='lazy' src="/slayingthedragon.png" alt="picture" />
          </div>
          <div className='featured__img-wrapper'>
            <img loading='lazy' src="/slayingthedragon.png" alt="picture" />
          </div>
          <div className='featured__img-wrapper'>
            <img loading='lazy' src="/slayingthedragon.png" alt="picture" />
          </div>
          <div className='featured__img-wrapper'>
            <img loading='lazy' src="/slayingthedragon.png" alt="picture" />
          </div>
          <div className='featured__img-wrapper'>
            <img loading='lazy' src="/slayingthedragon.png" alt="picture" />
          </div>
          <div className='featured__img-wrapper'>
            <img loading='lazy' src="/slayingthedragon.png" alt="picture" />
          </div>
          <div className='featured__img-wrapper'>
            <img loading='lazy' src="/slayingthedragon.png" alt="picture" />
          </div>
          <div className='featured__img-wrapper'>
            <img loading='lazy' src="/slayingthedragon.png" alt="picture" />
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id='work' className='work container section'>
        <h2 className='work__title'>Projects</h2>
        <p className='work__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam laborum reiciendis fugit dicta, magni autem voluptatibus? Quas maiores, nisi, adipisci beatae quisquam itaque numquam inventore incidunt aliquid totam labore.</p>

        <div className="work__container">
          {/* project 1 */}
          <h3 className='work__project-title'>Wax Motif</h3>
          <div className="work__img-wrapper work__image1">
            <img loading='lazy' src="/waxmoney.png" alt="Wax Motif website" />
          </div>
          <div className="work__project work__content1">
            <h3 className='work__project-subtitle'>Wax Motif</h3>
            <p className='work__project-description1'>
              lorem de amer ut non labore lorem nisi culpa sint et quis sint. enim pariatur deserunt do ad exercitation
            </p>
            <p className='work__project-description2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque et ad eligendi facilis, nesciunt quis culpa sunt ipsum quae iure non vitae, perspiciatis illum possimus quaerat, explicabo ratione optio!</p>
            <Link className='btn work__project-btn' href='#'>Website</Link>
          </div>

          {/* project 2 */}
          <h3 className='work__project-title'>Draze Force</h3>
          <div className="work__img-wrapper work__image2">
            <img loading='lazy' src="/waxmoney.png" alt="Draze Force website" />
          </div>
          <div className="work__project work__content2">
            <h3 className='work__project-subtitle'>Draze Force</h3>
            <p className='work__project-description1'>
              lorem de amer ut non labore lorem nisi culpa sint et quis sint. enim pariatur deserunt do ad exercitation
            </p>
            <p className='work__project-description2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque et ad eligendi facilis, nesciunt quis culpa sunt ipsum quae iure non vitae, perspiciatis illum possimus quaerat, explicabo ratione optio!</p>
            <Link className='btn work__project-btn' href='#'>Website</Link>
          </div>

          {/* project 3 */}
          <h3 className='work__project-title'>Artren</h3>
          <div className="work__img-wrapper work__image3">
            <img loading='lazy' src="/waxmoney.png" alt="Artren website" />
          </div>
          <div className="work__project work__content3">
            <h3 className='work__project-subtitle'>Artren</h3>
            <p className='work__project-description1'>
              lorem de amer ut non labore lorem nisi culpa sint et quis sint. enim pariatur deserunt do ad exercitation
            </p>
            <p className='work__project-description2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque et ad eligendi facilis, nesciunt quis culpa sunt ipsum quae iure non vitae, perspiciatis illum possimus quaerat, explicabo ratione optio!</p>
            <Link className='btn work__project-btn' href='#'>Website</Link>
          </div>

          {/* project 4 */}
          <h3 className='work__project-title'>Project 4</h3>
          <div className="work__img-wrapper work__image4">
            <img loading='lazy' src="/waxmoney.png" alt="Wax Motif website" />
          </div>
          <div className="work__project work__content4">
            <h3 className='work__project-subtitle'>Project 4</h3>
            <p className='work__project-description1'>
              lorem de amer ut non labore lorem nisi culpa sint et quis sint. enim pariatur deserunt do ad exercitation
            </p>
            <p className='work__project-description2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque et ad eligendi facilis, nesciunt quis culpa sunt ipsum quae iure non vitae, perspiciatis illum possimus quaerat, explicabo ratione optio!</p>
            <Link className='btn work__project-btn' href='#'>Website</Link>
          </div>

          {/* project 5 */}
          <h3 className='work__project-title'>Project 5</h3>
          <div className="work__img-wrapper work__image5">
            <img loading='lazy' src="/waxmoney.png" alt="Draze Force website" />
          </div>
          <div className="work__project work__content5">
            <h3 className='work__project-subtitle'>Project 5</h3>
            <p className='work__project-description1'>
              lorem de amer ut non labore lorem nisi culpa sint et quis sint. enim pariatur deserunt do ad exercitation
            </p>
            <p className='work__project-description2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque et ad eligendi facilis, nesciunt quis culpa sunt ipsum quae iure non vitae, perspiciatis illum possimus quaerat, explicabo ratione optio!</p>
            <Link className='btn work__project-btn' href='#'>Website</Link>
          </div>

          {/* project 6 */}
          <h3 className='work__project-title'>Project 6</h3>
          <div className="work__img-wrapper work__image6">
            <img loading='lazy' src="/waxmoney.png" alt="Artren website" />
          </div>
          <div className="work__project work__content6">
            <h3 className='work__project-subtitle'>Project 6</h3>
            <p className='work__project-description1'>
              lorem de amer ut non labore lorem nisi culpa sint et quis sint. enim pariatur deserunt do ad exercitation
            </p>
            <p className='work__project-description2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque et ad eligendi facilis, nesciunt quis culpa sunt ipsum quae iure non vitae, perspiciatis illum possimus quaerat, explicabo ratione optio!</p>
            <Link className='btn work__project-btn' href='#'>Website</Link>
          </div>
        </div>





      </section>
    </main >
  )
}
