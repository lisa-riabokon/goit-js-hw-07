import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

//  1.Стоворюємо розмітку i рндеримо її в дів
const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createImageCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createImageCardsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img 
  class="gallery__image" 
  src="${preview}"
  alt="${description}"
  title="${description}" />
</a>
    `;
    })
    .join("");
}
//  ---------------------------------------

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  // Відміна завантаження за замовчуванням
  evt.preventDefault();

  // Перевірка, що клік на зображенні
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  //   const selectedImg = evt.target.getAttribute("alt");
  //   console.log(selectedImg);
}

// Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.
new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionDelay: 250,
});
