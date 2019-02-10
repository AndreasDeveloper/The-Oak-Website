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
(() => {
    let map = new GMaps({
        div: '.maps',
        lat: 38.7314786,
        lng: -9.05,
        zoom: 12
    });
    // Adding Marker (POI)
    map.addMarker({
        lat: 38.7287516,
        lng: -9.1428179,
        title: 'Washington D.C.',
          infoWindow: {
            content: '<p>Our Restaurant</p>'
          }
      });
})();
