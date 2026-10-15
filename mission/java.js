
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let isDark = selectElem.value === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    logo.src = isDark ? 'images/byui-logo-white.png' : 'images/byui-logo-blue.webp';
}
