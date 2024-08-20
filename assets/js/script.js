let navLinks = document.querySelectorAll('.nav-link');

// navLinks.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         e.preventDefault();

//         navLinks.forEach((link) => link.classList.remove('active'));
//         e.target.classList.add("active");
//     });
// });
var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("nav-link");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


