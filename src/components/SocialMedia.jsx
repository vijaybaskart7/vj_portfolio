import React from 'react'
import { BsTwitter, BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a href='https://twitter.com/vijaybaskart7' target='_blank'>
        <BsTwitter />
      </a>
    </div>
    <a href='https://github.com/vijaybaskart7' target='blank'>
    <div>
      <BsGithub />
    </div>
    </a>
  </div>
);

export default SocialMedia