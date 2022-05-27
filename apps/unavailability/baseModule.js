const globalVariable = {
    btnRadioValue: 0,
    uniqueFuels: [],
    filterLabel: '*',
    isLatestOnly: 0,
    byDate: '*'
};


const basePage = {
    reToggleChartAndTable: function () {
        if (globalVariable.showTable == 1) {
            //e//lem.classList.add('hiding2');
            $('.dvTable').toggleClass("hiding2", true);//.hide();
            $('.dvChart').toggleClass("hiding2", false);


        }
        else {

            $('.dvTable').toggleClass("hiding2", false);
            $('.dvChart').toggleClass("hiding2", true);
        }
        console.log("reflow it");
        $('.dvChart').highcharts().reflow(); $('#dvChart').highcharts().reflow();
    },
    dispatch: function (message) {
        switch (message.key) {
            case "toggle":
                globalVariable.showTable = message.value;
                this.reToggleChartAndTable();
                break;
        }
    },
    setUpEventListeners: function () {
        radioButtonCreate.setUpEventListenersRadioButton('btnRadioC', (v) =>
            this.dispatch({ key: 'toggle', value: v }));

    },
    addFuelRadioButtons: function () {
        var radioButtons = globalVariable.uniqueFuels.map((x, i) => radioButtonCreate.getAnRadioButton(i, x, 'btnRadioB')).join('');

        var buttonsDiv = document.querySelector('#dvButtons');

        buttonsDiv.innerHTML = radioButtons;
    },
    onLoad: function () {
        this.setUpEventListeners();
        this.reToggleChartAndTable();
        this.addFuelRadioButtons();
    }
}