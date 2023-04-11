import React from 'react'
import {  BsLinkedin, BsGithub } from 'react-icons/bs'


function SocialMedia() {
  return (
    <div className='app__social'>
        <div>
            <a href='https://www.linkedin.com/in/iain-mosima-b5b330211' target='blank'>
              <BsLinkedin />
            </a>
        </div>

        <div>
            <a href='https://github.com/IainMosima' target='blank'>
              <BsGithub />
            </a>
        </div>

    </div>
  )
}

export default SocialMedia