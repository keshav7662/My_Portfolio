import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'aos/dist/aos.css';
import './App.css';
import About from './layout/About';
import Contact from './layout/Contact';
import Home from './layout/Home';
import Navbar from './layout/Navbar';
import Projects from './layout/Projects';
import Services from './layout/Services';
import Skills from './layout/Skills';
import LineStroke from './layoutComponents/LineStroke';
import { Toaster } from 'react-hot-toast';
import Dashboard from "./layout/Admin/Dashboard";
import Login from "./layout/Admin/Login";
import ProtectedRoute from "./authentication/ProtectedRoute";
import { AuthProvider } from '../src/context/AuthContext'

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <LineStroke />
              <About />
              <Skills />
              <Services />
              <Projects />
              <Contact />
            </>
          } />
          {/* Admin Parent Route - Nested Routing */}
          <Route path="/admin" >

            <Route index element={<Navigate to="/admin/login" />} /> {/* Default route to /admin/login */}
            <Route path="login" element={<Login />} />
            <Route path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />

          </Route>

        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
      </AuthProvider>
    </Router>
  );
};

export default App;
