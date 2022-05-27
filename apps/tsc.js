var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var ArrayModule;
(function (ArrayModule) {
    function range(j) {
        return Array.apply(null, Array(j)).map(function (_, i) {
            return i;
        });
    }
    ArrayModule.range = range;
    function printToConsole(s) {
        console.log(s);
    }
    ArrayModule.printToConsole = printToConsole;
})(ArrayModule || (ArrayModule = {}));
var _range = function (j) { return Array.from({ length: j }, function (x, i) { return i; }); };
function take(list, n) {
    return list.slice(0, n);
}
function rangeTo(size, startAt) {
    if (startAt === void 0) { startAt = 0; }
    return __spreadArray([], Array(size).keys(), true).map(function (i) { return i + startAt; });
}
function indexOfLargest(a) {
    var lowest = 0;
    for (var i = 1; i < a.length; i++) {
        if (a[i] > a[lowest])
            lowest = i;
    }
    return lowest;
}
function indexOfSmallest(a) {
    var lowest = 0;
    for (var i = 1; i < a.length; i++) {
        if (a[i] < a[lowest])
            lowest = i;
    }
    return lowest;
}
function amax(list) {
    return Math.max.apply(null, list);
}
function amin(list) {
    return Math.min.apply(null, list);
}
function zipUpTwoArray(arr1, arr2) {
    var zippedArray = [];
    for (var i = 0; i < arr1.length; i++) {
        var added = arr1[i] + arr2[i];
        zippedArray.push(added);
    }
    return zippedArray;
}
function zipUpTwoArrayInToPairs(arr1, arr2) {
    var zippedArray = [];
    for (var i = 0; i < arr1.length; i++) {
        var pair = [arr1[i], arr2[i]];
        zippedArray.push(pair);
    }
    return zippedArray;
}
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
var baseOptions = {
    title: {
        text: null
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        series: {
            animation: false,
        },
    }
};
function addChart(series, containerName, chartOptions) {
    var options = {
        series: series
    };
    var opts = __assign(__assign({}, options), chartOptions);
    var fullOpts = jQuery.extend(true, opts, baseOptions);
    var container = $("#" + containerName);
    container.highcharts(fullOpts);
}
// https://stackoverflow.com/questions/12875486/what-is-the-algorithm-to-create-colors-for-a-heatmap
function percentageToHsl(percentage, hue0, hue1) {
    var hue = (percentage * (hue1 - hue0)) + hue0;
    return 'hsl(' + hue + ', 100%, 50%)';
}
// https://www.w3schools.com/colors/colors_hsl.asp
function percentageToWhite(percentage, hue0) {
    var L = 100 - (percentage * 50);
    return 'hsl(' + hue0 + ', 100%, ' + L + '%)';
}
function differenceLabelWithNow(earlierDate) {
    return differenceLabel(Date.now(), earlierDate);
}
// https://stackoverflow.com/questions/13903897/javascript-return-number-of-days-hours-minutes-seconds-between-two-dates
function differenceLabel(nowDate, earlierDate) {
    // get total seconds between the times
    var delta = Math.abs(nowDate - earlierDate) / 1000;
    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    // what's left is seconds
    var seconds = Math.round(delta % 60); // in theory the modulus is not required
    var label = "".concat(days, " Days, ").concat(hours, " Hours, ").concat(minutes, " Minutes, ").concat(seconds, " Seconds ago");
    return label;
}
function makeUL(array) {
    var list = document.createElement("ul");
    for (var i = 0; i < array.length; i++) {
        var item = document.createElement("li");
        item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
    }
    return list;
}
function makeSelectBox(newId, isMultiple) {
    var sel = document.createElement("select");
    sel.setAttribute("id", newId);
    sel.setAttribute("name", newId);
    sel.multiple = isMultiple;
    sel.style.width = "100%";
    return sel;
}
function newSvg(id) {
    var table_html = "\n\n<svg class=\"heartClass\" id=\"heart".concat(id, "\" viewBox=\"0 0 260 245\">\n<path d=\"m56,237 74-228 74,228L10,96h240\"/\n</svg>\n");
    return table_html;
}
function addFavouriteListenMethod(continueMethod, name) {
    $('.' + name + 'Class').click(function () {
        var clickedButton = $('#' + this.id);
        console.log(clickedButton);
        clickedButton.toggleClass("tryGreen");
        var obj = {
            'id': this.id.replace(name, ""),
            isOn: clickedButton.hasClass('tryGreen')
        };
        continueMethod(obj);
    });
}
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
function initialiseInputBox(inputBoxName, filterContinuation) {
    $(inputBoxName).on("keyup", function () {
        var value = $(this).val().toLowerCase();
        var values = value.split(' ')
            .filter(function (o) { return !($.trim(o) == ''); })
            .filter(function (o) { return (o.length >= 3); });
        var set = new Set(values);
        filterContinuation(set);
        console.log(set, "here peeps");
    });
}
var mySet = new Set();
var LineChartModule;
(function (LineChartModule) {
    function addLineChart(series, containerName) {
        var options = {
            series: series
        };
        var opts = __assign(__assign({}, options), lineChartOptions);
        var container = $("#" + containerName);
        container.highcharts(opts);
    }
    LineChartModule.addLineChart = addLineChart;
    var lineChartOptions = {
        title: {
            text: null
        },
        chart: {
            type: "line"
        },
        credits: {
            enabled: false
        },
        xAxis: {
            // labels: { enabled: false },
            type: 'category'
        },
        yAxis: {
            title: { text: "MWh" }
        },
        legend: {
            enabled: false
        },
    };
})(LineChartModule || (LineChartModule = {}));
var radioButtonCreate = {
    setUpEventListenersRadioButton: function setUpEventListenersRadioButton(name, onChange) {
        $("input[name=\"".concat(name, "\"]")).change(function () {
            var v = $("input[name='".concat(name, "']:checked")).val();
            onChange(v);
        });
    },
    setUpEventListenersCheckboxButton: function setUpEventListenersRadioButton(name, onChange) {
        $("input[name=\"".concat(name, "\"]")).change(function () {
            var v = Array.from($("input[name='".concat(name, "']:checked"))).map(function (o) { return o.value; });
            console.log(v, "v");
            onChange(v);
        });
    },
    getAnRadioButton: function getAnRadioButton(id, label, name) {
        var checked = id === 0 ? "checked" : "";
        var radioHtml = "<input class='btn-check' type='radio' id='".concat(name).concat(id, "' value='").concat(id, "' name='").concat(name, "' ").concat(checked, "/>");
        var labelHtml = "<label class='btn btn-outline-primary'  for='".concat(name).concat(id, "'>").concat(label, "</label>");
        return radioHtml + labelHtml;
    },
    getAnCheckButton: function (id, label, name) {
        var checked = id === 0 ? "checked" : "";
        var radioHtml = "<input class='btn-check' type='checkbox' id='".concat(name).concat(id, "' value='").concat(id, "' name='").concat(name, "' ").concat(checked, "/>");
        var labelHtml = "<label class='btn btn-outline-primary'  for='".concat(name).concat(id, "'>").concat(label, "</label>");
        return radioHtml + labelHtml;
    }
};
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
function makeRepeatableDiv(n, formElementKey, includeButton) {
    //let input1 = document.createElement("input");
    var div5 = document.createElement("div");
    var div4 = document.createElement("div");
    var div3 = document.createElement("div");
    if (includeButton) {
        var bt1 = document.createElement("button");
        var textNode = document.createTextNode("Remove");
        bt1.appendChild(textNode);
        function removeMe() {
            var result = confirm("Confirm removal of this role");
            if (result == true) {
                div5.parentNode.removeChild(div5);
                document.getElementById("pageform").submit();
            }
        }
        bt1.className = "btn btn-primary btn-sm flex-items";
        bt1.addEventListener("click", removeMe);
        div3.append(bt1);
    }
    div3.className = "flex-container clName mb-1 mt-3";
    div3.id = "dvSection" + n;
    if (typeof formElementKey != 'undefined' && formElementKey !== '') {
        //div4.innerHTML = "Assigned to " + formElementKey;
        //div3.append(input1);
    }
    div4.className = "form-text text-muted";
    div5.append(div3);
    div5.append(div4);
    return div5;
}
function addSectionToAll(n, selectedValue, formElementKey, containingDiv, includeButton) {
    var div3 = makeRepeatableDiv(n, formElementKey, includeButton);
    containingDiv.append(div3);
    setupSelectToAll("dvSection" + n, n, selectedValue, formElementKey);
    return div3;
}
function setupSelectToAll(divId, n, selectedValue, formElementKey) {
    var newId = "sl" + "_" + n + "_" + selectedValue.replaceAll(" ", "--") + "_" + formElementKey;
    var sel = makeSelectBox(newId, false);
    document.getElementById(divId).insertBefore(sel, document.getElementById(divId).firstChild);
    $("#" + newId).select2({
        data: getDataNoGroups(cities),
        tags: true,
        tokenSeparators: [","],
    });
    if (typeof selectedValue != 'undefined' && selectedValue !== '') {
        $("#" + newId).val(selectedValue.replaceAll(" ", "--"));
        $("#" + newId).trigger('change');
    }
    $("#" + newId).on("select2:select", function (e) {
        console.log("here");
        var data1 = e.params.data;
        cities.add(data1.text);
        addItemToAllDropdowns(data1, counter + 1);
        document.getElementById("pageform").submit();
    });
}
function setupSelect(divId, selectId, isMultiple, set, onChangeToList) {
    var sel = makeSelectBox(selectId, isMultiple);
    document.getElementById(divId).appendChild(sel);
    var $sel = $(sel);
    $sel.select2({
        data: getData(set),
        tags: true,
        tokenSeparators: [","],
    });
    if (typeof onChangeToList != 'undefined') {
        $sel.on("select2:select", function (e) {
            var data1 = e.params.data;
            set.add(data1.text);
            onChangeToList();
        });
    }
}
function getData(tags) {
    var tags2 = __spreadArray([], tags, true);
    var data = tags2.sort().map(function (o, i) {
        return { id: o, text: o };
    });
    return data;
}
function addItemToAllDropdowns(data, n) {
    for (var index = 0; index < n; index++) {
        var theId = "#sel".concat(index);
        if ($(theId).find("option[value='" + data.id + "']").length) {
        }
        else {
            var newOption = new Option(data.text, data.id, false, false);
            $(theId).append(newOption);
        }
    }
}
function getDataNoGroups(tags) {
    var tags2 = __spreadArray([], tags, true);
    var data = tags2.sort().map(function (o, i) {
        return { id: o.replaceAll(" ", "--"), text: o };
    });
    var data2 = [
        { text: "", children: data },
    ];
    return data;
}
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
function $$(id) {
    return document.querySelectorAll(id);
}
function setupPies() {
    $$('.pie').forEach(function (pie) {
        var size = 30;
        var p = parseFloat(pie.textContent);
        var NS = "http://www.w3.org/2000/svg";
        var svg = document.createElementNS(NS, "svg");
        var circle = document.createElementNS(NS, "circle");
        var title = document.createElementNS(NS, "title");
        circle.setAttribute("r", 16);
        circle.setAttribute("cx", 16);
        circle.setAttribute("cy", 16);
        circle.setAttribute("stroke-dasharray", p + " 100");
        svg.setAttribute("viewBox", "0 0 32 32");
        // title.textContent = pie.textContent;
        pie.textContent = '';
        svg.setAttribute("class", "piecharts");
        svg.appendChild(title);
        svg.appendChild(circle);
        pie.appendChild(svg);
    });
}
var TableFilterModule;
(function (TableFilterModule) {
    function initialiseNumberInputBox(inputBoxName, filterContinuation) {
        $(inputBoxName).on("change", function () {
            var value = $(this).val().toLowerCase();
            var values = parseFloat(value);
            filterContinuation(values);
        });
    }
    TableFilterModule.initialiseNumberInputBox = initialiseNumberInputBox;
    function filterTable(minV) {
        //## child combinator selector - direct children of a parent    
        __spreadArray([], $("table > tbody > tr"), true).forEach(function (x) {
            console.log($(x));
            var vol = parseFloat($(".searchText", $(x)).text().toLowerCase());
            console.log(vol);
            if (vol > minV)
                $(x).slideDown();
            else
                $(x).slideUp();
        });
    }
    TableFilterModule.filterTable = filterTable;
})(TableFilterModule || (TableFilterModule = {}));
function rssUrlSubmission() {
    var text = $('#fname').val();
    console.log(text);
    $.get("https://script.google.com/macros/s/AKfycbx5hs19W2lPsXwKIJOsuacm8O6vUI-Dd7JKflBJc61SAq_rvb3wBpX_gy5ACy_voyN4hg/exec?page=".concat(text, "&callback=?")
    // 'https://script.google.com/macros/s/AKfycbzyEKMIUxQ0oamiY2znurUfmZk8Fb_F4yOoyjtoO5pK/dev?page=index123&callback=?'
    );
    event.preventDefault();
    event.stopPropagation();
    var thanksBox = document.getElementById("dvThanks");
    thanksBox.innerHTML = "thank you for submitting your xml feed";
}
//# sourceMappingURL=tsc.js.map