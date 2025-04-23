import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import "./MakeAnAppointment.css";

const specialties = [
  "Allergist",
  "Anesthesiologist",
  "Cardiologist",
  "Dermatologist",
  "Endocrinologist",
  "Gastroenterologist",
  "Hematologist",
  "Hospitalist",
  "Immunologist",
  "Internist",
  "Nephrologist",
  "Neurologist",
  "Obstetrician",
  "Oncologist",
  "Ophthalmologist",
  "Pathologist",
  "Pediatrician",
  "Pharmacist",
  "Physiatrist",
  "Psychiatrist",
  "Radiologist",
  "Rheumatologist",
  "Urologist",
];

const MakeAnAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [specialty, setSpecialty] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = { date, time, specialty };
    setAppointments([...appointments, newAppointment]);
    setDate("");
    setTime("");
    setSpecialty("");
  };

  return (
    <div className="appointment-container">
      <h2>Make an Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <select
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
        >
          <option value="" disabled>
            Select Medical Specialty
          </option>
          {specialties.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>
        <button type="submit">Create Appointment</button>
      </form>

      <div className="appointments-list">
        {appointments.map((app, index) => (
          <div key={index} className="appointment-card">
            <p>
              <strong>Date:</strong> {app.date}
            </p>
            <p>
              <strong>Time:</strong> {app.time}
            </p>
            <p>
              <strong>Specialty:</strong> {app.specialty}
            </p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <button
          onClick={() => navigate("/view-appointments")}
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          View Appointments
        </button>
      </div>
    </div>
  );
};

export default MakeAnAppointment;
