//header
const header = document.getElementById("header");

fetch('../../layouts/parts/header.html').then(snap => snap.text()).then(result => {
    header.innerHTML = result;
})



// //footer
// const footer = document.getElementById("footer");

// fetch('../../layouts/parts/footer.html').then(snap => snap.text()).then(result => {
//     footer.innerHTML = result;
// })

//Home
function navigateToHome() {
    window.location.href = "../../index.html";
    return false; // Mencegah aksi default tautan
}

//Destinations
function navigateToDestinations() {
    window.location.href = "../../layouts/destinations/destinations.html";
    return false; // Mencegah aksi default tautan
}

// Culture
function navigateToCulture() {
    window.location.href = "../../layouts/culture/culture.html";
    return false; // Mencegah aksi default tautan
}

//Detail Culture
function navigateToDetailCulture() {
    window.location.href = "../../layouts/detailCulture/detailCulture.html";
    return false; // Mencegah aksi default tautan
}

// Foods
function navigateToFoods() {
    window.location.href = "../../layouts/foods/foods.html";
    return false; // Mencegah aksi default tautan
}