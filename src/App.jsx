import React from "react";
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Employee from "./pages/Employee";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' index element={<h1>Home</h1>} />
                <Route path='/about/*' element={<About />} />
                <Route path='/contact' element={<h1>Contact</h1>} />
                <Route path='/technology' element={<h1>Technology</h1>} />
                <Route path='/employee' element={<Employee />}>
                    <Route
                        path='birinchi-sahifa'
                        element={<h1>Birinchi Sahifa</h1>}
                    />
                    <Route
                        path='ikkinchi-sahifa'
                        element={<h1>Ikkinchi Sahifa</h1>}
                    />
                </Route>
                <Route path='*' element={<h1>404</h1>} />
            </Routes>
        </>
    );
}

export default App;
