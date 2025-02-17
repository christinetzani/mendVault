import React from "react";
import Navbar from "./Navbar"; // Import the Navbar
import { Outlet } from "react-router-dom"; // Outlet to render child components

export default function Layout() {
  return (
    <div>
      <Navbar /> {/* The navbar will always be visible */}
      <div className="app-container">
        <Outlet />
        {/* This is where the content of the current route will render */}
      </div>
    </div>
  );
}
