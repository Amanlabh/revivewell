import React, { useState } from "react";
import { Title, TitleLogo } from "./common/Title";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(""); // New state for message

  const handleRequestCallback = () => {
    // Construct the WhatsApp URL
    const whatsappNumber = "+91 9835345179"; // Replace with your WhatsApp number
    const whatsappMessage = `Hi, I'm ${name}. My phone number is ${phone}. Message: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp with the message
    window.open(whatsappUrl, "_blank");

    // Close the modal after submitting
    setIsModalOpen(false);
    // Reset form fields
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='Have any Quries ?' /> <br />
            <TitleLogo title='Lets Connect over a call!' />
            <p>Revive Well ensures you the best costomer experience.</p>
          </div>
          <div>
            <button className='button-primary' onClick={() => setIsModalOpen(true)}>
              Request a call-back
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setIsModalOpen(false)}>✖</button>
            <h2>Request a Call-Back</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleRequestCallback(); }}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Phone:</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Message:</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="button-group">
                <button type="submit" className='button-primary'>Submit</button>
                <button type="button" className="cancel-button" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          position: relative; /* Make the modal content relative for positioning the close button */
          background: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          color: black; /* Change text color to black */
        }
        .close-button {
          position: absolute; /* Position the close button */
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
        }
        .button-group {
          display: flex;
          justify-content: flex-end;
          margin-top: 10px; /* Add margin between buttons */
        }
        .button-group button {
          margin-left: 10px; /* Add margin between buttons */
        }
        .cancel-button {
          color: black; /* Set the color of the cancel button to black */
        }
        .modal-content h2 {
          margin: 0 0 10px;
        }
        .modal-content div {
          margin-bottom: 10px;
        }
        .modal-content label {
          display: block;
          margin-bottom: 5px;
        }
        .modal-content input,
        .modal-content textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          color: black; /* Set input text color to black */
        }
        .modal-content textarea {
          height: 60px; /* Set a height for the textarea */
        }
      `}</style>
    </>
  );
};

export default Banner;
