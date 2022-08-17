//import React, {useReducer} from "react";
import './App.css';
// import Graph from "./graph/Graph";
// import Chartjs2 from "./graph/Chartjs_2";
// import Header from "./HeaderToolBar";
// import { Context } from "./data/Context";
// import { reduser } from "./data/reduser";
import LongestMatch from "./FindLongestMatches";


function App() {

    //const [days, dispatch] = useReducer(reduser, 1);

    return (
        // <Context.Provider value={{days, dispatch}}>
        //     <div className='parrent_class'>
        //         <Header />
        //         <Chartjs2 /> 
                
        //     </div>
        // </Context.Provider>
        <div className='parrent'>
            <LongestMatch />

        </div>
    );
}


export default App;

