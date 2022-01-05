
var base_url = window.location.origin
var complete_url = window.location.href
var location_url = window.location.pathname
// alert(base_url)
let roster = [{
    "base_url": complete_url,
    "complete_url": complete_url
}
]
alert(base_url);
// alert(complete_url);
function hellYeah(text) {
    document.getElementById("text-holder").innerHTML = text;
}
document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('link');
    // onClick's logic below:
    link.addEventListener('click', function () {
        hellYeah('xxx');
    });
});