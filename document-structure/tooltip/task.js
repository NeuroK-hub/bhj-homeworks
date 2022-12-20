const linksArray = Array.from(document.querySelectorAll('.has-tooltip'));


linksArray.forEach((e, index) => {
    let tooltipElement;

    switch (e.dataset.position) {
        case ('top'):
            tooltipElement = `<div class="tooltip" style="left: ${e.getBoundingClientRect().left}px; top: ${e.getBoundingClientRect().top - e.getBoundingClientRect().height - 10}px">
        ${e.title}
        </div>`;
            break;

        case ('right'):
            tooltipElement = `<div class="tooltip" style="left: ${e.getBoundingClientRect().left + (e.getBoundingClientRect().width)}px; top: ${e.getBoundingClientRect().top}px">
        ${e.title}
        </div>`;
            break;

        case ('left'):
            tooltipElement = `<div class="tooltip" style="left: ${e.getBoundingClientRect().left - 240}px; top: ${e.getBoundingClientRect().top}px">
        ${e.title}
        </div>`;
            break;

        case ('bottom'):
            tooltipElement = `<div class="tooltip" style="left: ${e.getBoundingClientRect().left}px; top: ${e.getBoundingClientRect().top + e.getBoundingClientRect().height}px">
        ${e.title}
        </div>`;
            break;
    }

    e.insertAdjacentHTML('afterEnd', tooltipElement);

    e.addEventListener('click', (event) => {
        event.preventDefault();

        for (let i = 0; i < linksArray.length; i++) {
            if (i === index) {
                continue;
            }

            linksArray[i].nextElementSibling.classList.remove('tooltip_active');
        }

        e.nextElementSibling.classList.toggle('tooltip_active');
    })
})

const tooltipsArray = Array.from(document.querySelectorAll('.tooltip'));


window.addEventListener('scroll', () => {
    tooltipsArray.forEach((e) => {
        let  elementTop;
        
        switch(e.previousElementSibling.dataset.position) {
            case('left'):
            case('right'):
            elementTop = `${e.previousElementSibling.getBoundingClientRect().top}px`
            break;

            case('top'):
            elementTop = `${e.previousElementSibling.getBoundingClientRect().top - e.previousElementSibling.getBoundingClientRect().height - 10}px`;
            break;

            case('bottom'):
            elementTop = `${e.previousElementSibling.getBoundingClientRect().top + e.previousElementSibling.getBoundingClientRect().height}px`;
            break;
        }

        e.style.top = elementTop;
    })
})
