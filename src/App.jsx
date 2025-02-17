import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Layout component that includes Navbar and Outlet
import Home from "./pages/Home";
import MakeAnAppointment from "./pages/MakeAnAppointment";
import MedicalRecords from "./pages/MedicalRecords";
import Medication from "./pages/Medication";
import OnDuty from "./pages/OnDuty";
import NewAppointment from "./pages/NewAppointment";
import ViewAppointments from "./pages/ViewAppointments";
import Profile from "./pages/Profile"; // Ensure Profile is imported
import Messages from "./pages/Messages"; // Ensure Messages is imported
import Search from "./pages/Search"; // Ensure Search is imported

function App() {
  return (
    <Router>
      <Routes>
        {/* The Layout will wrap the Navbar and other page content */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/make-an-appointment" element={<MakeAnAppointment />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route path="/medication" element={<Medication />} />
          <Route path="/on-duty" element={<OnDuty />} />
          <Route path="/new-appointment" element={<NewAppointment />} />
          <Route path="/view-appointments" element={<ViewAppointments />} />

          {/* Add routes for Profile, Messages, and Search */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
