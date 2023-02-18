import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1.Стоворюємо розмітку i рндеримо її в дів
const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createImageCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createImageCardsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src ="${preview}"
    data-source ="${original}"
    alt ="${description}"/>
    </a>
    </div>
    `;
    })
    .join("");
}
//  ---------------------------------------

// 2.Реалізація делегування на div.gallery і отримання url великого зображення.

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  // Відміна завантаження за замовчуванням
  evt.preventDefault();

  // Перевірка, що клік на зображенні
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  // додаю в змінну подію з атрибутом data-source
  const selectedImg = evt.target.getAttribute("data-source");

  // ------------------------------------------------
  // створення модального вікна з вибраним зображенням
  const modalWindowOpen = basicLightbox.create(
    `<img src="${selectedImg}" width="800" height="600">`,
    // налаштування бібліотеки
    {
      // додає слухача подій
      onShow: () => {
        document.addEventListener("keydown", onModalClose);
      },
      onClose: () => {
        // знімає слухача подій
        document.addEventListener("keydown", onModalClose);
      },
    }
  );

  modalWindowOpen.show();

  function onModalClose(evt) {
    if (evt.key === "Escape") {
      modalWindowOpen.close();
    }
  }
}
