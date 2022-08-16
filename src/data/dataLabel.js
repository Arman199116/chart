export const dataLabel = {
    add: function (val) {
        return {
            labels: val.prices.map((price) => price[0]),
            datasets: [{
                label: undefined,
                data: val.prices.map((price) => price[1] / 1000 ),
                fill: true,
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 250);
                    gradient.addColorStop(0, "#CDCDCD");
                    gradient.addColorStop(1, 'rgba(254,254,254, 0.5)');
        
                    return gradient;
                },
                borderColor: "#16C784",
                borderWidth: 1,
                    
            }]
        }
    }
}