import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import EntryScreen from './EntryScreen';
import ExitScreen from './ExitScreen';
import RecordScreen from './RecordScreen';

import TokenContext from "../contexts/TokenContext";

export default function App () {

    const [token, setToken] = React.useState("");

    return (
        <TokenContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/sign-in" element={<LoginScreen />} />
                    <Route path="/sign-up" element={<RegistrationScreen />} />
                    <Route path="/entry" element={<EntryScreen token={token} />} />
                    <Route path="/exit" element={<ExitScreen token={token} />} />
                    <Route path="/record" element={<RecordScreen token={token} />} />
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    )
}