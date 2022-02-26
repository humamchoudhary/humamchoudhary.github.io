function Show_Menu_Details () {
    const menu = document.querySelectorAll(".menu-items");
    const cross = document.querySelectorAll(".cross");
    const HTML = document.querySelector("html")

    
function Menu_click(menu,index){
    menu.addEventListener('click',()=> {
    document.querySelector(`.desc-sec .desc:nth-child(${index+1})`).style.visibility='visible';
    HTML.classList.add("scroll-stop");
});
}

function Cross_click(cross,index){
    cross.addEventListener('click',()=>{
    document.querySelector(`.desc-sec .desc:nth-child(${index+1})`).style.visibility='hidden';
    HTML.classList.remove("scroll-stop");

    })
}

    menu.forEach(Menu_click);
    cross.forEach(Cross_click);
}
Show_Menu_Details();