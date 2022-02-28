function filterNow(valuesset) {
    console.log(valuesset, "hi mate");
    var values = Array.from(valuesset);
    if (values.length === 0) {
        $("#myDIV .container").filter(function () {
            $(this).slideDown();
        });
        return;
    }
    //  if (values.length > 0)
    $("#myDIV .container").filter(function () {
        var _this = this;
        var theCurrentText = jQuery(".searchText", this).text().toLowerCase();
        console.log(theCurrentText, "theCurrentText");
        var hello = values.map(function (o) { return jQuery(".searchText", _this).text().toLowerCase().indexOf(o) > -1; });
        console.log($(this).text(), "AAA");
        console.log(hello, "hello");
        var theHellos = hello.every(function (o) { return o; }); // so have AND here, swtich to .some for OR
        console.log(theHellos, "BBB");
        if (theHellos)
            //$(this).toggle(theHellos, "slow");
            $(this).slideDown();
        else
            $(this).slideUp();
    });
}
function initialiseInputBox(inputBoxName) {
    $(inputBoxName).on("keyup", function () {
        var value = $(this).val().toLowerCase();
        var values = value.split(' ')
            .filter(function (o) { return !($.trim(o) == ''); })
            .filter(function (o) { return (o.length >= 3); });
        var set = new Set(values);
        filterNow(set);
        console.log(set, "here peeps");
    });
}
var mySet = new Set();
