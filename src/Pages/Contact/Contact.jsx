import React from 'react'
import './Contact.css'
import Navbar from '../../Components/Navbar/navbar'
import Button from '../../Components/Navbar/Button/Button'


const Contact = () => {
  return (
    <div> 
   <Navbar/>
<Button title="Submit"/>
<br />
<Button title="Siuuu" color="Yellow"/>
<section className="contact-container">
<h1>Contact Us</h1>
<p className="tag">We're here to help — reach out anytime.</p>


<div className="contact-box">
<form>
<label>Name</label>
<input type="text" placeholder="Enter your name" required />


<label>Email</label>
<input type="email" placeholder="Enter your email" required />


<label>Message</label>
<textarea placeholder="Write your message" required></textarea>


<button type="submit">Send Message</button>
</form>


<div className="contact-info">
<h2>Get in Touch</h2>
<p><strong>Email:</strong> info@ishanacademy.com</p>
<p><strong>Phone:</strong> +977-9800000000</p>
<p><strong>Address:</strong> Damak, Nepal</p>
</div>
</div>
</section>


<footer>
<p>© 2025 Ishan's Academy. All rights reserved.</p>
</footer>
       </div>
  )
}

export default Contact
