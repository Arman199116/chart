import React, { useEffect, useState, useContext} from "react";
import  "chart.js/auto";
import getData from "./../data/fetch_data";
import { optionsChartjs_2 } from "./options";
import { Context } from "../data/Context";
import { dataLabel } from "./../data/dataLabel";

import { Line } from "react-chartjs-2";

function Graph() {

    const { days } = useContext(Context);
    const [memoData, setMemoData] = useState(new Map());

    const [data, setData] = useState({
            labels: [],
            datasets: [],
    });

    useEffect(() => {
        if (!memoData.has(days)) {
            getData(days).then(value => {
                let dataObj = dataLabel.addData(value);
                setData(dataObj);
                setMemoData(updMap => updMap.set(days, dataObj));
            });
        } else {
            setData(memoData.get(days));
        }

        // if (localStorage.getItem( days) === null) { (?<=1)(0+?)(?=1)
        //     getData(days).then(value => {
        //         let dataObj = dataLabel.addData(value);
        //         setData(dataObj);
        //         localStorage.setItem( days, JSON.stringify(dataObj));
        //     });
        // } else {
        //     setData(JSON.parse(localStorage.getItem(days)));
        // }
        // setInterval(() => {
        //     console.log('cleared localStorage');
        //     localStorage.clear();
        // }, 60 * 60 * 1000);
    },[days, memoData]);
    
    return (
        <div id="chart">
            <Line data={data} options={optionsChartjs_2} height={400} width={800}  />
        </div>
    );
}

export default Graph;
