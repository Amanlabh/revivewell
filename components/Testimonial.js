import React from "react";
import { TitleSm } from "./common/Title";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

const Testimonial = () => {
  return (
    <>
      <section className='testimonial'>
        <div className='heading-title'>
          <TitleSm title='WHAT CLIENTS SAY ABOUT OUR WORK' />
        </div>
        <div className='cards'>
          {/* 5 testimonials */}
          <div className='card'>
            <div className='image'>
              <div className='img'>
                <img src="https://via.placeholder.com/150" alt="Custom Image" />
              </div>
              <div className='img-text'>
                <h3>John Doe</h3>
                <span>CEO, ABC Company</span>
              </div>
            </div>
            <div className='details'>
              <p>"The service provided by this company has been exceptional. They delivered high-quality results on time and within budget."</p>
              <Link href='/#'>
                VIEW CASE <HiOutlineArrowRight className='link-icon' />
              </Link>
            </div>
          </div>
          <div className='card'>
            <div className='image'>
              <div className='img'>
                <img src="https://via.placeholder.com/150" alt="Custom Image" />
              </div>
              <div className='img-text'>
                <h3>Jane Smith</h3>
                <span>Marketing Manager, XYZ Corp</span>
              </div>
            </div>
            <div className='details'>
              <p>"I highly recommend this company for their professionalism and attention to detail. They exceeded my expectations."</p>
              <Link href='/#'>
                VIEW CASE <HiOutlineArrowRight className='link-icon' />
              </Link>
            </div>
          </div>
          <div className='card'>
            <div className='image'>
              <div className='img'>
                <img src="https://via.placeholder.com/150" alt="Custom Image" />
              </div>
              <div className='img-text'>
                <h3>Michael Johnson</h3>
                <span>Project Manager, DEF Inc</span>
              </div>
            </div>
            <div className='details'>
              <p>"The team at this company is knowledgeable, responsive, and always willing to go the extra mile. I'm impressed with their work."</p>
              <Link href='/#'>
                VIEW CASE <HiOutlineArrowRight className='link-icon' />
              </Link>
            </div>
          </div>
         
          <div className='card'>
            <div className='image'>
              <div className='img'>
                <img src="https://via.placeholder.com/150" alt="Custom Image" />
              </div>
              <div className='img-text'>
                <h3>David Brown</h3>
                <span>CEO, JKL Enterprises</span>
              </div>
            </div>
            <div className='details'>
              <p>"I'm impressed with the level of expertise and professionalism displayed by this company. They have exceeded all my expectations."</p>
              <Link href='/#'>
                VIEW CASE <HiOutlineArrowRight className='link-icon' />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .cards {
          display: flex; /* Use flexbox to arrange cards horizontally */
          justify-content: space-between; /* Space out the cards */
          flex-wrap: wrap; /* Allow wrapping on smaller screens */
        }
        .card {
          flex: 1 1 calc(13% - 20px); /* Adjust card width and spacing */
          margin: 10px; /* Add margin around cards */
          background: rgba(249, 249, 249, 0.5)  /* Light background color for cards */
          border-radius: 2px; /* Rounded corners */
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
        }
        .image {
          display: flex; /* Flexbox for image and text alignment */
          align-items: center; /* Center align items */
        }
        .img {
          margin-right: 10px; /* Space between image and text */
        }
        .img-text {
          text-align: left; /* Left align text */
        }
        .details {
          padding: 15px; /* Padding for details */
        }
        .expertise-image {
          width: 100%; /* Make images responsive */
          height: auto; /* Maintain aspect ratio */
          border-radius: 5px; /* Optional: add border radius to images */
        }
      `}</style>
    </>
  );
}

export default Testimonial;
