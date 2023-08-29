import { useInView } from 'react-intersection-observer';
import './experience.css';

const Experience = () => {
  const { ref: myRef, inView: test } = useInView({ triggerOnce: true });
  return (
    <section
      ref={myRef}
      className={`${test ? 'fade experience__section' : 'experience__section'}`}
      id='experience'
    >
      <h2 className='experience__section-title'>EXPERIENCE</h2>
      <div className='experience_section-style'>
        <h2>Capstone Project, Portland State University</h2>
        <p className='experience__section-date'>January 2023 - June 2023</p>

        <p className='experience__section-description'>
          Provided a centralized location for iGrafx project development process visualization by
          integrating GitLab, Jira, and Sonar
        </p>
        <ul className='experience__section-ul'>
          <li className='exprerience__section--li'>
            Provided a centralized location for project development process visualization by
            integrating GitLab, Jira, and Sonar
          </li>
          <li className='exprerience__section--li'>
            Implemented a task management system for three project teams, allowing task creation and
            check-off functionality
          </li>
          <li className='exprerience__section--li'>
            Developed email notifications to be sent when tasks are checked off, keeping project
            members updated on task completion
          </li>
          <li className='exprerience__section--li'>
            Created the ability to subscribe to projects, allowing users to receive updates and
            notifications
          </li>
        </ul>
        <ul className='experience__ul--container'>
          <li>
            <div className='experience__technology--container'>React</div>
          </li>
          <li>
            <div className='experience__technology--container'>Material UI</div>
          </li>
          <li>
            <div className='experience__technology--container'>Express JS</div>
          </li>
          <li>
            <div className='experience__technology--container'>MongoDB</div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
