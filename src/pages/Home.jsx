import React from "react";
import "./Home.css";

export default function Home() {
  console.log("Home Component");

  return (
    <div className="main-dashboard">
      <button className="dashboard-button">Make an appointment</button>
      <button className="dashboard-button">Medical Records</button>
      <button className="dashboard-button">Medication</button>
      <button className="dashboard-button">On Duty</button>
    </div>
  );
}
