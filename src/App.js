import logo from './logo.svg';
import './App.css';
import './userdata.css';
import React from 'react';
import projectsList from './projectData';

import volunteeringList from './volunteeringData';
import VolunteeringListDisplay from './volunteeringDataDisplay';

import educationList from './educationData';
import EducationListDisplay from './EducationDataDisplay';
import TypeWriterEffect from 'react-typewriter-effect';
import experienceList from './experienceData';
import ExperienceListDisplay from './ExperienceDataDisplay';
import ProjectListDisplay from './ProjectDataDisplay';


function App() {
  const education = educationList.map((eduItem) => {
    console.log("Eduitem value = " + { eduItem });
    return (
      <EducationListDisplay
        key={eduItem.id}
        name={eduItem.name}
        institute={eduItem.institute}
        grade={eduItem.grade}
        year={eduItem.year}
      />
    )
  })

  const experience = experienceList.map((expItem) => {
    console.log("Eduitem value = " + { expItem });
    return (
      <ExperienceListDisplay
        key={expItem.id}
        name={expItem.name}
        organization={expItem.organization}
        tenure={expItem.tenure}
        desc={expItem.desc}
      />
    )
  })

  const volunteering = volunteeringList.map((volItem) => {
    console.log("Eduitem value = " + { volItem });
    return (
      <VolunteeringListDisplay
        key={volItem.id}
        name={volItem.name}
        position={volItem.position}
        description={volItem.description}
      />
    )
  })

  const project = projectsList.map((item) => {
    console.log("Eduitem value = " + { item });
    return (
      <ProjectListDisplay
        key={item.id}
        name={item.name}
        description={item.description}
        tech={item.tech}
        github={item.github}
      />
    )
  })

  return (
    <div className="App">
      <video autoPlay loop muted id='video'>
        <source src="media/dynamicbg.mp4" type="video/mp4" />
      </video>


      <div className='app-navbar'>

        <a href="#contact">Contact</a>
        <a href="#projects">Projects</a>
        <a href="#volunteer">Volunteering</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#about">About</a>
      </div>

      <header className="app-header">

        <div className="container">
          <h1 className='welcome'>Hi there! I'm Khushi Panwar</h1>
          <h2 className='welcome-2'>

            <TypeWriterEffect
              startDelay={2000}
              cursorColor="#3F3D56"
              loop={true}
              repeat={true}
              nextTextDelay={5000}
              typeSpeed={80}
              multiText={[
                'A Full Stack Developer',
                'A Mentor',
                'A Community Builder',
                'A Content Creator',
                'A Full Stack Developer',
              ]}

            />

          </h2>
        </div>

        <div className='pfp-container'>
          <img src="media/pfp.png" alt="Khushi Panwar" className="pfp" />
        </div>
      </header>

      <section className="about" id="about">
        <img src="media/clouds.png" className="clouds" />
        <img src="media/clouds-2.png" className="clouds-2" />
        <img src="media/astro1.png" className="astro1" />
        <center>

          <h2 className='section-heading'>About Me</h2>
          <div className="about-text">
            I'm a third year undergrad pursuing B.Sc (Hons) in Computer Science from Shaheed Rajguru College of Applied Sciences for Women, University of Delhi.
            <br></br>
            I'm a tech enthusiast passionate about learning latest technologies  and to encourage people to dive into the world of innovations.
            I'm skilled with Front End Website & App Development, Data science '(intermediate)' & Cloud Platforms such as GCP, Azure and AWS.
            <br></br>
            I'm a Full Stack Learner, Mentor, Community Builder and a YouTuber. I'm also an Alpha Microsoft Learn Student Ambassador. Being in community, I've organized various events and hackathons. I always look forward to utilize my skills and gain new learning experiences.

          </div>

        </center>
      </section>

      <section className="education" id="education">
        <img src="media/sphere.png" className="sphere" />
        <img src="media/sphere.png" className="sphere-2" />
        <center>
          <h2 className='section-heading'>Education</h2>
          <div className='education-content'>
            {education}
          </div>
        </center>
      </section>

      <section className="experience" id="experience">
        <img src="media/astro4.png" className="astro-4" />

        <center>
          <h2 className='section-heading'>Experience</h2>
          <div className="experience-content">
            {experience}
          </div>
        </center>
      </section>

      <section className="volunteering" id="volunteer">
        <img src="media/astro3.png" className="astro-3" />

        <center>
          <h2 className='section-heading'>Volunteering</h2>
          <div className='volunteer-content'>
            {volunteering}
          </div>
        </center>
      </section>

      <section className="experience" id="projects">
        <img src="media/astro2.png" className="astro-2" />
        <img src="media/diamond.png" className="spring" />

        <center>
          <h2 className='section-heading'>Projects</h2>
          <div className="project-content">
            {project}
          </div>
        </center>

        <img src="media/spring.png" className="spring" />
        
        <img src="media/diamond.png" className="diamond" />
      </section>

      <section className="contact" id="contact">
        <center>
          <h2 className='section-heading'>Contact Me</h2>
          <div className="volunteer-content">

          </div>
        </center>
      </section>



    </div>
  );
}

export default App;
