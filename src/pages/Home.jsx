import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="main-dashboard">
      <Link to="/make-an-appointment">
        <button className="dashboard-button">Make an Appointment</button>
      </Link>
      <Link to="/medical-records">
        <button className="dashboard-button">Medical Records</button>
      </Link>
      <Link to="/medication">
        <button className="dashboard-button">Medication</button>
      </Link>
      {/* <Link to="/on-duty">
        <button className="dashboard-button">On Duty</button>
      </Link> */}
    </div>
  );
}
