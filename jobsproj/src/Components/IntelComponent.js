import React from 'react'
import intel from '../assets/intel.jpg'

const IntelComponent = () => {
  return (
    <div>
      <div className='hero-image'>
        <img className='' src={intel} />
      </div>

      <h1 className='d-flex justify-content-center py-4'>Intel - Software Engineer</h1>
      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>Why do you want to work here?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>Annual & Quarterly Bonuses</li>
            <li>Stock Programs</li>
            <li>Retirement Programs</li>
            <li>Family Building Benefits</li>

            <li>Promise of performance bonus, flexible TPO, and generous health and dental insurance</li>
            <li>Life-Long Learning and Tuition Assistance, Job Rotations</li>
            <li>Intel Air Shuttle - six Embraer jet aircraft operates more than 100 flights weekly, connecting employees, providing time savings, and enabling collaboration across U.S.</li>
          </ul>
        </div>

      </div>

      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>Does the job require the current stack that you know. Would you have learn new skills?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>5+ years experience as software development engineer.</li>
            <li>5+ years experience as full stack application development framework, preferably using Ruby on Rails.</li>
            <li>5+ years experience in building web applications interfaces using React and Typescript.</li>

          </ul>
        </div>

      </div>

      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>What goals would you like to achieve in the hypothetical position?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>Intel is similar to Google in that they are both very large companies in tech. They have roles in most every field that I would be interested in so I would like to make a long term career there  </li>

          </ul>
        </div>

      </div>

      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>Do you currently have the skillsets for the job?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>I have experience in React and Typescript but would need to learn Ruby on Rails since that is the primary framework that they use. </li>

          </ul>
        </div>

      </div>

      <div className='row'>
        <div className='d-flex justify-content-around'>
          <a href="https://jobs.intel.com/en/job/phoenix/software-engineer/41147/62599143680">Link to Job Listing</a>
          <a href="https://jobs.intel.com/en/benefits">Intel Careers</a>
        </div>

      </div>

    </div>
  )
}

export default IntelComponent

