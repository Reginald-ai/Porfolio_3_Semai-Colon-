//navbar
const btnBurger =  document.querySelector('.navbars_btn_toggle')
const navLinks = document.querySelector('.header_menu .navbars_nav')
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