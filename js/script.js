// sticky nav
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
          document.querySelector('.navbar').style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
          document.querySelector('.navbar').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        } 
    });
  }); 

AOS.init({
    duration: 1200,
});

// read more handler
const readMore = document.getElementById('readMore');
const hide = document.getElementById('hide');
readMore.addEventListener('click', ()=>{
    if(hide.style.display != 'block'){
        hide.style.display = "block";
        readMore.innerText = "Read less";
    }else{
        hide.style.display = "none";
        readMore.innerText = "Read more";
    }
    
});