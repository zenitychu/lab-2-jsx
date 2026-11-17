import StudentCard from '../components/StudentCard';

function Students() {
  return (
    <div className="page-container">
      <h1>STUDENTS</h1>
      <div className="card-grid">
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </div>
    </div>
  );
}

export default Students;
