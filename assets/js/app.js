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