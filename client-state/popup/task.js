const modalPopUp = document.getElementById('subscribe-modal');
const closeButton = document.querySelector('.modal__close_times');

function getCookie(name) {
	const pairs = document.cookie.split('; ');
	const cookie = pairs.find(p => p.startsWith(name + '='));
	return cookie && cookie.substring(name.length + 1);
}

if (getCookie('closePopUp') !== 'true') {
	window.onload = function() {
		modalPopUp.classList.add('modal_active');
	}
}

closeButton.addEventListener('click', (e) => {
	modalPopUp.classList.remove('modal_active');
	document.cookie = "closePopUp=true";
	getCookie('closePopUp');
});