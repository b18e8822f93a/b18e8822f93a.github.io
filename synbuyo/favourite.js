function newSvg(id) {
    var table_html = "\n\n<svg class=\"heartClass\" id=\"heart" + id + "\" viewBox=\"0 0 260 245\">\n<path d=\"m56,237 74-228 74,228L10,96h240\"/\n</svg>\n";
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
