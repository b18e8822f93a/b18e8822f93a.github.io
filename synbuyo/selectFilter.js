function initialise() {
    addSelectBox("dv1");
    $("#sel0").select2({
        data: theData,
        tags: true,
        tokenSeparators: [",", " "],
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
