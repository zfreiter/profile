import { SiLinkedin, SiGithub } from 'react-icons/si';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer__footer'>
      <span>&copy;2023 Zachary Freiter</span>

      <a
        href='https://www.linkedin.com/in/zachary-freiter-00126346/'
        target='_blank'
        role='link'
        title='Linkedin image'
      >
        <SiLinkedin
          className='footer__footer-img'
          size={25}
          aria-label='Read more about Zachary at his Linkedin page'
        />
      </a>
      <a href='https://github.com/zfreiter' target='_blank' role='link' title='Github image'>
        <SiGithub
          className='footer__footer-img'
          size={25}
          aria-label='Read more about Zachary at his Github page'
        />
      </a>
    </footer>
  );
};

export default Footer;
