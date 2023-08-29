import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaX } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa';
import './navbar.css';

const Menu = () => {
  return (
    <>
      <a href='#about'>About</a>
      <a href='#experience'>Experience</a>
      <a href='#skills'>Skills</a>
      <a href='#projects'>Projects</a>
      <a href='#contact'>contact</a>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<Boolean>(false);
  const [isUp, setIsUp] = useState<Boolean>(false);

  let oldScrollY: number = window.scrollY;

  window.onscroll = function () {
    if (oldScrollY > window.scrollY) {
      setIsUp(true);
      setToggleMenu(false);
    } else {
      setIsUp(false);
    }
    oldScrollY = window.scrollY;
    if (window.scrollY === 0) {
      setIsUp(false);
    }
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className={isUp ? 'navbar sticky' : 'navbar'}>
      <div className='navbar__icons-wrapper' onClick={goToTop}>
        <div className='navbar__name'>Z F</div>
      </div>
      <div className='navbar__menu-container'>
        <Menu />
      </div>
      <div className='navbar__icons'>
        <IconContext.Provider value={{ className: 'top-react-icons' }}>
          {toggleMenu ? (
            <div className='navbar__icons-wrapper'>
              <IconContext.Provider value={{ className: 'navbar__icons-wrapper-fax' }}>
                <FaX onClick={() => setToggleMenu(false)} />
              </IconContext.Provider>
            </div>
          ) : (
            <IconContext.Provider value={{ className: 'navbar__icons-wrapper-faBars' }}>
              <FaBars onClick={() => setToggleMenu(true)} />
            </IconContext.Provider>
          )}
        </IconContext.Provider>
        {toggleMenu && (
          <div className='navbar__toggle-menu-container'>
            <Menu />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
