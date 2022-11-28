import Coffee from "./Coffee";
import Chocolate from "./Chocolate";
import Doughnut from "./Doughnut";
import NavBar from "./NavBar";
import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Homepage from "./Homepage";

/**
 * 
 * App -> VendingMachine
 * 
 * State:
 * 
 * Props:
 * 
 * Returns VendingMachine
 */

function VendingMachine() {
    return (
        <div className="VendingMachine">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/coffee" element={<Coffee />} />
                    <Route path="/chocolate" element={<Chocolate />} />
                    <Route path="/doughnuts" element={<Doughnut />} />
                    <Route path="/" element={<Homepage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine;