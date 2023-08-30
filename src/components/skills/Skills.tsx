import { useInView } from 'react-intersection-observer';
import HTML5 from '../../assets/HTML5_Badge.svg';
import CSS from '../../assets/CSS3_logo.svg';
import JAVASCRIPT from '../../assets/Unofficial_JavaScript_logo_2.svg';
import REACT from '../../assets/react.svg';
import MongoDb from '../../assets/Mongodb-icon.svg';
import Figma from '../../assets/figma-icon.svg';
import Express from '../../assets/expressjs-icon.svg';
import './skills.css';

const Skills = () => {
  const { ref: myRef, inView: test } = useInView({ triggerOnce: true });

  return (
    <section
      ref={myRef}
      id='skills'
      className={`${test ? 'fade skills__section' : 'skills__section'}`}
    >
      <h2 className='skills__section-title'>Technologies I use</h2>
      <div className='skills__section-container'>
        <figure>
          <img src={HTML5} alt='html 5 logo' />
          <figcaption>HTML5</figcaption>
        </figure>
        <figure>
          <img src={CSS} alt='css logo' />
          <figcaption>CSS</figcaption>
        </figure>
        <figure>
          <img src={JAVASCRIPT} alt='JavaScript logo' />
          <figcaption>JS</figcaption>
        </figure>
        <figure>
          <img src={REACT} alt='React logo' />
          <figcaption>React</figcaption>
        </figure>
        <figure>
          <img src={MongoDb} alt='MongoDb logo' />
          <figcaption>MongoDb</figcaption>
        </figure>

        <figure>
          <img src={Express} alt='Express logo' />
          <figcaption>Express JS</figcaption>
        </figure>
        <figure>
          <img src={Figma} alt='Figma logo' />
          <figcaption>Figma</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Skills;
