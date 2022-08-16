import React, { useEffect, useState, useContext} from "react";
import getData from "./../data/fetch_data";
import { optionsChartjs_2 } from "./options";
import { Context } from "../data/Context";
import { dataLabel } from "./../data/dataLabel";
import { Chart as ChartJS } from "chart.js/auto";

import { Line } from "react-chartjs-2";


function Graph() {
    
    const { days } = useContext(Context);
    const [data, setData] = useState({
            labels: [],
            datasets: [],
    });

    useEffect(() => {

        getData(days).then(value => {

            setData(dataLabel.add(value));
        });
        
    },[days]);
    

    return (
        <div id="chart">
            <Line data={data} options={optionsChartjs_2} height={400} width={800} />
        </div>
    );
}

export default Graph;
