import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sign from './Components/Sign.jsx'
import Profile from './Components/Profile.jsx'
import Home from './Components/Home.jsx'
import Header from './Components/Header.jsx'
import Post from './Components/Post.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Settings from './Components/Settings.jsx'
import Search from './Components/Search.jsx'
import LoginPage from './Components/LoginPage';
import ProtectedRoute from './Components/ProtectedRoute';
import Dashboard from './Components/Dashboard';
const theme = createTheme();
function App() {
    return (
       <ThemeProvider theme={theme}>
      <CssBaseline />
      {<>
            
            <BrowserRouter>
                <Navbar />
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/s' element={<Sign />} />
                    <Route path='/p' element={<Profile />} />
                    <Route path='/b' element={<Post />} />
                    <Route path='/c' element={<Settings />} />
                    <Route path='/x' element={<Search />} />
                    <Route path="/l" element={<LoginPage />} />
                     <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>}
    </ThemeProvider>
    )
}

export default App