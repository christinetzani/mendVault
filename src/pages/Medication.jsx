import React from "react";
import { useState } from "react";
import "./Home.css";
import "./Medication.css";

const Medication = () => {
  const [medications, setMedications] = useState([]);
  const [medicine, setMedicine] = useState("");
  const [dosage, setDosage] = useState("");
  const [notes, setNotes] = useState("");

  const handleAddMedication = () => {
    if (!medicine || !dosage) return;
    setMedications([...medications, { medicine, dosage, notes }]);
    setMedicine(""); // clear inputs
    setDosage("");
    setNotes("");
  };

  return (
    <div className="medication-container">
      <h2>Medications</h2>
      <div className="medication-form">
        <input
          type="text"
          placeholder="Medicine"
          value={medicine}
          onChange={(e) => setMedicine(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Dosage"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
          required
        />
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type="button" onClick={handleAddMedication}>
          +
        </button>
      </div>

      <div className="medication-list">
        {medications.map((med, index) => (
          <div key={index} className="medication-card">
            <p>
              <strong>Medicine:</strong> {med.medicine}
            </p>
            <p>
              <strong>Dosage:</strong> {med.dosage}
            </p>
            {med.notes && (
              <p>
                <strong>Notes:</strong> {med.notes}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medication;
