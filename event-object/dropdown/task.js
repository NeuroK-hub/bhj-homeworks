const button = Array.from(document.getElementsByClassName('dropdown__value'))
const dropitem = Array.from(document.getElementsByClassName('dropdown__link'))

for (let item of button) {
    item.addEventListener('click', dropdown);
}

for (let item of dropitem) {
    item.addEventListener('click', oneClickItem)
}

function dropdown() {
    this.nextElementSibling.className === 'dropdown__list' ? this.nextElementSibling.className = 'dropdown__list dropdown__list_active' : this.nextElementSibling.className = 'dropdown__list';
}

function oneClickItem(event) {
    this.closest('ul').className = 'dropdown__list';
    this.closest('.dropdown').querySelector('.dropdown__value').textContent = this.textContent;
    event.preventDefault();

}