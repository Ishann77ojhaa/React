import React from 'react'
import './About.css'
import Navbar from '../../Components/Navbar/navbar'
import Button from '../../Components/Navbar/Button/Button'

const About = () => {
  return (
    <div> 
       <Navbar/>
<Button title="Loginnnnnnnnnnnn"/>
<br />
<Button title="Siuuu" color="Blue"/>
<section>
<h2>Who We Are</h2>
<p>
Ishan's Academy is a modern learning platform built to make tech education simple,
accessible, and genuinely useful. Whether you're a beginner or leveling up your
skills, we focus on teaching concepts the right way — clear, practical, and
future-ready.
</p>
</section>

<section>
<h2>Our Mission</h2>
<p>
To help students and aspiring developers gain real-world tech knowledge without
confusion or unnecessary complexity. We believe learning should be hands-on,
enjoyable, and directly applicable to real projects.
</p>
</section>

<section>
<h2>What We Teach</h2>
<p>Our training covers essential domains like:</p>
<ul>
<li>Web Development (HTML, CSS, JavaScript, MERN)</li>
<li>Programming Fundamentals</li>
<li>Computer Networks</li>
<li>Operating Systems</li>
<li>Databases & SQL</li>
<li>Data Structures & Algorithms</li>
</ul>
</section>


<section>
<h2>Why Students Choose Us</h2>
<ul>
<li>Simplified explanations — no jargon overload</li>
<li>Practical, real-world examples with every topic</li>
<li>Hands-on projects that build your portfolio</li>
<li>Friendly learning environment</li>
</ul>
</section>

<footer>
<p>© 2025 Ishan's Academy. All rights reserved.</p>
</footer>
         </div>
  )
}

export default About
