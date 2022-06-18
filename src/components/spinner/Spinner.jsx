import React from 'react';

import './spinner.css';
const Spinner = () => {
  return (
    // <div class='  spinner-container'>
    //   <div class='spinner-border' role='status'>
    //     <span class='visually-hidden'></span>
    //   </div>
    // </div>
    <figure className='spinner-container'>
      <div className='dot white '></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
    </figure>
  );
};

export default Spinner;
