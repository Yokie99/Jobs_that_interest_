import React from 'react'
import honda from '../assets/HRC.jpeg'

const HondaComponent = () => {
  return (
    <div>
      <div className='hero-image'>
        <img className='' src={honda} />
      </div>

      <h1 className='d-flex justify-content-center py-4'>Intel - Software Engineer</h1>
      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>Why do you want to work here?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>Competitive Base Salary</li>
            <li>Annual Bonus</li>
            <li>Overtime Pay</li>
            <li>Industry-leading Benefit Plans (Medical, Dental, Vision, Rx)</li>
            <li>Paid time off, including vacation, paid holidays, sick time, and personal days</li>
            <li>401K Plan with company match + additional contribution</li>
            <li>Relocation assistance (if eligible)</li>



            <li>Advancement opportunities</li>
            <li>Career mobility</li>
            <li>Education reimbursement for continued learning</li>
            <li>Training and Development programs</li>
          </ul>
        </div>

      </div>

      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>Does the job require the current stack that you know. Would you have learn new skills?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>Minimum of 3+ Years Prior experience as an experience designer with demonstrable experience in software defined vehicle experiences.</li>
            <li>A strong portfolio of UX design projects that demonstrate your skills and expertise.</li>
            <li>Product Design, Interaction Design, UI/UX Design, Service Design, Information Architecture, Human Computer Interaction, or a portfolio that shows equivalent project experience.</li>

          </ul>
        </div>

      </div>

      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>What goals would you like to achieve in the hypothetical position?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>If I could get a foot in the door at Honda for consumers I would love to then be able to network and move up to HRC, Honda's Racing Company. If that is done it would be so cool if I could have the chance to be on the team that supprts making their Sportbikes and maybe even their MotoGP team.   </li>

          </ul>
        </div>

      </div>

      <div className='row mx-4 py-3'>

        <div className='col'>
          <h5>Do you currently have the skillsets for the job?</h5>

        </div>
        <div className='col'>

          <ul>
            <li>The job listing is very broad and does not list specifics. If I were to want to get this role in particular I would need to do more UX/UI projects to create a  stringer portfolio. Looks like they are looking for experience more than anything with the lanuage of the job listing.  </li>

          </ul>
        </div>

      </div>

      <div className='row'>
        <div className='d-flex justify-content-around'>
          <a href="https://careers.honda.com/job/Raymond-Sr_-Software-Defined-Vehicle-Experience-Engineer-OH-43067/1143747800/">Link to Job Listing</a>
          <a href="https://www.honda.com/careers">Honda Careers</a>
        </div>

      </div>

    </div>
  )
}

export default HondaComponent