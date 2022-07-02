import { galleryItems } from './gallery-items.js';
import * as basicLightbox from 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js';
// Change code below this line

// const galleryItem = galleryItems.map(item =>
//     `<div class="gallery__item">
//     <a class="gallery__link" href=${item.original}>
//       <img
//         class="gallery__image"
//         src=${item.preview}
//         data-source=${item.original}
//         alt=${item.description}
//       />
//     </a>
//   </div>`
//   );

console.log(basicLightbox);

const instance = basicLightbox.create(`<img src="assets/images/image.png" width="800" height="600">`);

instance.show();

// document.querySelector('.gallery').insertAdjacentHTML('afterend', galleryItem.join(''));

// console.log(galleryItem);
