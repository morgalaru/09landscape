// insert current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear()

// NAV 
const hb = document.querySelector('#hamburgerBtn');

hb.addEventListener('click', () => {
    document.querySelector('#primaryNav').classList.toggle('open')
})


//swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'slide',
    speed: 500,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // start autoplay
    autoplay: {
        delay: 5000,
    },


  });