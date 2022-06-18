import React from 'react';

import { Link } from 'react-router-dom';

import './signup.css';
const Signup = () => {
  const yearNow = new Date().getFullYear();
  const yearBefore = yearNow - 1;

  return (
    <div>
      <main className='form-signin w-100 m-auto mt-5'>
        <form>
          <h1 className='h3 mb-3 fw-normal d-flex justify-content-center'>
            Enter Information
          </h1>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              // id='floatingInput'
              placeholder='enter username'
            />
            <label>Username</label>
          </div>
          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              // id='floatingInput'
              placeholder='user@gmail.com'
            />
            <label>Email address</label>
          </div>
          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              // id='floatingPassword'
              placeholder='Password'
            />
            <label>Password</label>
          </div>

          <h1 className='h3 mb-3 fw-normal mt-5 d-flex justify-content-center'>
            Enter Course to Enroll
          </h1>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              // id='floatingInput'
              placeholder='Enter Course Name'
            />
            <label>Course Name</label>
          </div>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              // id='floatingInput'
              placeholder='First Year'
            />
            <label>Year</label>
          </div>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              // id='floatingInput'
              placeholder='First Semester'
            />
            <label>Semester</label>
          </div>
          <div class='mb-3 mt-3 text-dark'>
            <label for='formFile' class='form-label'>
              Your Image
            </label>
            <input className='form-control' type='file' id='formFile' />
          </div>

          <button
            className='w-100 btn btn-lg btn-primary mt-4 mb-4'
            type='submit'
          >
            Register
          </button>
        </form>
        <span className='mt-5'>Have an Account? </span>
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <span className='p-2 spanTitle'>Click Here</span>
        </Link>
        <p className='mt-5 mb-3 text-muted d-flex justify-content-center'>
          &copy;{yearBefore} - {yearNow}
        </p>
      </main>
    </div>
  );
};

export default Signup;
