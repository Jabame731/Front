import React from 'react';

const Rows = ({ subject, handleEditClick, handleDeleteSubject }) => {
  return (
    <tr>
      <td>{subject.subjectECode}</td>
      <td>{subject.subjectCode}</td>
      <td>{subject.subjectTitle}</td>
      <td>{subject.subjectUnits}</td>
      <td>
        <span
          className='fa-solid fa-trash-can text-danger items'
          onClick={() => handleDeleteSubject(subject.id)}
        ></span>
        <span
          className='fa-solid fa-pen-to-square text-success items'
          onClick={(event) => handleEditClick(event, subject)}
        ></span>
      </td>
    </tr>
  );
};

export default Rows;
