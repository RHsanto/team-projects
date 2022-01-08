import React from 'react';
import CourseSlider from '../CourseSlider/CourseSlider';
import FooteBanner from '../FooteBanner/FooteBanner';
import PopularCourse from '../PopularCourse/PopularCourse';

const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <PopularCourse/>
      <CourseSlider/>
      <FooteBanner/>
    </div>
  );
};

export default Home;