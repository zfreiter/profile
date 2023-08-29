import { useInView } from 'react-intersection-observer';
import stock from '../../assets/profile-picture.jpg';

import './about.css';

const About = () => {
  const { ref: myRef, inView: test } = useInView({ triggerOnce: true });

  return (
    <section
      ref={myRef}
      id='about'
      className={`${test ? 'fade about__section' : 'about__section'}`}
    >
      <div>
        <h2 className='about__section-title'>About Me</h2>
        <div className='about__section-container'>
          <div className='about__container--text'>
            <p>
              Hello, I'm Zachary, and I'm passionate about building things for the Web. My journey
              in computer science began at Portland State University, and in June 2023, I
              successfully earned my degree.
            </p>
            <p>
              Currently, I'm drawn to front-end web development. It's a fusion of my creativity and
              technical skills, allowing me to craft websites that are not only visually appealing
              but also interactive and engaging. This process keeps me motivated, as there's a
              constant flow of new challenges that both test and excite me.
            </p>
          </div>
          <div className='about__container--picture'>
            <figure>
              <div className='wrapper '>
                <div className='inner_wrapper border'>
                  <img
                    className='about__section-container-img'
                    src={stock}
                    alt='Picture of Zachary Freiter'
                  />
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
