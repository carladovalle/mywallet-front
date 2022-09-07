import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import EntryScreen from './EntryScreen';
import ExitScreen from './ExitScreen';
import RecordScreen from './RecordScreen';


export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/registration" element={<RegistrationScreen />} />
                <Route path="/entry" element={<EntryScreen />} />
                <Route path="/exit" element={<ExitScreen />} />
                <Route path="/record" element={<RecordScreen />} />
            </Routes>
        </BrowserRouter>
    )
}