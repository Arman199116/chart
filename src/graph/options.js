export const options = {
    chart: {
        id: 'chart',
        toolbar: {
            show: false
        },
        zoom: {
            autoScaleYaxis: true
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
                    color: "#0a1113",
                }
            }
        }],
        xaxis: [{
            //x: new Date('10 Aug 2022').getTime(),
            borderColor: '#999',
            yAxisIndex: 0,
            label: {
                show: true,
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
        curve: ['smooth', 'straight', 'stepline']
    },
    xaxis: {
        type: 'datetime',
        //min: new Date('01 Jan 2022').getTime(),
    },
    yaxis: {
        tickAmount: 12
        //min: new Date('01 Jan 2022').getTime(),
    },
    tooltip: {
        x: {
            format: 'dd/MM/yyyy',
        },
    },
    fill: {
        type: 'gradient',
        colors: ['#16C784'],
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.7,
            stops: [0, 50, 100]
        }
    },
 }