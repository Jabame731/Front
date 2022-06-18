import React, { useEffect, useState } from 'react';

import { fakeInformation } from '../../fakeData';
import Sidebar from '../sidebar/Sidebar';
import Spinner from '../spinner/Spinner';

import './profile.css';

const Profile = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      <Sidebar />
      {loading ? (
        <Spinner />
      ) : (
        <div className='profile-container'>
          <header className='d-flex align-items-center pb-3 mb-5 mt-5'>
            <span className='d-flex align-items-center text-dark text-decoration-none mt-3'>
              <h1 className=' fw-bold'>Student Profile</h1>
            </span>
          </header>

          <main>
            <p className='fs-6 col-md-8 fst-italic'>
              Please edit below if there's a mistake
            </p>

            <div className='row g-5'>
              <div className='col'>
                <label className='label-input'>
                  First Name
                  <input
                    className='form-control'
                    type='text'
                    value={fakeInformation.fname}
                    disabled
                    readonly
                  />
                </label>
                <label className='label-input'>
                  Middle Name
                  <input
                    className='form-control'
                    type='text'
                    value={fakeInformation.middleName}
                    disabled
                    readonly
                  />
                </label>
                <label className='label-input'>
                  Last Name
                  <input
                    className='form-control'
                    type='text'
                    value={fakeInformation.lastName}
                    disabled
                    readonly
                  />
                </label>
                <label className='label-input'>
                  Email
                  <input
                    className='form-control'
                    type='text'
                    value={fakeInformation.email}
                    disabled
                    readonly
                  />
                </label>
              </div>
            </div>
            {/* { <div>BREAKPOINT</div>} */}
            <span className='d-flex align-items-center text-dark text-decoration-none mt-4 mb-2 fw-bold'>
              Student Information
            </span>
            <div className='row g-5 '>
              <div className='col'>
                <label className='label-input'>
                  Student Number
                  <input
                    className='form-control'
                    type='text'
                    value={fakeInformation.studentNo}
                    disabled
                    readonly
                  />
                </label>
                <label className='label-input col-4'>
                  Course Name
                  <input
                    className='form-control'
                    type='text'
                    value={fakeInformation.courseName}
                    disabled
                    readonly
                  />
                </label>

                <label className='label-input col-2'>
                  Year
                  <input
                    className='form-control'
                    type='text'
                    value={fakeInformation.year}
                    disabled
                    readonly
                  />
                </label>
                <label className='label-input'>
                  Semester
                  <input
                    className='form-control'
                    type='text'
                    value={fakeInformation.semester}
                    disabled
                    readonly
                  />
                </label>
                <label className='label-input col-2'>
                  Status
                  <input
                    className='form-control'
                    type='text'
                    value={fakeInformation.status}
                    disabled
                    readonly
                  />
                </label>
              </div>
            </div>

            <span className='d-flex align-items-center text-dark text-decoration-none mt-4 mb-2 fw-bold'>
              Profile Picture
            </span>
            <img src={fakeInformation.image} alt='' className='img' />
            <button className='btn btn-primary button-edit'>
              Edit Profile
            </button>
          </main>
        </div>
      )}
    </>
  );
};

export default Profile;
