import React from 'react';

import { Link } from 'react-router-dom';
import './login.css';
const Login = () => {
  const yearNow = new Date().getFullYear();
  const yearBefore = yearNow - 1;
  return (
    <div>
      <main className='form-signin w-100 m-auto mt-5'>
        <form>
          <h1 className='h3 mb-3 fw-normal d-flex justify-content-center'>
            Login Here
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
              type='password'
              className='form-control'
              // id='floatingPassword'
              placeholder='Password'
            />
            <label>Password</label>
          </div>
          <button
            className='w-100 btn btn-lg btn-primary mt-4 mb-4'
            type='submit'
          >
            Login
          </button>
        </form>
        <span className='mt-5'>Not Enrolled Yet? </span>
        <Link to='/register' style={{ textDecoration: 'none' }}>
          <span className='p-2 spanTitle'>Click Here</span>
        </Link>

        <p className='mt-5 mb-3 text-muted d-flex justify-content-center'>
          &copy;{yearBefore} - {yearNow}
        </p>
      </main>
    </div>
  );
};

export default Login;
