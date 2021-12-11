var points = 0
const github = "https://github.com/maciekkoks/"

function main() {
    document.getElementById("submit").style.display = "block"
    document.getElementById("play").style.display = "none"
    document.getElementById("pnt").innerHTML = points
    document.getElementById("hex").value = "";

    function r(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let valr = r(0, 255);

    function g(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let valg = g(0, 255);

    function b(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let valb = b(0, 255);


    document.getElementById("maintxt").innerHTML = ' <span style="color: red">R</span> ' + valr + ' <span style="color: green">G</span> ' + valg + ' <span style="color: blue">B</span> ' + valb

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    sol = (rgbToHex(valr, valg, valb));
    console.log(sol);
    document.getElementById("clr").style.backgroundColor = sol;
}
main();

function hidetxt() {
    document.getElementById("solution").innerHTML = "";
}

function submit() {

    const hex = document.getElementById("hex").value
    document.getElementById("play").style.display = "block"
    if (hex != sol) {
        document.getElementById("solution").innerHTML = "<br>" + "The answer is not correct. The correct answer was: " + '<span class="notc">' + sol + "</span>";
        document.getElementById("submit").style.display = "none"

    }
    if (hex == sol || hex == sol.toUpperCase()) {
        document.getElementById("solution").innerHTML = "The answer is correct. Good job! ☺";
        points++
        document.getElementById("pnt").innerHTML = points
        document.getElementById("submit").style.display = "none"
    }
    document.getElementById("hex").value = "";
}
// Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-X6TB2W56QL');
