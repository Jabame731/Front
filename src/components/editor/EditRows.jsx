import React from 'react';

import './edit.css';

const EditRows = ({
  editFormSubject,
  handleEditSubjectForm,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          className='form '
          type='text'
          required='required'
          placeholder='Subject E Code'
          name='subjectECode'
          value={editFormSubject.subjectECode}
          onChange={handleEditSubjectForm}
        />
      </td>
      <td>
        <input
          className='form'
          type='text'
          required='required'
          placeholder='Subject Code'
          name='subjectCode'
          value={editFormSubject.subjectCode}
          onChange={handleEditSubjectForm}
        />
      </td>
      <td>
        <input
          className='form'
          type='text'
          required='required'
          placeholder='Subject Title'
          name='subjectTitle'
          onChange={handleEditSubjectForm}
          value={editFormSubject.subjectTitle}
        />
      </td>
      <td>
        <input
          className='form'
          type='text'
          required='required'
          placeholder='Subject Units'
          name='subjectUnits'
          onChange={handleEditSubjectForm}
          value={editFormSubject.subjectUnits}
        />
      </td>
      <td>
        <button type='submit' className='btn btn-success p-1 f-6 buttons'>
          submit
        </button>
        <button
          type='button'
          className='btn btn-danger p-1 f-6 buttons'
          onClick={handleCancelClick}
        >
          cancel
        </button>
      </td>
    </tr>
  );
};

export default EditRows;
