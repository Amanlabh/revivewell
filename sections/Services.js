import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const Services = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container translucent'>
          <div className='heading-title'>
            <TitleSm title='SERVICES' /> <br />
            <br />
            <Title title='Unique technologies & modern approach' className='title-bg' />
          </div>
          <div className='grid-2 py'>
            {/* Custom content instead of rendering items from expertise */}
            <div className="custom-content">
              <img src="/path/to/image1.jpg" alt="Service 1" className="service-image" />
              <h3>Custom Service 1</h3>
              <p>Description of custom service 1. This could include details about what this service offers and how it benefits clients.</p>
            </div>
            <div className="custom-content">
              <img src="/path/to/image2.jpg" alt="Service 2" className="service-image" />
              <h3>Custom Service 2</h3>
              <p>Description of custom service 2. This could include details about what this service offers and how it benefits clients.</p>
            </div>
            <div className="custom-content">
              <img src="/path/to/image3.jpg" alt="Service 3" className="service-image" />
              <h3>Custom Service 3</h3>
              <p>Description of custom service 3. This could include details about what this service offers and how it benefits clients.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .container {
          background: rgba(255, 255, 255, 0.8); /* Translucent background */
          padding: 20px;
          border-radius: 10px;
        }
        .custom-content {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin: 10px;
          background: #f9f9f9;
        }
        .custom-content h3 {
          margin: 0 0 10px;
          color: black; /* Set heading text color to black */
        }
        .custom-content p {
          color: black; /* Set paragraph text color to black */
        }
        .service-image {
          width: 100%; /* Make images responsive */
          height: auto; /* Maintain aspect ratio */
          border-radius: 5px; /* Optional: add border radius to images */
          margin-bottom: 10px; /* Space between image and text */
        }
      `}</style>
    </>
  );
};

export default Services;
