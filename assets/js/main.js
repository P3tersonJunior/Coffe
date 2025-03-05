
/*============================== SHOW MENU =========================== */
const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle'),
 navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*============================== SHADOW =========================== */

const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*============================== SWIPER =========================== */
const swiperpopular = new Swiper('.popular__swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 32,
    slidesPerView: 'auto', 
    centeredSlides: true,   
    
    breakpoints: {
      1150: {
        spaceBetween: 80,    
      }
    }
  });
  
  /*============================== SCROLL UP CODE =========================== */
  const scrollUp = () =>{
    const scrollUp = document.getElementById("scroll-up")

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)
  
/*============================== SROLL SECTIONS ACTIVE LINK =========================== */ 
// const sections = document.querySelector("section[id]")

// const scrollActive = () =>{
// const scrollDown = window.scrollY

// sections.forEach(current => {
//   const sectionHeight = current.offsetHeight,
//     sectionTop = current.offsetTop - 58,
//     sectionId = current.getAttribute('id'),
//     sectionsClassList = document.querySelector('.nav__menu a[href*=]' + sectionId + ']')

//     if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
//       sectionsClassList.classList.add('active-link')
//     }else(
//       sectionsClassList.classList.remove('active-link')
//     )
// })
// }
// window.addEventListener('scroll', scrollActive)

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)