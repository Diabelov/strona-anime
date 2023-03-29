import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aot1 from './strony/aot_1';
import Navigation from "./navbar.js";
import Evangelion from "./strony/evangelion";
import Home from './strony/home';
import AnimeList from "./strony/api_test";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Navigation />
    <Routes>
        <Route path='/' element={<Home />} index />
        <Route path='/evangelion' element={<Evangelion />} />
        <Route path='/aot' element={<Aot1 />} />
        <Route path='/anime_list/:title' element={<AnimeList />} />
    </Routes>
</BrowserRouter>
);