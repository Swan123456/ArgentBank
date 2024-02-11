import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home/Home.jsx';
import Login from '../src/pages/Login/Login.jsx';
import '../src/sass/_Main.scss';

export default function App () {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<Login />} />
            </Routes>
        </div>
    )  
}