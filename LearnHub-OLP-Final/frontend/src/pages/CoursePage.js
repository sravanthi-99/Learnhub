
import React from 'react';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Course Details</h2>
      <p>Viewing course with ID: {id}</p>
    </div>
  );
};

export default CoursePage;
