let nextDom = document.getElementById('next');
let previousDom = document.getElementById('previous');
let carouselDom = document.querySelector('.carousel');
let ListItemDom = document.querySelector('.carousel .List');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function() { // Fixed 'oneclick' to 'onclick'
    showSlider('next');
}

previousDom.onclick = function() { // Fixed 'oneclick' to 'onclick'
    showSlider('previous');
}

let timeRunning = 3000; // Duration for which the animation runs
let runTimeout;

function showSlider(type) {
    let ItemSlider = document.querySelectorAll('.carousel .List .Item');
    let ItemThumbnail = document.querySelectorAll('.carousel .thumbnail .Item');

    if (type === 'next') {
        ListItemDom.appendChild(ItemSlider[0]); // Move the first item to the end
        thumbnailDom.appendChild(ItemThumbnail[0]); // Move the first thumbnail to the end
        carouselDom.classList.add('next'); // Add class for animation
    } else {
        let positionLastItem = ItemSlider.length - 1;
        ListItemDom.prepend(ItemSlider[positionLastItem]); // Move the last item to the front
        thumbnailDom.prepend(ItemThumbnail[positionLastItem]); // Move the last thumbnail to the front
        carouselDom.classList.add('previous'); // Add class for animation
    }

    clearTimeout(runTimeout); // Clear any existing timeout
    runTimeout = setTimeout(() => {
        carouselDom.classList.remove('next'); // Remove animation class after timeout
        carouselDom.classList.remove('previous'); // Remove animation class after timeout
    }, timeRunning);
}