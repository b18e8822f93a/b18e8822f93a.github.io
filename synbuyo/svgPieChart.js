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
