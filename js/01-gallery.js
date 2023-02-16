import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// 2.Реалізація делегування на div.gallery і отримання url великого зображення.
// 3.Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// 4.Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5.Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

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
    src = "${preview}"
    alt = "${description}"/>
    </a>
    </div>
    `;
    })
    .join("");
}
// console.log(imagesMarkup);
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
  console.log(evt.target);
}
// ----------------------------------------------
