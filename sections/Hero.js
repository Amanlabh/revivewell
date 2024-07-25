// Hero.js
import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  const heroStyle = {
    backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20230621/pngtree-blue-background-with-heart-and-ekg-lines-on-stethoscope-in-3d-image_3652639.jpg)', // Update with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
  };

  const heroSecStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Adds a semi-transparent overlay
    padding: '50px 0',
    color: 'white',
  };

  const heroContentStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Adjust number of columns
    gap: '20px', // Space between boxes
  };

  const boxStyle = {
    background: 'rgba(255, 255, 255, 0.1)', // Optional: Background for boxes
    padding: '20px',
    borderRadius: '8px', // Rounded corners
    textAlign: 'center', // Center align text
  };

  return (
    <>
      <section style={heroStyle}>
        <div className='container'>
          <TitleLogo title=' well' caption='Revive ' className='logobg' />
          <h1 className='hero-title'>RECOVERY STARTS HERE</h1>

          <div className='sub-heading'>
            <TitleSm title='BACK PAIN' /> <span>.</span>
            <TitleSm title='JOINT PAIN' /> <span>.</span>
            <TitleSm title=' NECK PAIN' />
            <br/>
            <button className='button-primary'>book a consultation</button>
          </div>
        </div>
      </section>
      <section style={heroSecStyle}>
        <div className='container'>
          <div className='heading-title'>
            
            <h1>Empowering your recovery, one online session at a time.</h1>
            <p>Our online physiotherapy service is designed to empower you on your recovery journey. By providing personalized treatment plans and expert guidance from licensed professionals, we ensure you take an active role in managing your health.</p>
          </div>
          <div style={heroContentStyle}>
            {home.map((item, i) => (
              <div style={boxStyle} key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
     

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero;