import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConnectionsProvider } from "./context/ConnectionsContext";
import Profile from './pages/ProfilePage';
import Jobs from './pages/JobsPage';
import Connections from './pages/ConnectionsPage';
import Home from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import './styles/global.css';

const App = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if(storedUser && storedUser.username){
      setUsername(storedUser.username);
    }
  }, []);

  return (
    <ConnectionsProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home username={username} />} />
        <Route path="/profile" element={<Profile username={username} />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/connections" element={<Connections />} />
      </Routes>
    </Router>
    </ConnectionsProvider>
  );
};

export default App;

