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
    src ="${preview}"
    data-source ="${original}"
    alt ="${description}"/>
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

  // додаю в змінну подію з атрибутом data-source
  const selectedImg = evt.target.getAttribute("data-source");

  // ------------------------------------------------
  const template = basicLightbox.create(`
    <img src="${selectedImg}" width="800" height="600">
`);

  template.show();
  console.log(selectedImg);
  // console.log(template);

  // ------------------------------------------------

  // створення модального вікна з вибраним зображенням
  // const modalWindowOpen = basicLightbox.create(
  //   `<img src="${selectedImg}" width="800" height="600">`,
  //   {
  //     onShow: () => {
  //       document.addEventListener("keydown", onModalClose);
  //     },
  //     onClose: () => {
  //       document.addEventListener("keydown", onModalClose);
  //     },
  //   }
  // );

  // modalWindowOpen.show();
  // console.log(selectedImg);
  // console.log(modalWindowOpen);

  // function onModalClose(evt) {
  //   if (evt.key === "Escape") {
  //     modalWindowOpen.close();
  //   }
  // }

  // console.log(evt.target);
}
// ----------------------------------------------
// Додавання нового класу, в задачі не треба
// const imageEl = evt.target;
// imageEl.classList.add("new-class");
