import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/navbar'
import Button from '../../Components/Navbar/Button/Button'


const Home = () => {
  return (
    <div> 
     
   <Navbar/>
<Button title = "Sign Up"/>
<br />
<Button title="Siuuu" color="Orange"/>
<section id="home">
<h2>Welcome to Ishan's Academy</h2>
<p>Your pathway to digital learning and success!</p>
</section>


<section id="about">
<h2>About Us</h2>
<p>Ishan's Academy is dedicated to teaching modern tech skills in a simple and effective way.</p>
</section>


<section id="contact">
<h2>Contact Us</h2>
<p>For any inquiries, email us at <a href="mailto:info@ishanacademy.com">info@ishanacademy.com</a>.</p>
</section>


<footer>
<p>© 2025 Ishan's Academy. All rights reserved.</p>
</footer>
    </div>
  )
}

export default Home
