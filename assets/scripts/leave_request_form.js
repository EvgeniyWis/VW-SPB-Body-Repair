/* Объявление глобальных переменных */
const body_repair__leave_request__uploadForm = document.getElementById("body_repair__leave_request__uploadForm");
const body_repair__leave_request__input_image__text = document.getElementById("body_repair__leave_request--input_image--text");
const body_repair__leave_request__input_image_input = document.getElementById("body_repair__leave_request--input_image_input");
const body_repair__leave_request__fileInput = document.getElementById("body_repair__leave_request__fileInput");
const body_repair__leave_request__images = document.getElementById("body_repair__leave_request__images");

/* Реализация drag-n-drop переноса изображения в форму */
function leave_request__imageLoad(file) {
    const reader = new FileReader();

    reader.onload = function () {
        body_repair__leave_request__input_image__text.textContent = "Изображение успешно загружено!";
        body_repair__leave_request__uploadForm.classList.remove("body_repair__leave_request--input_image--active");

        // Изображение сохраняется на сервер...

        // Добавляю изображение в блок с загруженными изображениями:
        body_repair__leave_request__images.insertAdjacentHTML(`beforeend`,
            `<img class="body_repair__leave_request__image" src="./uploads/${file.name}" alt="Изображение, загруженное пользователем">`);

        setTimeout(() => {
            body_repair__leave_request__input_image__text.innerHTML = 'Перетащите фото сюда или <a id="body_repair__leave_request--input_image_input" class="body_repair__leave_request--input_image--choose">выберите</a> из файлов';
            document.getElementById("body_repair__leave_request--input_image_input").addEventListener("click", () => {
                body_repair__leave_request__fileInput.click();
            });
        }, 1500);
    }

    reader.readAsDataURL(file);
}


body_repair__leave_request__uploadForm.addEventListener('dragover', (e) => {
    e.preventDefault();
});

body_repair__leave_request__uploadForm.addEventListener('drop', (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file.type.match('image.*')) {
        leave_request__imageLoad(file);
    }
});

body_repair__leave_request__uploadForm.addEventListener("dragenter", function () {
    body_repair__leave_request__uploadForm.classList.add("body_repair__leave_request--input_image--active");
    document.getElementById("body_repair__leave_request--input_image_input").classList.add("body_repair__leave_request--input_image--choose--drop");
})

body_repair__leave_request__uploadForm.addEventListener("dragleave", function () {
    body_repair__leave_request__uploadForm.classList.remove("body_repair__leave_request--input_image--active");
    document.getElementById("body_repair__leave_request--input_image_input").classList.remove("body_repair__leave_request--input_image--choose--drop");
})


/* Функционал input`а в форме, который принимает изображения */
body_repair__leave_request__input_image_input.addEventListener("click", () => {
    body_repair__leave_request__fileInput.click();
});

body_repair__leave_request__fileInput.addEventListener('change', () => {
    const file = body_repair__leave_request__fileInput.files[0];

    if (file.type.match('image.*')) {
        leave_request__imageLoad(file);
    }
});