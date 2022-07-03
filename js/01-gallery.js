import { galleryItems } from "./gallery-items.js";

const galleryImages = document.querySelector(".gallery");
const galleryMarkup = createImages(galleryItems);

galleryImages.insertAdjacentHTML("beforeend", galleryMarkup);

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
    .join("");
}

galleryImages.addEventListener("click", selectImage);

function selectImage(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") return;

  const selectedImg = e.target.dataset.source;

  const originalImg = basicLightbox.create(`<img src=${selectedImg}>`);

  originalImg.show();

  galleryImages.addEventListener("keydown", (e) => e.key === 'Escape' ? originalImg.close() : false);
}