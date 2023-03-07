import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from '../app';
import Evangelion from './evangelion';
import Navigation from "./navbar";
import Evangelion_test from "./evangelion_test";
import Home from './home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Navigation />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/evangelion' element={<Evangelion />} />
        <Route path='/test' element={<Evangelion_test />} />
    </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
