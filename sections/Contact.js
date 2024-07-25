import { Title, TitleSm } from "@/components/common/Title";
import React, { useRef } from "react";
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("An error occurred. Please try again.");
      });
  };

  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-details'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>1-001-234-5678</h3>
                  <span>Call us: Mon - Fri 10:00 - 19:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Mumbai,India</h3>
                  <span></span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>info@well.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>revivewell@gmail.com</h3>
                  <span>revive well</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                  <BsFacebook size={25} />
                </li>
                <li className='icon'>
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className='icon'>
                  <AiFillInstagram size={25} />
                </li>
                <li className='icon'>
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Business enquiry? Fill out the form below.</p>

              <form ref={form} onSubmit={sendEmail}>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type='text' name='user_name' required />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='email' name='user_email' required />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Your Budget</span>
                    <input type='text' name='user_budget' required />
                  </div>
                  <div className='inputs'>
                    <span>Timeframe</span>
                    <input type='text' name='user_timeframe' required />
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR BUSINESS*</span>
                  <textarea name='message' cols='30' rows='10' required></textarea>
                </div>
                <button type='submit' className='button-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
