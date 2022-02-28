var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _range = function (j) { return Array.from({ length: j }, function (x, i) { return i; }); };
function take(list, n) {
    return list.slice(0, n);
}
function range(j) {
    return Array.apply(null, Array(j)).map(function (_, i) {
        return i;
    });
}
function rangeTo(size, startAt) {
    if (startAt === void 0) { startAt = 0; }
    return __spreadArrays(Array(size).keys()).map(function (i) { return i + startAt; });
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
