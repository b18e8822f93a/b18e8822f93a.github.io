function filterNow(valuesset) {
    const values = Array.from(valuesset);
    if (values.length === 0) {
        $("#myDIV .container").filter(function () {

            $(this).slideDown()
        });
        return;
    }
    //  if (values.length > 0)
    $("#myDIV .container").filter(function () {

        var theCurrentText = jQuery(".searchText", this).text().toLowerCase();
        console.log(theCurrentText);
        var hello = values.map(o => jQuery(".searchText", this).text().toLowerCase().indexOf(o) > -1);
        console.log($(this).text())
        var theHellos = hello.some(o => o);
        if (theHellos)
            //$(this).toggle(theHellos, "slow");
            $(this).slideDown()
        else
            $(this).slideUp()
    });
}

// $(document).ready(function () {
function initialise() {
    addSelectBox("dv1");

    $("#sel0").select2({
        data: theData,
        tags: true,
        tokenSeparators: [",", " "],
    });

    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();

        var values = value.split(' ')
            .filter(o => !($.trim(o) == ''))
            .filter(o => (o.length >= 3));

        var set = new Set(values);
        filterNow(set);
    });

    $("#sel0").on("select2:unselect", function (e) {
        var data1 = e.params.data.text;
        mySet.delete(data1);
        console.log(mySet);
        filterNow(mySet);
    });

    $("#sel0").on("select2:select", function (e) {
        var data1 = e.params.data.text;
        mySet.add(data1);
        console.log(mySet);
        filterNow(mySet);
    });
}
// );
function addSelectBox(containerId) {
    var sel = document.createElement("select");
    sel.setAttribute("id", "sel0");
    sel.classList.add("js-example-tags");
    sel.classList.add("js-example-theme-single");
    sel.classList.add("jform-control");
    sel.classList.add("cats");
    sel.style.width = "100%";
    sel.multiple = true;
    document.getElementById(containerId).appendChild(sel);
}
let mySet = new Set();