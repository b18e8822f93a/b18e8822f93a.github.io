var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
    var tags2 = __spreadArrays(tags);
    var data = tags2.sort().map(function (o, i) {
        return { id: o, text: o };
    });
    return data;
}
function addItemToAllDropdowns(data, n) {
    for (var index = 0; index < n; index++) {
        var theId = "#sel" + index;
        if ($(theId).find("option[value='" + data.id + "']").length) {
        }
        else {
            var newOption = new Option(data.text, data.id, false, false);
            $(theId).append(newOption);
        }
    }
}
function getDataNoGroups(tags) {
    var tags2 = __spreadArrays(tags);
    var data = tags2.sort().map(function (o, i) {
        return { id: o.replaceAll(" ", "--"), text: o };
    });
    var data2 = [
        { text: "", children: data },
    ];
    return data;
}
