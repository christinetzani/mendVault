import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function MakeAnAppointment() {
  return (
    <div className="main-dashboard">
      <Link to="/new-appointment">
        <button className="dashboard-button">Make a New Appointment</button>
      </Link>
      <Link to="/view-appointments">
        <button className="dashboard-button">View Appointments</button>
      </Link>
    </div>
  );
}
