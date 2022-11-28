const divText = Array.from(document.querySelectorAll('.reveal'));

setInterval(() => {
    divText.forEach((e) => {
        if(e.getBoundingClientRect().bottom > 0 && e.getBoundingClientRect().top < window.innerHeight) {
            e.classList.add('reveal_active');
        } else {
            e.classList.remove('reveal_active');
        };
    })
})