// storage.js

// --- User Management ---
function registerUser(email, password) {
    let users = JSON.parse(localStorage.getItem("users")) || {};
    if(users[email]) return "exists";
    users[email] = { password: password };
    localStorage.setItem("users", JSON.stringify(users));
    return "success";
}

function loginUser(email, password) {
    let users = JSON.parse(localStorage.getItem("users")) || {};
    if(!users[email]) return "not_found";
    if(users[email].password !== password) return "wrong_password";
    return "success";
}

function resetPassword(email, newPassword) {
    let users = JSON.parse(localStorage.getItem("users")) || {};
    if(!users[email]) return "not_found";
    users[email].password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));
    return "success";
}

// --- Products Management ---
function getProducts() {
    return JSON.parse(localStorage.getItem("products")) || {};
}

function addProduct(userEmail, product) {
    let products = getProducts();
    if(!products[userEmail]) products[userEmail] = [];
    products[userEmail].push(product);
    localStorage.setItem("products", JSON.stringify(products));
}

function deleteProduct(userEmail, index) {
    let products = getProducts();
    if(products[userEmail]){
        products[userEmail].splice(index,1);
        localStorage.setItem("products", JSON.stringify(products));
    }
}

// --- Orders Management ---
function getOrders() {
    return JSON.parse(localStorage.getItem("orders")) || {};
}

function placeOrder(buyerEmail, sellerEmail, product) {
    let orders = getOrders();
    if(!orders[buyerEmail]) orders[buyerEmail] = [];
    orders[buyerEmail].push({ seller: sellerEmail, ...product });
    localStorage.setItem("orders", JSON.stringify(orders));
}

function getUserOrders(userEmail){
    let orders = getOrders();
    return orders[userEmail] || [];
}