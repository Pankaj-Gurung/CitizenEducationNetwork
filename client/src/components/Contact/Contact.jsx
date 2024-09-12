import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1d3ca6b9-948b-467e-8725-81c306dbbe64");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Are you ready to take your next step? Feel free to reach out through contact form or find our contact information below!We strive to provide exceptional service!</p>
        <ul>
            <li><img src={mail_icon} alt="" />citizenseducationnetwork@gmail.com</li>
            <li><img src={phone_icon} alt="" />+977 986-1854344</li>
            <li><img src={location_icon} alt="" />Baneshwor <br/>Kathmandu, Nepal</li>
        </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Name</label>
                <input type="text" name='name' placeholder='Full Name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Mobile Number' required />
                <label>Email </label>
                <input type="email" name='email' placeholder='Email' required />
                <label>Query </label>
                <textarea name="message" rows="6" placeholder='Enter your message'></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact