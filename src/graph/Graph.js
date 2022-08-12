import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import getData from "./../data/fetch_data";

function Graph() {
	const [data, setData] = useState([]);

	// getData().then((val) => {

    //     let prices = val.map(price => {
	// 		return (price[1] / 1000).toFixed(2) ;
	// 	})
	// 	setData(prices);
	// });

    const series = [{
        name: 'Price',
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
        ]
    }];

	const options = {
        chart: {
            id: 'chart',
			toolbar: {
				show: false
			},
            zoom: {
                autoScaleYaxis: false
            },
        },
		annotations: {
            yaxis: [{
                y: 30,
                borderColor: '#999',
                label: {
                    show: true,
                    text: 'Coin MarketCup',
                    style: {
                        color: "#CFD6E4",
                       
                    }
                }
            }],
            xaxis: [{
                x: new Date('10 Aug 2012').getTime(),
                borderColor: '#999',
                yAxisIndex: 0,
                label: {
                    show: true,
                    text: 'Rally',
                    style: {
                        color: "#fff",
                        background: '#775DD0'
                    }
                }
            }]
        },	
        dataLabels: { enabled: false },
        
        colors: ['#16C784'],
        stroke: {
            curve: 'straight',
        },
        xaxis: {
            type: 'datetime',
            min: new Date('01 Jan 2012').getTime(),
            tickAmount: 6,
			
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.7,
                stops: [0, 50, 100]
            }
        },
		
     }
        
      
      return (
            
                  <div id="chart">
                        <ReactApexChart options={options} series={series} type= "area" height={400} />
                  </div>
            
      );
}

export default Graph;
