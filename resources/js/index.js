// * --- WEBPACK IMPORT FILES --- * \\
import '../sass/main.scss';

// -- MODAL IMAGES -- \\
(() => { // IIFE
    // DOM Elements
    const modal = document.querySelector('#modal');
    const image = [...document.querySelectorAll('.img-o')]; // converting node-list to array
    const modalImg = [...document.querySelectorAll('.img-m')]; // -||-
    const closeBtn = document.querySelector('.close-container');
    
    // - EVENT LISTENERS - | - For each image add click event (image view)
    image.forEach(el => {
            // Event Listener | Open image on click
            el.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = el.src;
        });
    });

    // - EVENT LISTENER - | - Close the image view on button click
    closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
})();

// -- GOOGLE MAPS -- \\
/*
(() => {
    // DOM Element - Map div
    const mapDiv = document.querySelector('.maps');
    window.addEventListener('load', () =>)
    let initMaps = () => {
        map = new google.maps.Map(mapDiv), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        };
    }
})();
*/