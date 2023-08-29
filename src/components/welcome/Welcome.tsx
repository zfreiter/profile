import './welcome.css';

const Welecome = () => {
  return (
    <header className='welcome__header'>
      <p className='welcome__header-title'>Hi, my name is</p>
      <h1 className='welcome__header-name'>Zachary Freiter</h1>
      <h2 className='welcome__header-second'>I love to design and build web sites.</h2>
      <p>
        I'm a software developer, that focues on creating web applications with top UX design
        principles for user-centricity, simplicity, intuitive navigation, clear communication, and
        seamless interactions across all devices.
      </p>
    </header>
  );
};

export default Welecome;
