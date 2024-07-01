import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div id='contact'>
     <h2 className="text-center text-emerald-500 text-4xl font-bold pt-4">Contact</h2>
      <div className='flex flex-col lg:flex-row my-8'>
        <a href='https://mail.google.com/mail/u/0/#inbox' className='hover:underline flex-1'>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: 'green' }} /> 
          <span className='text-blue-800 text-bold'>quadrilatifat03@gmail.com</span>
        </a>
        <a href='#' className='hover:underline'>
         <FontAwesomeIcon icon={faPhone} style={{ color: 'green' }} /> 
          <span className='text-blue-800 text-bold flex-1'>09016268031</span>
        </a>
        <a href='https://www.linkedin.com/feed/' className='hover:underline flex-1'><FontAwesomeIcon icon={faLinkedin} style={{ color: 'green' }} /> <span className='text-blue-800 text-bold'>Quadri Latifat</span></a>
        <a href='https://www.linkedin.com/feed/' className='hover:underline flex-1'><FontAwesomeIcon icon={faGithub} style={{ color: 'green' }} /> 
        <span className='text-blue-800 text-bold'>latifatquadri</span></a>
      </div>
    </div>
  )
}

export default Contact
