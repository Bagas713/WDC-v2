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

gsap.registerPlugin(ScrollTrigger);



const galleryWrapper = document.querySelector('.gallery-wrapper')
const gallery = document.querySelector('.gallery')

const tli = gsap.timeline()
tli.to(gallery, {
  x: `-${gallery.offsetWidth}`,
  scrollTrigger: {
    trigger: galleryWrapper,
    start: 'top top',
    end: `+=${gallery.offsetWidth}`,
    pin: true,
    scrub: 0.5,
  }
})

let tl = gsap.timeline();