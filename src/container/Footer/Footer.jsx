import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import WavyText from '../../components/wavyText'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ username: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  const { username, email, message } = formData

  const handleChangeInput = (e) => {
    if (error) {
      setError(false)
    }
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    if(formData.username !=='' && formData.email !== '' && formData.message !== '') {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
      .catch((err) => console.log(err))
    } else {
      setError(true)
    }
  }

  return (
    <>
       <WavyText text="Take a chai & chat with me" color='black'/>
      {/* <motion.h2 style={{ display: "flex" }}
      animate={{
        x: 0,
        backgroundColor: "#000",
        boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
        position: "fixed",
        initial="hidden",
        animate="visible"
        // transitionEnd: {
        //   display: "visible",
        // },
      }}> */}
      {/* <h2 className="head-text">Take a</h2>
      <h2 className="head-text1">coffee </h2>
      <h2 className="head-text"> & chat with me</h2>
      </motion.h2> */}
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">vijaybaskar.t7@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+919360718345" className="p-text">+91 9360718345</a>
        </div>
      </div>
      {error ? <WavyText text="!! Please Enter All Fields !!" color ='red'/> : null}
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
)