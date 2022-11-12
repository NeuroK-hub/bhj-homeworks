const modal = document.getElementById('modal_main')
const success = document.getElementById('modal_success')

modal.className = 'modal modal_active'

const close = document.querySelectorAll('.modal__close')
close[0].onclick  = () => modal.classList.remove('modal_active')

const btnSuccess = document.querySelector('.show-success')

btnSuccess.onclick = () => {
    success.classList.add('modal_active')
    modal.classList.remove('modal_active')
}

close[2].onclick  = () => success.classList.remove('modal_active')