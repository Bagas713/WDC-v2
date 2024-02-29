//header
const header = document.getElementById("header");

fetch('../../layouts/parts/header.html').then(snap => snap.text()).then(result => {
    header.innerHTML = result;
})

//footer
const footer = document.getElementById("footer");

fetch('../../layouts/parts/footer.html').then(snap => snap.text()).then(result => {
    footer.innerHTML = result;
})

// Culture
function navigateToCulture() {
    window.location.href = "../../layouts/culture/culture.html";
    return false; // Mencegah aksi default tautan
}

// Foods
function navigateToFoods() {
    window.location.href = "../../layouts/foods/foods.html";
    return false; // Mencegah aksi default tautan
}