import { galleryItems } from './gallery-items.js';

const galleryImages = document.querySelector('.gallery');

galleryImages.insertAdjacentHTML('beforeend', createImages(galleryItems));

function createImages(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

galleryImages.addEventListener('click', selectImage);

function onCloseModal(e, instance) {
  if (e.key === 'Escape') instance.close();
}

function selectImage(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') return;

  const selectedImg = e.target.dataset.source;

  const originalImg = basicLightbox.create(`<img src=${selectedImg}>`, {
    onShow: (instance) => {
      document.onkeyup = (e) => {
        onCloseModal(e, instance);
      };
    },
    onClose: () => (document.onkeyup = null),
  });

  originalImg.show();
}
