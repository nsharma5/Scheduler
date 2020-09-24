import React, { useState } from 'react';

import CourseSelector from './CourseSelector';
import { ScrollView } from 'react-native';
import TermSelector from './TermSelector';
import { getCourseTerm } from '../utils/course';

const CourseList = ({ courses, view }) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const termCourses = courses.filter(
    (course) => selectedTerm === getCourseTerm(course)
  );

  return (
    <ScrollView>
      <TermSelector
        selectedTerm={selectedTerm}
        setSelectedTerm={setSelectedTerm}
      />
      <CourseSelector courses={termCourses} view={view} />
    </ScrollView>
  );
};

export default CourseList;
