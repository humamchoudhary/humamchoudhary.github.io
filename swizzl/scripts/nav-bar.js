const scroll_top_icon = document.querySelector(".scroll-top-icon");

window.onscroll = function () {
  var currentScrollPos = window.scrollY;

  if(currentScrollPos <= 950){
    scroll_top_icon.classList.remove("at-bottom");
    }
    else if(currentScrollPos > 950){
      scroll_top_icon.classList.add("at-bottom");
    }  
};

const Click_Button_To_Top= () =>{
  scroll_top_icon.addEventListener('click', ()=>{
  window.scrollTo(0,0); 
  });
}

Click_Button_To_Top();

