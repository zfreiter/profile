import { useInView } from 'react-intersection-observer';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import './projects.css';

const Projects = () => {
  const { ref: myRef, inView: test } = useInView({ triggerOnce: true });
  return (
    <section
      ref={myRef}
      id='projects'
      className={`${test ? 'fade section__projects' : 'section__projects'}`}
    >
      <h1 className='section__title'>Projects</h1>

      <div>
        <h2 className='project__title'>Task Manager Helper</h2>
        <p>
          Simplify your productivity with our intuitive todo project. Organize your life
          effortlessly by creating task lists and tracking your to-dos with ease. Stay on top of
          your responsibilities, set deadlines, and mark tasks as you complete them. Whether it's
          for work, school, or personal goals, Task manager helps you stay organized and focused on
          what matters most.
        </p>

        <ul className='project__ul--container'>
          <li>
            <div className='project__technology--container'>React</div>
          </li>
          <li>
            <div className='project__technology--container'>CSS</div>
          </li>
          <li>
            <div className='project__technology--container'>Express JS</div>
          </li>
          <li>
            <div className='project__technology--container'>MongoDB</div>
          </li>
          <li>
            <div className='project__technology--container'>Typescript</div>
          </li>
        </ul>

        <div className='project__links'>
          <a
            className='project_anchor'
            href='https://github.com/zfreiter/Todo-typescript'
            target='_blank'
            role='link'
            title='Github image'
          >
            <SiGithub
              className='project__link-img'
              size={25}
              aria-label='Read more about Zachary at his Github page'
            />
          </a>
          <a
            href='https://todo-typescript-one-lake.vercel.app/'
            target='_blank'
            role='link'
            title='External link image'
          >
            <FiExternalLink
              className='project__link-img'
              size={25}
              aria-label='Read more about Zachary at his Github page'
            />
          </a>
        </div>
      </div>
      <p style={{ marginTop: '2rem' }}>More coming soon . . . . . . </p>
    </section>
  );
};

export default Projects;
