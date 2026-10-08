
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    
    console.log(e.target);
    console.log("current target:", e.currentTarget);

    const imgClicked=e.target;
    const filename = imgClicked.getAttribute('src');
    const alt=imgClicked.getAttribute('alt');

    const largeImg = filename.replace('sm','full');

    modalImage.setAttribute('src', largeImg);
    modalImage.setAttribute('alt', alt);
    
    modal.showModal();

    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          