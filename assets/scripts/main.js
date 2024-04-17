/* Объявление глобальных переменных */
const navbar__adaptive_menuBurger = document.getElementById("navbar__adaptive_menuBurger");
const navbar__adaptive_menu = document.getElementById("navbar__adaptive_menu");
const navbar__adaptive_menu_cross = document.getElementById("navbar__adaptive_menu_cross");
const popup__background = document.getElementById("popup__background");
const body_repair__leave_request__uploadForm = document.getElementById("body_repair__leave_request__uploadForm");
const body_repair__leave_request__input_image__text = document.getElementById("body_repair__leave_request--input_image--text");
const body_repair__leave_request__input_image_input = document.getElementById("body_repair__leave_request--input_image_input");
const body_repair__leave_request__fileInput = document.getElementById("body_repair__leave_request__fileInput");


/* Открытие и закрытие бургер меню */
navbar__adaptive_menuBurger.addEventListener("click", () => {
    navbar__adaptive_menu.classList.toggle("navbar__adaptive--active");
    popup__background.classList.add("popup__background__active");
})

navbar__adaptive_menu_cross.addEventListener("click", () => {
    navbar__adaptive_menu.classList.remove("navbar__adaptive--active");
    popup__background.classList.remove("popup__background__active");
})


/* Реализация drag-and-drop переноса изображения в форму */
// TODO: исправить баг с добавлением фото при ховере на текст
// TODO: сохранять изображение в папку uploads
// TODO: добавить функционал добавления нескольких изображений
// TODO: перенести код для формы в отдельный js файл
body_repair__leave_request__uploadForm.addEventListener('dragover', (e) => {
    e.preventDefault();
});

body_repair__leave_request__uploadForm.addEventListener('drop', (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file.type.match('image.*')) {
        const reader = new FileReader();

        reader.onload = function () {
            body_repair__leave_request__input_image__text.textContent = "Изображение успешно загружено!"
        }

        reader.readAsDataURL(file);
    }
});

body_repair__leave_request__uploadForm.addEventListener("dragenter", function () {
    body_repair__leave_request__uploadForm.classList.add("body_repair__leave_request--input_image--active")
})

body_repair__leave_request__uploadForm.addEventListener("dragleave", function () {
    body_repair__leave_request__uploadForm.classList.remove("body_repair__leave_request--input_image--active")
})


/* Функционал input`а в форме, который принимает изображения */
body_repair__leave_request__input_image_input.addEventListener("click", () => {
    body_repair__leave_request__fileInput.click();
});

body_repair__leave_request__fileInput.addEventListener('change', () => {
    const file = body_repair__leave_request__fileInput.files[0];

    if (file.type.match('image.*')) {
        const reader = new FileReader();

        reader.onload = function (e) {
            body_repair__leave_request__input_image__text.textContent = "Изображение успешно загружено!"
        }

        reader.readAsDataURL(file);
    }
});