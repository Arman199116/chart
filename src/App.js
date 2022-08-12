import React from "react";
import './App.css';
//import { BrowserRouter as Router, Routes } from "react-router-dom";
import Graph from "./graph/Graph";
import Header from "./Header";


function App() {


    return (
        
        <div className='parrent_class'>
            <Header />   
            <Graph />

        </div>
        
    );
}

export default App;

const series = [{
    name: "Price",
    data: [
    
        [1327359600000,30.95],
        [1327446000000,31.34],
        [1327532400000,31.18],
        [1327618800000,31.05],
        [1327878000000,31.00],
        [1327964400000,30.95],
        [1328050800000,31.24],
        [1328137200000,31.29],
        [1328223600000,31.85],
        [1328482800000,31.86],
        [1328569200000,32.28],
        [1328655600000,32.10],
        [1328742000000,32.65],
        [1328828400000,32.21],
        [1329087600000,32.35],
        [1329174000000,32.44],
        [1329260400000,32.46],
        [1329346800000,32.86],
        [1329433200000,32.75],
        [1329778800000,32.54],
        [1329865200000,32.33],
        [1329951600000,32.97],
        [1330038000000,33.41],
        [1330297200000,33.27],
        [1330383600000,33.27],
        [1330470000000,32.89],
        [1330556400000,33.10],
        [1330642800000,33.73],
        [1330902000000,33.22],
        [1330988400000,31.99],
        [1331074800000,32.41],
        [1331161200000,33.05],
        [1331247600000,33.64],
        [1331506800000,33.56],
        [1331593200000,34.22],
        [1331679600000,33.77],
        [1331766000000,34.17],
        [1331852400000,33.82],
        [1332111600000,34.51],
        [1332198000000,33.16],
        [1332284400000,33.56],
        [1332370800000,33.71],
        [1332457200000,33.81],
        [1332712800000,34.40],
        [1332799200000,34.63],
        [1332885600000,34.46],
        [1332972000000,34.48],
        [1333058400000,34.31],
        [1333317600000,34.70],
        [1333404000000,34.31],
        [1333490400000,33.46],
        [1333576800000,33.59],
    ]
}];

// let options = {

//     chart: {
//         id: 'area-datetime',
//         type: 'area',
//         zoom: {
//             autoScaleYaxis: true
//         }
//     },
//    
//     annotations: {
//         yaxis: [{
//             y: 30,
//             borderColor: '#999',
//             label: {
//                 show: true,
//                 text: 'Support',
//                 style: {
//                     color: "#fff",
//                     background: '#00E396'
//                 }
//             }
//         }],
//         xaxis: [{
//             x: new Date('10 Nov 2022').getTime(),
//             borderColor: '#999',
//             yAxisIndex: 0,
//             label: {
//                 show: true,
//                 text: 'Rally',
//                 style: {
//                     color: "#fff",
//                     background: '#775DD0'
//                 }
//             }
//         }]
//     },
//     dataLabels: {
//         enabled: false
//     },
//     markers: {
//         size: 0,
//         style: 'hollow',
//     },
//     xaxis: {
//         type: 'datetime',
//         min: new Date('01 Mar 2012').getTime(),
//         tickAmount: 6,
//     },
//     tooltip: {
//         x: {
//             format: 'dd MMM yyyy'
//         }
//     },
//     fill: {
//         type: 'gradient',
//         gradient: {
//             shadeIntensity: 1,
//             opacityFrom: 0.7,
//             opacityTo: 0.9,
//             stops: [0, 100]
//         }
//     },
// };
