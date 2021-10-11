// import './src/css/semai.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'bootstrap'

// You can also use <link> for styles
// ..
AOS.init();


const btnBurger =  document.querySelector('.navbars_btn_toggle')
const navLinks = document.querySelector('.header_menu .navbars_nav')
const btnPrev = document.querySelector('.btn-prev')
const swiper = document.querySelector('.client-slider-swiper')
const btnNext = document.querySelector('.btn-next')
const carousel = document.querySelector('.carousel-s')


var direction;

function eventListeners(){

    window.addEventListener('scroll',function(){
        var header = document.querySelector('#navbar_top');
        header.classList.toggle('sticky',window.scrollY)
    })
    
    
    
    btnBurger.addEventListener('click',() =>{
        
        navLinks.classList.toggle('open');
    
    })
    btnBurger.addEventListener('click',() =>{
        btnBurger.classList.toggle('opens')
        
       
        
    })
}
eventListeners()
function carousel_eventListeners(){
    btnPrev.addEventListener('click',() =>{
        if(direction == -1){
            swiper.appendChild(swiper.firstElementChild);
            direction = 1
        }
        carousel.style.justifyContent = 'flex-end'
        swiper.style.transform = 'translateX(100%)'
        setTimeout(() =>{
            swiper.style.transition = 'all 1s ease'
        })
    })
    btnNext.addEventListener('click',() =>{
        if(direction == 1){
            swiper.prepend(swiper.lastElementChild);
            direction = -1
        }
        direction = -1
        carousel.style.justifyContent = 'flex-start'
        swiper.style.transform = 'translateX(-100%)'
    })
    
    swiper.addEventListener('transitionend',() =>{
        if(direction == -1){
            swiper.appendChild(swiper.firstElementChild);
        }else if (direction == 1){
            swiper.prepend(swiper.lastElementChild);
        }
        swiper.style.transform ='translateX(0%)'
    
        swiper.style.transition = 'none'
        setTimeout(() =>{
            swiper.style.transition = 'all 1s ease'
        })
    })
}

carousel_eventListeners()


