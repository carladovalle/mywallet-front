import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import EntryScreen from './EntryScreen';
import ExitScreen from './ExitScreen';
import RecordScreen from './RecordScreen';

import UserContext from '../contexts/UserContext';

export default function App () {

    const [user, setUser] = React.useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginScreen />} />
                    <Route path="/sign-up" element={<RegistrationScreen />} />
                    <Route path="/entry" element={<EntryScreen />} />
                    <Route path="/exit" element={<ExitScreen />} />
                    <Route path="/record" element={<RecordScreen />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}