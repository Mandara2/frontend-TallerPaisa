import React from 'react'

const ContactUs = () => {
  return (
    <section className="contact">
        <form action="">
            <h2 className="text-center text-2xl font-semibold mb-7">Contact Form</h2>
            <div>
              <label htmlFor="">Full name</label>
              <input type="text" placeholder='Enter your name' required/>
            </div>

            <div>
              <label htmlFor="">Email Address</label>
              <input type="email" placeholder='Enter your email' required/>
            </div>

            <div>
              <label htmlFor="">Your message</label>
              <textarea name="" id="" placeholder='Enter yout message'></textarea>
            </div>
            <button type='submit'>Send Message</button>
        </form>
    </section>
  )
}

export default ContactUs