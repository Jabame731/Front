import React from 'react';
import Sidebar from '../sidebar/Sidebar';

import { testSubjects, fakeInformation } from '../../fakeData';

import { useState, Fragment, useEffect } from 'react';

import './subjects.css';

import Rows from '../Rows';
import EditRows from '../editor/EditRows';
import Spinner from '../spinner/Spinner';

const Subjects = () => {
  const yearNow = new Date().getFullYear();
  const yearBefore = yearNow - 1;

  const [subjects, setSubject] = useState(testSubjects);

  const [editFormSubject, setEditFormSubject] = useState({
    subjectECode: '',
    subjectCode: '',
    subjectTitle: '',
    subjectUnits: '',
  });

  const [editSubject, setEditSubject] = useState(null);

  const handleEditClick = (event, subject) => {
    event.preventDefault();
    setEditSubject(subject.id);

    const formValues = {
      subjectECode: subject.subjectECode,
      subjectCode: subject.subjectCode,
      subjectTitle: subject.subjectTitle,
      subjectUnits: subject.subjectUnits,
    };

    setEditFormSubject(formValues);
  };

  const handleEditSubjectForm = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormSubject };
    newFormData[fieldName] = fieldValue;

    setEditFormSubject(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedSubject = {
      id: editSubject,
      subjectECode: editFormSubject.subjectECode,
      subjectCode: editFormSubject.subjectCode,
      subjectTitle: editFormSubject.subjectTitle,
      subjectUnits: editFormSubject.subjectUnits,
    };
    const newSubjects = [...subjects];
    const index = subjects.findIndex((subject) => subject.id === editSubject);

    newSubjects[index] = editedSubject;

    setSubject(newSubjects);
    setEditSubject(null);
  };

  const handleCancelClick = () => {
    setEditSubject(null);
  };

  const handleDeleteSubject = (subjectId) => {
    const newSubjects = [...subjects];

    const index = subjects.findIndex((subject) => subject.id === subjectId);

    newSubjects.splice(index, 1);

    setSubject(newSubjects);
  };
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
        <div className='subject-container' style={{ width: 1130 }}>
          <header className='d-flex align-items-center mb-3 mt-5'>
            <h1 className=' fw-bold'>Subjects Enrolled</h1>
          </header>
          <h1 className='d-flex align-items-center mb-3 mt-2 title-year'>
            School Year {yearBefore}-{yearNow}
          </h1>
          <h1 className='d-flex align-items-center mb-4 mt-2 title-year'>
            Course Name: {fakeInformation.courseName}
          </h1>

          <div className='table-container'>
            <form onSubmit={handleEditFormSubmit}>
              <table className='table text-center table-hover '>
                <thead>
                  <tr>
                    <th>Subject E Code</th>
                    <th>Subject Code</th>
                    <th>Subject Title</th>
                    <th>Subject Units</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject) => (
                    <Fragment>
                      {editSubject === subject.id ? (
                        <EditRows
                          editFormSubject={editFormSubject}
                          handleEditSubjectForm={handleEditSubjectForm}
                          handleCancelClick={handleCancelClick}
                        />
                      ) : (
                        <Rows
                          subject={subject}
                          handleEditClick={handleEditClick}
                          handleDeleteSubject={handleDeleteSubject}
                        />
                      )}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Subjects;
