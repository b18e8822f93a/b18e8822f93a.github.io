const plantsChart = {

    chart: {
        type: "column"
    },

    xAxis: {
        // labels: { enabled: true },
        //  categories: ['Green', 'Pink'],
        type: 'category'
    },
    yAxis: {
        title: { text: "MWh" }
    },
    legend: {
        enabled: false
    },
    plotOptions: {

        column: {
            pointPadding: 0,
            borderWidth: .1,
            groupPadding: 0.00,
            // pointWidth: 0.1,
            //stacking: 'normal',
            dataLabels: {
                enabled: false
            }
        }
    },
};

const plantsModule = {

    addTable: function (items) {
        let tb0 = '<table class="T2" border=3><thead><th>Plant</th><th>Unit</th><th>Capacity</th><th>Fuel</th></thead>';//<th>Outages</th>

        items.forEach(element => {
            tb0 += '<tr>';
            tb0 += '<td>';
            tb0 += element.name;
            tb0 += '</td>';
            tb0 += '<td>';
            tb0 += element.unit;
            tb0 += '</td>';
            tb0 += '<td>';
            tb0 += element.capacity;
            tb0 += '</td>';
            tb0 += '<td>';
            tb0 += element.fuelType;
            tb0 += '</td>';
            // tb0 += '<td>';
            // tb0 += element.futureOutages;
            // tb0 += '</td>';
            tb0 += '</tr>';
        })

        return tb0;
    },
}

const plantsPage = {

    reDrawChart: function reDrawChart() {
        if (globalVariable.btnRadioValue == 0) {
            var q = globalVariable.filterLabel === '*' ? unitSeries : unitSeries.filter(x => x.label == globalVariable.filterLabel)
            console.log(q)
            let newSeries = [{ data: q }]
            addChart(newSeries, "dvChart", plantsChart);
        }
        else {
            var q = globalVariable.filterLabel === '*' ? fuelSeries : fuelSeries.filter(x => x.name == globalVariable.filterLabel)
            let newSeries = [{ data: q }]
            addChart(newSeries, "dvChart", plantsChart);
        }
    },
    reDrawTable: function reDrawTable() {
        let tableDiv = document.querySelector('#dvTable');
        if (globalVariable.btnRadioValue == 0) {
            var q = globalVariable.filterLabel === '*' ? plantsTable : plantsTable.filter(x => x.fuelType == globalVariable.filterLabel)
            tableDiv.innerHTML = plantsModule.addTable(q);
        }
        else {
            var q = globalVariable.filterLabel === '*' ? fuelSeries : fuelSeries.filter(x => x.name == globalVariable.filterLabel)
            var l = q.map(o => ({ name: 'All Units', capacity: o.y, fuelType: o.name, futureOutages: o.y2 }))
            tableDiv.innerHTML = plantsModule.addTable(l);
        }
    },

    dispatch: function (message) {
        switch (message.key) {


            case "byUnit":
                globalVariable.btnRadioValue = message.value;
                this.reDrawChart();
                this.reDrawTable()
                break;

            case "filter":
                var name = globalVariable.uniqueFuels[message.value];
                globalVariable.filterLabel = name;
                console.log(name, "filter")
                this.reDrawChart()
                this.reDrawTable()
                break;
        }
    },


    setUpEventListeners: function () {
        radioButtonCreate.setUpEventListenersRadioButton('btnRadioB', (v) =>
            plantsPage.dispatch({ key: 'filter', value: v }));

        radioButtonCreate.setUpEventListenersRadioButton('btnRadioA', (v) =>
            plantsPage.dispatch({ key: 'byUnit', value: v }));


    }
    ,
    onLoad: function () {
        let ids = plantsTable.map(x => x.fuelType).sort();
        globalVariable.uniqueFuels = ['*', ...new Set(ids)];
        console.log(globalVariable.uniqueFuels, "unique fuel names");





        plantsPage.dispatch({ key: 'toggle', value: 0 });
        plantsPage.reDrawTable();
        plantsPage.reDrawChart();

    }
}
