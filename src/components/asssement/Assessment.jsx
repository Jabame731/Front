import React, { useState, useEffect } from 'react';

import Sidebar from '../sidebar/Sidebar';
import './payment.css';

import { payment } from '../../paymentData';
import Spinner from '../spinner/Spinner';

const Assessment = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <Sidebar />
      {loading ? (
        <Spinner />
      ) : (
        <div className='payment-container'>
          <header className='d-flex align-items-center pb-3 mb-5 mt-5'>
            <span className='d-flex align-items-center text-dark text-decoration-none mt-3'>
              <h1 className=' fw-bold'>Assessement</h1>
            </span>
          </header>

          <main>
            <p className='fs-6 col-md-8 fst-italic'>
              Below are the breakdown of the payment
            </p>

            <div className='row g-5'>
              <div className='col'>
                <label className='label-input'>
                  Total Tuition Fee
                  <input
                    className='form-control'
                    type='text'
                    value={payment.totalFee}
                    disabled
                    readonly
                  />
                </label>
                <label className='label-input'>
                  Total Misc. Fee
                  <input
                    className='form-control'
                    type='text'
                    value={payment.totalMiscFee}
                    disabled
                    readonly
                  />
                </label>
                <label className='label-input'>
                  Other Fees
                  <input
                    className='form-control'
                    type='text'
                    value={payment.otherFees}
                    disabled
                    readonly
                  />
                </label>
                <label className='label-input'>
                  Regisration Fee
                  <input
                    className='form-control'
                    type='text'
                    value={payment.registrationFee}
                    disabled
                    readonly
                  />
                </label>
                <label className='label-input'>
                  Discount
                  <input
                    className='form-control'
                    type='text'
                    value={payment.discount}
                    disabled
                    readonly
                  />
                </label>
                <label className='label-input'>
                  Initial Payment
                  <input
                    className='form-control'
                    type='text'
                    value={payment.initialPayment}
                    disabled
                    readonly
                  />
                </label>
                <label className='label-input'>
                  Total
                  <input
                    className='form-control'
                    type='text'
                    value={payment.total}
                    disabled
                    readonly
                  />
                </label>
                <label className='label-input'>
                  Student Handbook
                  <input
                    className='form-control'
                    type='text'
                    value={payment.studentBook}
                    disabled
                    readonly
                  />
                </label>
                <label className='label-input'>
                  Per exam
                  <input
                    className='form-control'
                    type='text'
                    value={payment.perExam}
                    disabled
                    readonly
                  />
                </label>
              </div>
            </div>
          </main>
          <span>
            <label className='label-input'>
              Cashier Name
              <input
                className='form-control'
                type='text'
                value={payment.cashierName}
                disabled
                readonly
              />
            </label>
          </span>
        </div>
      )}
    </>
  );
};

export default Assessment;
