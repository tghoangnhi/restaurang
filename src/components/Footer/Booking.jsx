import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Booking.css';

const Booking = () => (
  <div className='app__newsletter' id='booking'>
    <div className='app__newsletter-heading'>
      <SubHeading title='Booking'/>
      <h1 className='headtext__cormorant flex__center'>Book A Table</h1>
    </div>

    <form action="" className='app__booking-form flex__center'>
      <div className='app__booking-input'>
        <p className='p__opensans custom__title'>Name</p>
        <input type='text' placeholder='Jane Doe' />
      </div>
      <div className='app__booking-input'>
        <p className='p__opensans custom__title'>Email</p>
        <input type='email' placeholder='Enter your email address' />
      </div>
      <div className='app__booking-input'>
        <p className='p__opensans custom__title'>Phone Number</p>
        <input type='number' placeholder='Enter your phone number' />
      </div>
      <div className='app__booking-input'>
        <p className='p__opensans custom__title'>How many people?</p>
        <input type='number'/>
      </div>
      <div className='app__booking-input'>
        <p className='p__opensans custom__title'>Date</p>
        <input type='date'/>
      </div>
      <div className='app__booking-input'>
        <p className='p__opensans custom__title'>Time</p>
        <input type='time'/>
      </div>
      <button type='button' className='custom__button'>Book Now</button>
    </form>
  </div>
);

export default Booking;
