import logo from './logo.svg';
import './App.css';
import './userdata.css';
import React from 'react';
import projectsList from './projectData';
import volunteeringList from './volunteeringData';
import educationList from './educationData';
import educationListDisplay from './userDataDisplay';
import TypeWriterEffect from 'react-typewriter-effect';


function App() {
  const education=educationList.map((eduItem)=>{
      <eduListDisplay 
      name={eduItem.name}
      institute={eduItem.institute}
      grade={eduItem.grade}
      year={eduItem.year}
      />
})

   return (
    <div className="App">
      <video autoPlay loop muted id='video'>
        <source src="media/blue.mp4" type="video/mp4" />
      </video>

      <header className="app-header">

        <div className="container">
          <h1 className='welcome'>Hi there! I'm Khushi Panwar</h1>
          <h2 className='welcome-2'>
        
        <TypeWriterEffect
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'A Full Stack Developer',
          'A Mentor',
          'A Community Builder',
          'A YouTuber',          
          'A Full Stack Developer',
        ]}
        loop={true}
        nextTextDelay={1000}
        typeSpeed={40}
      />

    </h2>
        </div>

        <div className='pfp-container'>
          <img src="media/pfp.png" alt="Khushi Panwar" className="pfp" />
        </div>
      </header>

      <section className="about">
        <center>
        <img src="media/clouds.png" className="clouds" />
        <img src="media/clouds-2.png" className="clouds-2" />
      
         <h2 className='section-heading'>About Me</h2>
          <div className="about-text">
            I'm a third year undergrad pursuing B.Sc (Hons) in Computer Science from Shaheed Rajguru College of Applied Sciences for Women, University of Delhi.
             I'm a Full Stack Developer, Mentor, Community Builder and a YouTuber. I'm currently working as a Technical Lead at Google Developer Student Club, SRCASW. I'm also a Microsoft Learn Student Ambassador and an Alpha MLSA. I'm a passionate learner and love to explore new technologies. I'm currently learning about Cloud Computing and DevOps. I'm also a part of the organizing team of UDAAN'23, the annual fest of Institutions Innovation Council, SRCASW. I'm also a part of the organizing team of AceHack 2.0, a 24 hour in-person hackathon organized in UEM Jaipur on 1st-2nd April 2023. I'm also a part of the organizing team of Tech-A-Thon 2.0, a 24 hour online hackathon in the domain of healthcare, education and open innovation with a prize pool of 1.8 Lakh+ on 25-26th March 2023.
          </div>
  
          </center>
      </section>

      <section className="education">
        <center>
        <h2 className='section-heading'>Education</h2>   
        <div> 
          <educationListDisplay data={educationList} />
          </div> 
        
          </center>
      </section>

      <section className="experience">
        <center>
        <h2 className='section-heading'>Experience</h2>   
        <div className="experience-container">

          </div> 
          </center>
      </section>

      <section className="volunteering">
        <center>
        <h2 className='section-heading'>Volunteering</h2>   
        <div className="volunteer-container">

          </div> 
          </center>
      </section>

      <section className="projects">
        <center>
        <h2 className='section-heading'>Projects</h2>   
        <div className="project-container">

          </div> 
          </center>
      </section>


    </div>
  );
}

export default App;
