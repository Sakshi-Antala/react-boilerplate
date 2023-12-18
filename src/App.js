import logo from './logo.svg';
import './App.css';
import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Login = React.lazy(() => import('./views/auth/login'));
const Register = React.lazy(() => import('./views/auth/register'));


function App() {
  const loading = (
    <p>Loading.....</p>
  )
  return (
    <Router>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Login Page" element={<Register />} />
            {/* <Route path="/*" name="Home" element={<DefaultLayout />} /> */}
          </Routes>
        </Suspense>
      </Router>
  );
}

export default App;
