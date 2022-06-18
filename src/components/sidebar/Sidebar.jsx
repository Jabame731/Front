import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='side '>
      <div className='d-flex flex-column flex-shrink-0 p-3 '>
        <span className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none mt-5'>
          <svg className='bi me-2' width='40' height='32'></svg>
          <span class='fs-4 text-dark title-welcome'>Welcome Student</span>
        </span>
        <ul className='nav nav-pills flex-column mt-3 mb-auto '>
          <li>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <span className='nav-link link-dark mt-3 list '>
                <i className='fa-solid fa-house me-2'></i>Home
              </span>
            </Link>
          </li>
          <li>
            <Link to='/profile' style={{ textDecoration: 'none' }}>
              <span className='nav-link link-dark mt-3 list '>
                <i className='fa-solid fa-id-card-clip me-2'></i>Student Profile
              </span>
            </Link>
          </li>
          <li>
            <Link to='/subjects' style={{ textDecoration: 'none' }}>
              <span className='nav-link link-dark mt-3 list'>
                <i className='fa-solid fa-folder me-2'></i>
                Subjects Enrolled
              </span>
            </Link>
          </li>
          <li>
            <Link to='/assessment' style={{ textDecoration: 'none' }}>
              <span className='nav-link link-dark  mt-3 list'>
                <i className='fa-solid fa-file-code me-2'></i>Assessment
              </span>
            </Link>
          </li>

          <li>
            <Link to='/login' style={{ textDecoration: 'none' }}>
              <span className='nav-link link-dark  mt-3 list'>
                <i class='fa-solid fa-right-from-bracket me-2'></i>Logout
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
