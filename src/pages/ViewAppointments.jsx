import { useState } from "react";
import "./ViewAppointments.css";

const ViewAppointments = () => {
  const [appointments, setAppointments] = useState([
    { date: "2025-04-30", time: "10:00", specialty: "Neurologist" },
    { date: "2025-05-02", time: "14:30", specialty: "Ophthalmologist" },
  ]);

  const handleEdit = (index, key, value) => {
    const updated = [...appointments];
    updated[index][key] = value;
    setAppointments(updated);
  };

  return (
    <div className="view-container">
      <h2>View Appointments</h2>
      <div className="appointments-list">
        {appointments.map((app, index) => (
          <div key={index} className="appointment-card">
            <label>
              Date:
              <input
                type="date"
                value={app.date}
                onChange={(e) => handleEdit(index, "date", e.target.value)}
              />
            </label>
            <label>
              Time:
              <input
                type="time"
                value={app.time}
                onChange={(e) => handleEdit(index, "time", e.target.value)}
              />
            </label>
            <label>
              Specialty:
              <input
                type="text"
                value={app.specialty}
                onChange={(e) => handleEdit(index, "specialty", e.target.value)}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAppointments;
