import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Aot_1 from './aot_1';
import Navigation from "./navbar";
import Evangelion from "./evangelion";
import Home from './home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Navigation />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/evangelion' element={<Evangelion />} />
        <Route path='/aot' element={<Aot_1 />} />
    </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
