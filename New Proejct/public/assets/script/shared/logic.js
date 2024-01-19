let loginButton = document.getElementById("login-button");
let loginButtonModal = document.getElementById("modal-login-button");
let backdrop = document.getElementById("backdrop");
let loginModal = document.getElementById('login-modal');

let accountLink = document.getElementById("account");
let myAccountSubHeaderLink = document.getElementById("my-account-sub-header");
let productSubHeaderLink = document.getElementById("product-sub-header");


let navbar = document.getElementById("navbar");
let accountNavbar = document.getElementById("account-navbar");

let productsGrid = document.getElementById("products-grid");
let productsList = document.getElementById("products-list");
let gridToggleButton = document.getElementById("grid-check-button");
let listToggleButton = document.getElementById("list-check-button");
let shoppingItemsDiv = document.getElementById("shipping-detail-list")
let paymentItemsDiv = document.getElementById("payment-details-list");

let shippingDetailsButton = document.getElementById("child1");
let paymentDetailsButton = document.getElementById("child2");
let menuToggleButton = document.getElementById('menu-toggle');

// showNavbar();


shippingDetailsButton.addEventListener('click',() =>{
    shoppingItemsDiv.style.display = 'block';
    shippingDetailsButton.classList.add('active');
    paymentItemsDiv.style.display = 'none';
    paymentDetailsButton.classList.remove('active');
    shoppingItemsDiv.classList.add("animate__animated animate__bounce");

})

paymentDetailsButton.addEventListener('click',() =>{
    shoppingItemsDiv.style.display = 'none';
    shippingDetailsButton.classList.remove('active');
    
    paymentItemsDiv.style.display = 'block';
    paymentDetailsButton.classList.add('active');
    paymentItemsDiv.classList.add("animate__animated animate__bounce");

    
})

shippingDetailsButton.addEventListener('mouseover',() =>{
    shippingDetailsButton.classList.add('active');
    paymentDetailsButton.classList.remove('active');

})

paymentDetailsButton.addEventListener('mouseover',() =>{
    shippingDetailsButton.classList.remove('active');

    paymentDetailsButton.classList.add('active');

    
})
menuToggleButton.addEventListener('click',() =>{
    console.log("menu clicked");
})
loginButton.addEventListener("mouseover", () =>{
    console.log("Show Login Modal");
    showLoginPopup();
    showBackdrop();
})

loginButtonModal.addEventListener("click", () =>{
    console.log("Login Button Clicked");
    hideLoginPopup();
    hideBackdrop();
    hideLoginModalButton();
})


loginModal.addEventListener("mouseleave", () =>{
    console.log("Close Login Modal");
    hideLoginPopup();
    hideBackdrop();
})

productSubHeaderLink.addEventListener('mouseenter',() =>{
    showNavbar();
})


myAccountSubHeaderLink.addEventListener('mouseenter',() =>{
    showAccountNavbar();
})
navbar.addEventListener('mouseleave',() =>{
    hideNavbar();
})

accountNavbar.addEventListener('mouseleave',() =>{
    hideAccountNavbar();
})

function hideLoginModalButton() {
    loginButton.style.display = 'none';
    accountLink.style.display = 'flex';
    myAccountSubHeaderLink.style.display = 'flex';
}


gridToggleButton.addEventListener('click',() =>{
    gridToggleButton.style.color = "#F58634";
    listToggleButton.style.color = 'black';
    productsGrid.style.display = "flex";
    productsList.style.display = "none";
})

listToggleButton.addEventListener('click',() =>{
    listToggleButton.style.color = "#F58634";
    gridToggleButton.style.color = 'black';
    productsList.style.display = "flex";
    productsGrid.style.display = "none";
})


function openProductDetailPage(){
    console.log("open productt detail page");
    window.open('product-detail.html','_blank');
}
function showLoginPopup() {
    loginModal.style.display = 'block';
}

function hideLoginPopup() {
    loginModal.style.display = 'none';
}

function showBackdrop(){
    backdrop.style.display = 'block';
}

function hideBackdrop(){
    backdrop.style.display = 'none';
}

function showNavbar(){
    console.log("show navbar");
    navbar.style.display = 'block';
}

function hideNavbar(){
    navbar.style.display = 'none';
}

function showAccountNavbar(){
    accountNavbar.style.display = 'flex';
}

function hideAccountNavbar(){
    accountNavbar.style.display = 'none';
}