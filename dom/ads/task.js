let speed = document.querySelector('.rotator__case_active').dataset.speed;
style();

let timer = setInterval(() => {
    const ads = document.querySelector('.rotator__case_active');
    ads.classList.remove('rotator__case_active');
    if (ads.nextElementSibling) {
        ads.nextElementSibling.classList.add('rotator__case_active');
    } else {
        ads.parentElement.firstElementChild.classList.add('rotator__case_active');
    }
    style();
}, 1000);

function style() {
    let element = document.querySelector('.rotator__case_active');
    element.style.color = element.dataset.color;
}