import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Global CSS
import './App.css';
import './components/assets/css/style.css';
import './components/assets/css/newStyle.css';
import './components/assets/css/media.css';
import './components/assets/css/bootstrap-min.css';
import './components/assets/css/contactus.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Routes
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;