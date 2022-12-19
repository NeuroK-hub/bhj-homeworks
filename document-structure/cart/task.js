const productQuantitiValueArray = Array.from(document.querySelectorAll('.product__quantity-value'));
const productsArray = Array.from(document.querySelectorAll('.product'));
const cartProducts = document.querySelector('.cart__products')
const ImageClone = document.querySelector('.image_clone');

productQuantitiValueArray.forEach((e) => {
    e.previousElementSibling.addEventListener('click', () => {
        if (e.textContent > 1) {
            e.textContent--;
        }
    });

    e.nextElementSibling.addEventListener('click', () => {
        e.textContent++;
    })
})

productsArray.forEach((e) => {
    e.querySelector('.product__add').addEventListener('click', () => {
        let productsInCartArray = Array.from(document.querySelectorAll('.cart__product'));
        let isInTheCart = false;

        productsInCartArray.forEach((element) => {
            if (element.dataset.id === e.dataset.id) {
                element.querySelector('.cart__product-count').textContent = (+element.querySelector('.cart__product-count').textContent + +e.querySelector('.product__quantity-value').textContent) + '';
                isInTheCart = true;
            }
        });

        if (!isInTheCart) {
            cartProducts.insertAdjacentHTML('beforeEnd',
                `<div class="cart__product" data-id="${e.dataset.id}">
                    <img class="cart__product-image" src="${e.querySelector('.product__image').src}">
                    <div class="cart__product-count">${e.querySelector('.product__quantity-value').textContent}</div>
                    <div class="remove_product">Удалить товар</div>
                </div>`)

            document.querySelector('.cart').classList.remove('hide');

            productsInCartArray = Array.from(document.querySelectorAll('.cart__product'));

            cartProducts.lastElementChild.addEventListener('click', () => {
                productsInCartArray.forEach((el) => {
                    if (el.dataset.id === e.dataset.id) {
                        el.remove();
                    }
                })

                if (!cartProducts.lastElementChild) {
                    document.querySelector('.cart').classList.add('hide');
                }
            })
        }

        ImageClone.classList.remove('hide');
        ImageClone.src = e.querySelector('.product__image').src;

        let currentTop = e.querySelector('.product__image').offsetTop;
        let currentLeft = e.querySelector('.product__image').offsetLeft;

        let endTop = cartProducts.querySelector(`[data-id="${e.dataset.id}"]`).getBoundingClientRect().top;
        let endLeft = cartProducts.querySelector(`[data-id="${e.dataset.id}"]`).getBoundingClientRect().left;

        let counter = 0;

        ImageClone.setAttribute('style', `top: ${currentTop}px; left: ${currentLeft}px;`);

        let deviderTop = (currentTop - endTop) / 10;
        let deviderLeft = (endLeft - currentLeft) / 10;

        let intervalId = setInterval(() => {
            counter++;

            if (counter < 10) {
                currentTop -= deviderTop;
                currentLeft += deviderLeft;
                ImageClone.setAttribute('style', `top: ${currentTop}px; left: ${currentLeft}px;`);
            } else {
                clearInterval(intervalId);
                ImageClone.classList.add('hide');
                counter = 0;
            }
        }, 100)

    })
})

window.addEventListener('beforeunload', () => {
    localStorage.setItem('cart', cartProducts.innerHTML);
})

window.addEventListener('load', () => {
    if (localStorage.getItem('cart')) {
        cartProducts.innerHTML = localStorage.getItem('cart');
        document.querySelector('.cart').classList.remove('hide');

        console.log(Array.from(document.querySelectorAll('.cart__product')))

        Array.from(document.querySelectorAll('.cart__product')).forEach((e) => {
            e.querySelector('.remove_product').addEventListener('click', () => {
                cartProducts.querySelector(`[data-id="${e.dataset.id}"]`).remove();
            })
        })
    }
})