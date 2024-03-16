import React from 'react'
import cisco from '../assets/cisco-building.jpeg'
import styles from '../styles/style.css'

const CiscoComponent = () => {
  return (
    <div>
      <div className='hero-image'>
        <img className='' src={cisco} />
      </div>

      <h1 className='d-flex justify-content-center py-4'>Cisco Inc. - Senior Software Engineer</h1>
      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>Why do you want to work here?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>Remote position</li>
            <li>Sentimental value - first company that I worked for after I finished college</li>
            <li>Health centers and health benefits </li>
            <li>401k matching</li>
            <li>Annual Bonus</li>
            <li>Tuition Matching</li>
          </ul>
        </div>

      </div>

      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>Does the job require the current stack that you know. Would you have learn new skills?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>6 to 8 years Server-side software development experience using Spring /Spring Boot, Java, or NodeJS</li>
            <li>6 to 8 years of experience using JEE and Java concepts like threading, generics, annotations etc.</li>
            <li>2 to 3 years of proficiency in non-SQL databases such as Mongo and Cassandra.</li>
            <li>Proficient in Software development lifecycles, agile delivery methods and DevOps</li>
          </ul>
        </div>

      </div>

      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>What goals would you like to achieve in the hypothetical position?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>I would like to work my way up to a tech lead. My tech lead when i was working there is one of my mentors in my current career journey </li>

          </ul>
        </div>

      </div>

      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>Do you currently have the skillsets for the job?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>Not at the moment but I have beginner experience in some of the current requirements </li>

          </ul>
        </div>

      </div>

      <div className='row'>
        <div className='d-flex justify-content-around'>
<a href="https://jobs.cisco.com/jobs/ProjectDetail/Software-Engineer-1414568/1414568?source=Cisco+Jobs+Career+Site&tags=CDC+Browse+all+jobs+careers">Link to Job Listing</a>
      <a href="https://www.cisco.com/c/en/us/about/careers.html">Cisco Careers</a>
        </div>
      
      </div>

    </div>
  )
}

export default CiscoComponent