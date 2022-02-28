function rssUrlSubmission() {
    var text = $('#fname').val();
    console.log(text);
    $.get("https://script.google.com/macros/s/AKfycbx5hs19W2lPsXwKIJOsuacm8O6vUI-Dd7JKflBJc61SAq_rvb3wBpX_gy5ACy_voyN4hg/exec?page=" + text + "&callback=?"
    // 'https://script.google.com/macros/s/AKfycbzyEKMIUxQ0oamiY2znurUfmZk8Fb_F4yOoyjtoO5pK/dev?page=index123&callback=?'
    );
    event.preventDefault();
    event.stopPropagation();
    var thanksBox = document.getElementById("dvThanks");
    thanksBox.innerHTML = "thank you for submitting your xml feed";
}
