import React from 'react'
import './MainDashboard.css'

export default function MainDashboard() {

  function scrollToSection(id){
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="main-page">

      <div className="hero">
        <div className="hero-left">
          <h1 className="title">Hostel Hub</h1>
          <p className="subtitle">Smart Hostel Complaint Management System</p>

          <p className="hero-text">
            A simple and efficient platform designed for students, wardens and workers 
            to manage hostel complaints with complete transparency, faster resolution 
            and smooth communication.
          </p>

          <div className="hero-actions">
            <button className="btn" onClick={() => scrollToSection('about')}>Explore</button>
            <button className="btn outline" onClick={() => scrollToSection('features')}>Features</button>
          </div>
        </div>

        <div className="hero-right">
          <img 
            src="https://th.bing.com/th/id/OIP.NpwaQrfriLOm9b0k6L_c4wHaE7?w=260&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" 
            className="hero-img" 
            alt="hero" 
          />
        </div>
      </div>

      <section id="about" className="section card">
        <h2>About Hostel Hub</h2>
        <p>
          Hostel Hub is a modern digital solution created to replace traditional 
          manual complaint systems in hostels. Students can raise issues instantly, 
          wardens can review and manage complaints efficiently, and workers can update 
          repair progress in real-time.  
          <br/><br/>
          The goal is simple – to make hostel maintenance faster, organized and hassle-free 
          for everyone.
        </p>
      </section>

      <section id="features" className="section card">
        <h2>Features</h2>
        <ul className="feature-list">
          <li>Students can submit complaints with optional image uploads</li>
          <li>Wardens can accept or reject complaints with notes</li>
          <li>Workers receive accepted complaints and update the progress</li>
          <li>Real-time status tracking: Pending, Accepted, Rejected, Completed</li>
          <li>Clean dashboards for all roles: Student, Warden, Worker</li>
          <li>Simple, user-friendly interface for fast communication</li>
        </ul>
      </section>

      <section id="contact" className="section card">
        <h2>Contact</h2>
        <p><strong>Sri Eshwar College of Engineering</strong></p>
        <p>Kondampatti [Post], Vadasithur (via), Coimbatore – 641 202, Tamil Nadu, India</p>
        <p><strong>Phone:</strong> 04259 200300</p>
        <br/>
        <p>34.5 km from Coimbatore International Airport</p>
        <p>29 km from Gandhipuram Central Bus Stand</p>
        <p>27 km from Coimbatore Railway Station</p>
        <br/>
        <p><strong>Designed & Developed by Aman Karn</strong></p>
      </section>

    </div>
  )
}
