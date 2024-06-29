
const images = [
    'download.jpg',
    'images.jpg',
    'istockphoto-1324099927-612x612.jpg',
    'download (1).jpg',
    'download (2).jpg'
];

let currentIndex = 0;

function showImage(index) {
    const imageElement = document.getElementById('currentimage');
    imageElement.src = images[index];
}

function previousImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
}
