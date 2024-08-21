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


//// ====------ for dynamic cards -------=====
let products = [
    { path: 'images/products/f1.jpg', title: 'Cartoon Astronaurt T-shirt 1', price: '82' },
    { path: 'images/products/f2.jpg', title: 'Cartoon Astronaurt T-shirt 2', price: '74' },
    { path: 'images/products/f3.jpg', title: 'Cartoon Astronaurt T-shirt 3', price: '66' },
    { path: 'images/products/f4.jpg', title: 'Cartoon Astronaurt T-shirt 4', price: '91' }
];

localStorage.setItem("products", JSON.stringify(products));

let cardRow = $('#card-row');
function addCards() {
    let html = '';
    for (const key in products) {
        html += `
        <div class="col-xl-3 col-lg-4 col-sm-6">
            <div class="product-card rounded-4 overflow-hidden p-2 position-relative">
                <div class="overflow-hidden rounded-4">
                    <img src="${products[key].path}" alt="${products[key].title}" class="img-fluid rounded-4">
                </div>
                <div class="product-card-body py-2 px-1">
                    <span>adidas</span>
                    <h5>${products[key].title}</h5>
                    <div class="star py-1">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <h4>$${products[key].price}</h4>
                </div>
                <a href="#"
                    class="text-decoration-none position-absolute d-flex justify-content-center align-items-center">
                    <i class="fas fa-shopping-cart cart mt-1"></i>
                </a>
            </div>
        </div>
    `;
    }
    cardRow.innerHTML = html;
}

addCards();

function $(id) {
    return document.querySelector(id);
}
