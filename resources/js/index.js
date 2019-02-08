// * --- WEBPACK IMPORT FILES --- * \\
import '../sass/main.scss';

// -- MODAL IMAGES -- \\

// DOM Elements
const modal = document.querySelector('#modal');
const image = [...document.querySelectorAll('.img-o')]; // converting node-list to array
const modalImg = [...document.querySelectorAll('.img-m')];
const span = document.querySelector('.close');

image.forEach(el => {
    // Event Listener | Open image on click
    el.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = el.src;
});
})

span.addEventListener('click', () => {
    modal.style.display = 'none';
});