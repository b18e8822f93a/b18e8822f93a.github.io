console.log("site.js hello is included");
function setupRadioButtonFilterHandlerWithKeyLookup(buttonClass, cellClass, options) {
    console.log("setting up setupRadioButtonFilterHandlerWithKeyLookup ");
    //add event for the radio buttons, get the id, get the key, hide all, show with key
    $("." + buttonClass).click(function () {
        var theValue = $(this).val();
        var key = options[theValue];
        console.log(theValue);
        $('.' + cellClass).hide();
        // $('.rolesection[data-slider=' + key + ']').show();
        $('.' + cellClass + '[data-slider*=' + key + ']').show();
        console.log("here in the click event");
    });
}
function setupRadioButtonFilterHandlerWithClass(buttonClass, cellClass) {
    $("." + buttonClass).click(function () {
        var theValue = $(this).val();
        if (theValue.toLowerCase() == 'all')
            $("." + cellClass).show();
        else
            $("." + cellClass).hide();
        var theValue = $(this).val();
        var theValueX = "." + theValue;
        if (this.checked)
            $(theValueX).show(); //.show("fast", function() {});
    });
}
;
