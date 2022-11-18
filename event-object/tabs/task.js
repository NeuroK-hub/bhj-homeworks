const tabs = Array.from(document.getElementsByClassName('tab'));
const contents = Array.from(document.getElementsByClassName('tab__content'));

for (let item of tabs) {
    item.addEventListener('click', navigationTabs);
}

function navigationTabs() {
    if (this.className === 'tab tab_active') {
        return false;
    }

    let thisParent = this.closest('.tabs');

    thisParent.querySelector('.tab_active').className = 'tab';
    this.className = 'tab tab_active';
    thisParent.querySelector('.tab__content_active').className = 'tab__content';
    contents[tabs.indexOf(this)].className = 'tab__content tab__content_active';
}