window.addEventListener('scroll',reveal);

function reveal(){
    var elem = document.querySelectorAll('.reveal');

    for (let i = 0; i < elem.length; i++) { 
        var winheigth = window.innerHeight;
        var revealtop = elem[i].getBoundingClientRect().top;
        var revpoint = 20;

        if (revealtop < winheigth - revpoint) {
            elem[i].classList.add('active');
        }else{
            elem[i].classList.remove('active');
            
        }
    }
}   