const elementsBookControl = document.querySelectorAll('.book__control > a.font-size');
const elementBook = document.getElementById("book");
for (const btnBookControl of elementsBookControl) {
    btnBookControl.onclick = changeSizeFont;
}
function changeSizeFont() {
    activeBookControl(this);

    if (Boolean(this.dataset.size)) {
        switch (this.dataset.size) {
            case 'small':
                elementBook.className = 'book book_fs-small';
                break;
            case 'big':
                elementBook.className = 'book book_fs-big';
                break;

            default:
                elementBook.className = 'book';
        }
    } else {
        elementBook.className = 'book';
    }

    return false;
}
function activeBookControl(elem) {
    for (const btnBookControl of elementsBookControl) {
        btnBookControl.classList.remove('font-size_active');
    }
    elem.classList.add('font-size_active');
}
