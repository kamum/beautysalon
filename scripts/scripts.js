//open and close toggle menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

//close menu on the links
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

//menu shadow when scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  
    if (window.scrollY >= navHeight) {
      // scroll é maior que a altura do header
      header.classList.add('scroll')
    } else {
      // menor que a altura do header
      header.classList.remove('scroll')
    }
  }
  

/* testimonials carousel swiper*/

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            seWrapperSize: true
        }
    }
});

/* Scroll elements */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
})

scrollReveal.reveal(
    `#home .text, #home .image,
      #about .image, #about .text,
      #services header, #services .card,
      #testimonials header, #testimonials .tetimonials,
      #contact .text, #contact .links,
      footer .brand, footer .social
      `, {
    interval: 100
})

/* BACK TO TOP */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  
    if (window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  }

  /*ACTIVE LINKS FROM MENU*/
  const sections = document.querySelectorAll('section[id')

  function activeMenuCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for(const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd) {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
        }else {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')
        }
    }
  }
  
  /* When Scroll */
  window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
    activeMenuCurrentSection()
  })
  
  