import React from 'react'
import google from '../assets/shutterstock_552493561-1536x1024.webp'


const GoogleComponent = () => {
    
  return (
    <div>
      <div className='hero-image'>
        <img className='' src={google} />
      </div>

      <h1 className='d-flex justify-content-center py-4'>Google - Software Engineer</h1>
      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>Why do you want to work here?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>Relocation assistance</li>
            <li>Large compensation package</li>
            <li>Company headquarters: meals and snacks provided.</li>
            <li>Fitness and health centers</li>
            <li>Diverse workspace. Able to meet all kinds of people </li>
            <li>Global presence</li>
            <li>401k matching</li>
          </ul>
        </div>

      </div>

      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>Does the job require the current stack that you know. Would you have learn new skills?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>2 years of experience with software development in one or more programming languages</li>
            <li>The specific role that I am looking at is for machine learning</li>
            <li>Will need to learn data structures, algorrithms, and AI</li>
            <li>TensorFlow and other similar machine learning models</li>
          </ul>
        </div>

      </div>

      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>What goals would you like to achieve in the hypothetical position?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>If possible I would like to stay at google for as long as possible. They are such a large company that can has so many differet roles I would like to be able to work up to a lead or senior in a field of tech that I enjoy </li>

          </ul>
        </div>

      </div>

      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>Do you currently have the skillsets for the job?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>Not at the moment but I meet the requirements for know programming languages. Will need to learn the machine learning algorrithms and software </li>

          </ul>
        </div>

      </div>

      <div className='row'>
        <div className='d-flex justify-content-around'>
<a href="https://www.google.com/about/careers/applications/jobs/results/78031853950247622-software-engineer-iii-machine-learning-youtube?location=California%2C%20USA&sort_by=relevance&q=%22Software%20Engineer%22">Link to Job Listing</a>
      <a href="https://www.google.com/about/careers/applications/">Google Careers</a>
        </div>
      
      </div>

    </div>
  )
}

export default GoogleComponent