const appPage = {
    reLayout: function () {

        let cap = document.querySelectorAll(".cell3");
        let out = document.querySelectorAll(".cell2");

        // this was to hide but seems wierd to select nothing to show, maybe change in future
        if (globalVariable.showSections.length == 0) {

            for (let elem of cap)
                elem.classList.remove('hiding');

            for (let elem of out)
                elem.classList.remove('hiding');
            document.getElementById("gdMain").style.gridTemplateRows = "1fr 1fr";
        }
        else if (globalVariable.showSections.length == 2) {

            for (let elem of cap)
                elem.classList.remove('hiding');

            for (let elem of out)
                elem.classList.remove('hiding');
            document.getElementById("gdMain").style.gridTemplateRows = "1fr 1fr";
        }

        else if (globalVariable.showSections[0] == 0) {
            document.getElementById("gdMain").style.gridTemplateRows = "1fr";

            for (let elem of cap)
                elem.classList.remove('hiding');

            for (let elem of out)
                elem.classList.add('hiding');
        }
        else if (globalVariable.showSections[0] == 1) {
            document.getElementById("gdMain").style.gridTemplateRows = "1fr ";
            for (let elem of cap)
                elem.classList.add('hiding');

            for (let elem of out)
                elem.classList.remove('hiding');
        }

        console.log("should be laying out")
        $('#dvChart').highcharts().reflow();
        $('#dvChart2').highcharts().reflow();

    },

    dispatch: function (message) {
        console.log(message);
        switch (message.key) {
            case "layout":
                globalVariable.showSections = message.value;
                this.reLayout();
                break;
        }
    },

    setUpEventListeners: function () {
        radioButtonCreate.setUpEventListenersCheckboxButton('btnRadioD', (v) =>
            this.dispatch({ key: 'layout', value: v }));
    },

    onLoad: function () {
        this.setUpEventListeners();
    }
}