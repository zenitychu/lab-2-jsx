function StudentCard({ label = 'STUDENT' }) {
  return (
    <div className="card">
      <span>{label}</span>
    </div>
  );
}

export default StudentCard;
