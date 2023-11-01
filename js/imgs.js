const imageContainer = document.querySelector('.image-container');
const magnifier = document.querySelector('.magnifier');
const originalImage = document.getElementById('original-image');

imageContainer.addEventListener('mousemove', (e) => {
    const containerRect = imageContainer.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const offsetY = e.clientY - containerRect.top;

    const backgroundX = (offsetX / imageContainer.offsetWidth) * 100;
    const backgroundY = (offsetY / imageContainer.offsetHeight) * 100;

    magnifier.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
    magnifier.style.left = e.clientX - magnifier.offsetWidth / 2 + 'px';
    magnifier.style.top = e.clientY - magnifier.offsetHeight / 2 + 'px';
    magnifier.style.display = 'block';
});

imageContainer.addEventListener('mouseleave', () => {
    magnifier.style.display = 'none';
});