const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar-list');
    const navLinks = document.querySelectorAll('.navbar-list li');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('navbar-active');
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation='navLinkFade 0.5s ease forwards ${index/7}s'
            }
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();