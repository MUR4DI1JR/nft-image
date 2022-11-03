import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import NftItem from "./pages/nftItem";

import './App.css';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/item/:id/:address/:token' element={<NftItem/>}/>
            </Routes>
        </div>
    );
};

export default App;