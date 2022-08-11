import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";



function Graph() {

      const [data , setData] = useState();
      (() => {
            fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
                  .then(response => response.json())
                  .then(json => setData(json))

      })()

      const series = [{
                  name: 'Price',
                    data: [23, 34, 12, 54, 32, 41, 2, 22 , 61]
      }];

      const options = {
            chart: {
                  id: 'chart2',
                  type: 'line',
                  height: 230,
                  
                  toolbar: {
                        show: false,
                  }
            },
           
            toolbar: {
                tools: {
                    zoom: '1D',
                    zoomin: true,
                    zoomout: true,
                }
            },
            dataLabels: { enabled: false },
            colors: ['#16C784'],
            stroke: {
                  curve: 'straight',
            },
            xaxis: {
                  type: 'numeric',
                  categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
            }
      }
        
      // const seriesLine = [{
      //         data: [14,24,65]
      // }];
      // const optionsLine = {
      //       chart: {
      //             id: 'chart1',
      //             height: 130,
      //             type: 'area',
      //             brush:{
      //                   target: 'chart2',
      //                     enabled: true
      //             },
      //             selection: {
      //                     enabled: true,
      //                     xaxis: {
      //                         min: new Date('19 Jun 2017').getTime(),
      //                         max: new Date('14 Aug 2017').getTime()
      //                   }
      //             },
      //       },
      //       colors: ['#008FFB'],
      //       fill: {
      //             type: 'gradient',
      //             gradient: {
      //                     opacityFrom: 0.91,
      //                     opacityTo: 0.1,
      //             }
      //       },
      //       xaxis: {
      //             type: 'datetime',
      //             tooltip: {
      //                     enabled: false
      //             }
      //       },
      //       yaxis: {
      //             tickAmount: 2
      //       }
      // }
  

      return (
            <div>
                  <div id="chart">
                        <ReactApexChart options={options} series={series} type="area" height={350} />
                        {/* <ReactApexChart options={optionsLine} series={seriesLine} type="area" height={130} /> */}
                  </div>
            </div>
      );
}

export default Graph;
