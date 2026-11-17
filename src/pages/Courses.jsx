import CourseCard from '../components/CourseCard';

function Courses() {
  return (
    <div className="page-container">
      <h1>COURSES</h1>
      <div className="card-grid">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}

export default Courses;
