import React, { useState, useEffect } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';
import Spinner from '../../components/spinner/Spinner';
import { babyPrincess } from '../../princessLover';

import './home.css';

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className='home'>
      <Sidebar />
      {loading ? (
        <Spinner />
      ) : (
        <div className='home-container'>
          <div className='title-container'>
            <h1>{babyPrincess.title}</h1>
          </div>

          <div className='info-container'>
            <div className='row'>
              <div className='col-6'>
                <h1 className='title-main'>{babyPrincess.mission.title}</h1>
                <p className='statements'>{babyPrincess.mission.statement}</p>
              </div>
              <div class='col-6'>
                <h1 className='title-main'>{babyPrincess.vision.title}</h1>
                <p className='statements'>{babyPrincess.mission.statement}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
