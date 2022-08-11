import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Graph from "./graph/Graph";
import Header from "./Header";


function App() {


    return (
        
        <div>
            <Header />   
            <Graph />

        </div>
        
    );
}

export default App;
