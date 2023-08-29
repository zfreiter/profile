import { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [toggleForm, setToggleForm] = useState<Boolean>(false);

  const onSubmit = () => {
    const set = () => {
      setToggleForm(false);
    };
    setTimeout(() => {
      set();
    }, 10);
  };

  const openForm = () => {
    setToggleForm(true);
    var height = document.body.scrollHeight;

    setTimeout(() => {
      window.scroll(0, height);
    }, 0);
  };

  return (
    <section className='contact__section' id='contact'>
      {toggleForm ? (
        <form
          className='contact__section-form'
          action='mailto:zfreiter@gmail.com'
          method='post'
          encType='text/plain'
        >
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' placeholder='Your name...'></input>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' placeholder='Your email...' />
          <label htmlFor='message'>Your message</label>
          <textarea id='message' name='message' />
          <div className='contact__section-form-buttons'>
            <button
              className='contact__section-form-submit '
              type='submit'
              value='send'
              onClick={onSubmit}
            >
              Submit
            </button>
            <button
              className='contact__section-form-cancel'
              type='button'
              onClick={() => setToggleForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button className='contact__section_button' onClick={openForm}>
          Contact me
        </button>
      )}
    </section>
  );
};

export default Contact;
