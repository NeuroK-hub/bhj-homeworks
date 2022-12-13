const textarea = document.getElementById('editor');
const text = localStorage.getItem('textarea');

if (text) {
    textarea.value = text;
};

textarea.addEventListener('input', e => {
    localStorage.setItem('textarea', e.currentTarget.value);
    if (textarea.value === '') {
        clearLocalStorage();
    }
});