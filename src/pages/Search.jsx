import React, { useState } from "react";
import { Link } from "react-router-dom";

const searchData = [
  { name: "Make an Appointment", path: "/make-an-appointment" },
  { name: "Medical Records", path: "/medical-records" },
  { name: "Medication", path: "/medication" },
  { name: "On Duty", path: "/on-duty" },
  { name: "Profile", path: "/profile" },
  { name: "Messages", path: "/messages" },
  { name: "View Appointments", path: "/view-appointments" },
  { name: "New Appointment", path: "/new-appointment" },
];

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    const filtered = searchData.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setResults(filtered);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Actions..."
        value={query}
        onChange={handleSearch}
        className="search-input"
      />
      {query && (
        <div className="search-results">
          {results.length > 0 ? (
            results.map((result, index) => (
              <Link key={index} to={result.path} className="search-result">
                {result.name}
              </Link>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
}
