import React, {useReducer} from "react";
import './App.css';
import Graph from "./graph/Graph";
import Header from "./HeaderToolBar";
import { Context } from "./data/Context";
import { reduser } from "./data/reduser";

function App() {

    const [days, dispatch] = useReducer(reduser, 1);
console.log('app');
    return (
        <Context.Provider value={{days, dispatch}}>
            <div className='parrent_class'>
                <Header />
                <Graph />
            </div>
        </Context.Provider>
    );
}

export default App;