import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

// Create markup

function createGalleryMarkup(items) {
  return items
    .map(item => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>
    `;
    })
    .join('');
}

// Add markup in DOM

gallery.innerHTML = createGalleryMarkup(galleryItems);

gallery.addEventListener('click', e => {
  // Remove default browser actions
  e.preventDefault();

  // Checking for a image
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  // basicLightbox
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  // Closing by Escape
  gallery.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      instance.close();
    }
  });
});
