import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT REVIVE WELL' /> <br />
            <br />
            <Title title='Empowering your recovery, one online session at a time!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Experience the empowerment of personalized online physiotherapy at your home.' />
              <p className='desc-p'>it is the foundation of our approach to physiotherapy. By leveraging technology to provide personalized, convenient, and supportive care, we are dedicated to helping you achieve your health goals and reclaim your life. Start your journey with us today and discover the power of empowerment in your recovery.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>7+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>Our mission is to empower individuals on their path to recovery and optimal health by providing accessible, personalized, and evidence-based online physiotherapy services. We are dedicated to helping our clients achieve their goals, improve their quality of life, and maintain their independence through a collaborative, patient-centered approach.</p>
            </div>
          </div>
        </div>
      </section>

      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
