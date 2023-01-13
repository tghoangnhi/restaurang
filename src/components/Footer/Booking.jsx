import { React } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

import SubHeading from '../SubHeading/SubHeading';
import './Booking.css';
// require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESS_SENDER_ID,
  appId: process.env.APP_ID
};
// console.log('apikey:' + process.env.API_KEY);

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Booking = () => {
  const handleSubmit = (e) => {
    
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone-number');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    const number = document.getElementById('number');

    const writeData = () => {
      const db = getDatabase();
      set(ref(db, 'data/'), {
        name: name.value,
        email: email.value,
        phone: phone.value,
        date: date.value,
        time: time.value,
        number: number.value
      });
    alert("Your booking has been made");
    }
    writeData();
  }

  return (
    <div className='app__newsletter' id='booking'>
    <div className='app__newsletter-heading'>
      <SubHeading title='Booking'/>
      <h1 className='headtext__cormorant flex__center'>Book A Table</h1>
    </div>

    <form action="" className='app__booking-form flex__center' onSubmit={handleSubmit}>
      <div className='app__booking-input'>
        <p className='p__opensans custom__title'>Name</p>
        <input type='text' id='name' required/>
      </div>
      <div className='app__booking-input'>
        <p className='p__opensans custom__title'>Email</p>
        <input type='email' id='email' required/>
      </div>
      <div className='app__booking-input'>
        <p className='p__opensans custom__title'>Phone Number</p>
        <input type='number' id='phone-number' required/>
      </div>
      <div className='app__booking-input'>
        <p className='p__opensans custom__title'>How many people?</p>
        <input type='number' id='number' required/>
      </div>
      <div className='app__booking-input'>
        <p className='p__opensans custom__title'>Date</p>
        <input type='date' id='date' required/>
      </div>
      <div className='app__booking-input'>
        <p className='p__opensans custom__title'>Time</p>
        <input type='time' id='time' required/>
      </div>
      
      <button type='submit' className='custom__button'>Book Now</button>
    </form>
  </div>
  );
}

export default Booking;
