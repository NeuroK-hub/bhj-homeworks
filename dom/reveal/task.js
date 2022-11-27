const divText = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
    for (let item of divText) {
        const ads = {top, bottom} = item.getBoundingClientRect();
        if ((ads.top >= 0) && (ads.bottom >= 0)) {
            item.classList.add('reveal_active');
        } 
        else {
            item.classList.remove('reveal_active');
        }
    }
});