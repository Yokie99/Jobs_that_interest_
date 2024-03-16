import React from 'react'
import crunchyroll from '../assets/crunchyroll.jpg'

const CrunchyrollComponent = () => {
  return (
    <div>
      <div className='hero-image'>
        <img className='' src={crunchyroll} />
      </div>

      <h1 className='d-flex justify-content-center py-4'>Crunchyroll - Content Delivery Software Engineer</h1>
      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>Why do you want to work here?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>I would be able to work within an industry that I have loved for a long time</li>
            <li>Promise of performance bonus, flexible TPO, and generous health and dental insurance</li>
            <li>Pet-Friendly office (if I ever get a dog)</li>
            <li>Open to working fully remote</li>
            <li>Possibility to travel to Japan</li>
          </ul>
        </div>

      </div>

      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>Does the job require the current stack that you know. Would you have learn new skills?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>7+ years experience as a software engineer working on back-end, cloud-based systems</li>
            <li>3+ years as a software engineer working on or closely supporting front-end applications</li>
            <li>Experience in GoLang or Node.js (Typescript)</li>
            <li>Experience with AWS/GCP technologies like Lambda, SQS, EventBridge, EC2, S3, DynamoDB, ECS</li>
            <li>Experience with relational databases like MySQL or PostgresDB</li>
            <li>Understanding and experience with common programming constructs like code version control tools like GitHub, CI/CD, writing unit and integration tests</li>

          </ul>
        </div>

      </div>

      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>What goals would you like to achieve in the hypothetical position?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>A stretch goal if I would have the oppertunity to work here would be to meet the cretors of the anime and manga that I watch and enjoy while being able to work for a decent pay and being able to be self sufficient  </li>

          </ul>
        </div>

      </div>

      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>Do you currently have the skillsets for the job?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>Not at the moment, I would need to learn about cloud computing and would need more expereience with backend software and databases </li>

          </ul>
        </div>

      </div>

      <div className='row'>
        <div className='d-flex justify-content-around'>
          <a href="https://boards.greenhouse.io/crunchyroll/jobs/5695890?gh_jid=5695890">Link to Job Listing</a>
          <a href="https://www.crunchyroll.com/about/jobs/index.html">Crunchyroll Careers</a>
        </div>

      </div>

    </div>
  )
}

export default CrunchyrollComponent