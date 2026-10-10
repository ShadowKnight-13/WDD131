const menuButton = document.querySelector('#menu-button');
const siteNav = document.querySelector('#site-nav');

menuButton.setAttribute('aria-expanded', 'false');
menuButton.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', open);
});

const modal = document.querySelector('#image-modal');
const modalImg = modal.querySelector('img');
const closeButton = modal.querySelector('#modal-close');

function openModal(img) {
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modal.classList.add('open');
    closeButton.focus();
}

function closeModal() {
    modal.classList.remove('open');
    modalImg.removeAttribute('src');
}

document.querySelector('.gallery').addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') openModal(event.target);
});

closeButton.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
});
