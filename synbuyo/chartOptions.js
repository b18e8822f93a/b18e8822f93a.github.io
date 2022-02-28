var lineChartOptions = {
    title: {
        text: null
    },
    chart: {
        type: "line"
    },
    xAxis: {
        type: "datetime"
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        column: {
            pointPadding: 0,
            borderWidth: 0
        },
        series: {
            animation: false,
        },
    },
};
var gridLight = {
    colors: ["#7cb5ec", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
    xAxis: {
        gridLineWidth: 1,
        labels: {
            style: {
                fontSize: '12px'
            }
        }
    },
    yAxis: {
        gridLineColor: '#ffbf80',
        minorGridLineColor: '#ffe6cc',
        minorTickInterval: 'auto',
        title: {
            style: {
                textTransform: 'uppercase'
            }
        },
        labels: {
            style: {
                fontSize: '12px'
            }
        }
    },
};
