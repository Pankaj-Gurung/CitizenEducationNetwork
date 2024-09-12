import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  const slideCount = 4;
  let tx = 0;

  const slideForward = () => {
    if (tx > -(slideCount - 1) * 25) {
      tx -= 25;
    } else {
      tx = 0; 
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    } else {
      tx = -(slideCount - 1) * 25; 
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Yooja Gurung</h3>
                  <span>Nepal, ktm</span>
                </div>
              </div>
              <p>Choosing this education consultancy has been the best decision I have ever made. The supportive community have truly exceeded my expectations.</p>
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Ronak Shakya</h3>
                  <span>Nepal, ktm</span>
                </div>
              </div>
              <p>Choosing Citizen Education Network for my study abroad journey was the best decision I’ve made. Their expert guidance and support have made the entire process seamless and stress-free.</p>
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Jenisha Gurung</h3>
                  <span>Nepal, ktm</span>
                </div>
              </div>
              <p>I couldn’t be happier with the services from Citizen Education Network. From application to visa assistance, they’ve gone above and beyond to ensure my study abroad experience is on the right track.</p>
            </div>
          </li>

          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Paljor Gurung</h3>
                  <span>Nepal, ktm</span>
                </div>
              </div>
              <p>Their personalized approach and in-depth knowledge of the study abroad process have made my dream of studying internationally a reality.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
