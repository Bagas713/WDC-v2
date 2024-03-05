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

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__form", {
  ...scrollRevealOption,
  delay: 500,
});

// trending container
ScrollReveal().reveal(".trending__card", {
  ...scrollRevealOption,
  interval: 500,
});

// destination container
ScrollReveal().reveal(".destination__card", {
  duration: 1000,
  interval: 500,
});

// seller container
ScrollReveal().reveal(".seller__card", {
  ...scrollRevealOption,
  interval: 500,
});

// guide container
ScrollReveal().reveal(".guide__card", {
  ...scrollRevealOption,
  interval: 500,
});

//  client container
ScrollReveal().reveal(".client__card", {
  ...scrollRevealOption,
  interval: 500,
});