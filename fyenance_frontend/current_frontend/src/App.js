import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage"; // Import Landing page
import About from "./pages/AboutPage"; // Import About page
import DashboardPage from './pages/DashboardPages/MainDashboard'; // Import Dashboard page component
import TransactionPage from './pages/TransactionPage';
import SettingsPage from './pages/DashboardPages/SettingsPages/Settings'; // Correct path to your SettingsPage

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-url.com', // Replace with your API URL
})

function App() {
  return (
    <Router>
      <div>
        {/* Define the routes */}
        <Routes>
          {/* The LandingPage component is displayed for the root path */}
          <Route path="/" element={<LandingPage />} />
          
          {/* The About component is displayed for the /about path */}
          <Route path="/about" element={<About />} />

          {/* The Dashboard component is displayed for the /dashboard path */}
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* The Dashboard component is displayed for the /trnsaction page path */}
          <Route path="/transactions" element={<TransactionPage />} />

          {/* The Settings component is displayed for the /settings path */}
          <Route path="/settings" element={<SettingsPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;


















// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import About from "./pages/AboutPage"; // Your About page

// function App() {
//   return (
//     <div>
//       <LandingPage />
//     </div>
//   );
// }

// export default App;
