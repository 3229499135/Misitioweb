/* const imageContainer = document.querySelector('.image-container');
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
}); */


const contenedor = document.querySelector('.imagen-contenedor');
const lupa = document.getElementById('lupa');
const imagenPrincipal = document.getElementById('imagenPrincipal');

contenedor.addEventListener('mousemove', (e) => {
  const rect = contenedor.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const lupaSize = 150;
  const offsetX = x - lupaSize / 2;
  const offsetY = y - lupaSize / 2;

  lupa.style.left = offsetX + 'px';
  lupa.style.top = offsetY + 'px';
  lupa.style.backgroundPosition = `-${offsetX * 2}px -${offsetY * 2}px`;

  lupa.style.display = 'block';
});

contenedor.addEventListener('mouseleave', () => {
  lupa.style.display = 'none';
});

contenedor.addEventListener('click', () => {
  lupa.style.display = (lupa.style.display === 'none') ? 'block' : 'none';
});
