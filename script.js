const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.close');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        const img = item.querySelector('img');
        lightboxImg.src = img.src;
        const title = item.querySelector('h3').innerText;
        const description = item.querySelector('p').innerText;
        lightboxCaption.innerHTML = `<strong>${title}</strong><br>${description}`;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});

// Slider functionality
const gallery = document.querySelector('.gallery');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

const updateGalleryPosition = () => {
    const width = galleryItems[0].clientWidth;
    gallery.style.transform = `translateX(${-currentIndex * width}px)`;
};

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
    updateGalleryPosition();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
    updateGalleryPosition();
});

window.addEventListener('resize', updateGalleryPosition);
