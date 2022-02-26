window.onload =() =>{
    const transisiton_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a.trans');
    setTimeout(() => {
        transisiton_el.classList.remove('is-active');

    }, 500);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click',e => {
            e.preventDefault();
            let target = e.target.href;
            transisiton_el.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;
            }, 500);

        })
        
    }
}