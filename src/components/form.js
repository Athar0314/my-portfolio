import "./form.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" required ></input>
            <label>Email</label>
            <input type="email required"></input>
            <label>Subject</label>
            <input type="text" required></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type Your message here" />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form