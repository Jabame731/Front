import React from 'react';

import './modal.css';
const Modal = ({ handleDeleteSubject }) => {
  return (
    <div className='mods-container'>
      <button
        type='button'
        className='btn btn-danger'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        <i class='fa-solid fa-trash'></i>
      </button>

      <div
        class='modal fade'
        id='exampleModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>Do you wish to delete this subject?</div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Cancel
              </button>
              <button type='button' class='btn btn-danger'>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
