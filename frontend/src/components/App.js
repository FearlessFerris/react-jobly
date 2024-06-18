// Dependencies
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

// Components & Necessary Files
import CompanyList from './CompanyList';
import CompanyDetails from './CompanyDetails';
import CreateUser from './CreateUser';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import Job from './Job';
import Profile from './Profile';
import JoblyApi from '../JoblyApi'; 

// Styling
import '../static/App.css';

// Main Application
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      JoblyApi.token = token; 
      setIsLoggedIn(true);

      
      JoblyApi.getUserInfo()
        .then(userInfo => {
          setIsAdmin(userInfo.isAdmin);
          console.log(isAdmin);
        })
        .catch(error => {
          console.error('Error fetching user info:', error);
        });
    } else {
      setIsLoggedIn(false);
      setIsAdmin(false); 
    }
  }, []);

  const handleLogin = async (token, isAdminFlag) => {
    localStorage.setItem('token', token);
    JoblyApi.token = token; 
    setIsLoggedIn(true);
    setIsAdmin(isAdminFlag);

    try {
      const userInfo = await JoblyApi.getUserInfo();
      setIsAdmin(userInfo.isAdmin);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    JoblyApi.token = ''; 
    setIsLoggedIn(false);
    setIsAdmin(false); 
  };

  return (
    <div className='app-container'>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} isAdmin={isAdmin} />
        <Container maxWidth='lg'>
          <Routes>
            <Route exact path='/' element={<Home isLoggedIn={isLoggedIn} />} />
            <Route exact path='/jobs' element={<Job />} />
            <Route exact path='/companies' element={<CompanyList />} />
            <Route exact path='/companies/:handle' element={<CompanyDetails />} /> 
            <Route exact path='/create-user' element={<CreateUser />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />
          </Routes>
        </Container>
      </Router>
    </div>
  )
}

export default App;
