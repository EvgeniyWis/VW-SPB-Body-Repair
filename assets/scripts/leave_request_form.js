/* Объявление глобальных переменных */
const body_repair__leave_request__uploadForm = document.getElementById("body_repair__leave_request__uploadForm");
const body_repair__leave_request__input_image__text = document.getElementById("body_repair__leave_request--input_image--text");
const body_repair__leave_request__input_image_input = document.getElementById("body_repair__leave_request--input_image_input");
const body_repair__leave_request__fileInput = document.getElementById("body_repair__leave_request__fileInput");
const body_repair__leave_request__images = document.getElementById("body_repair__leave_request__images");
const body_repair__leave_request__input_name = document.getElementById("body_repair__leave_request__input_name");
const body_repair__leave_request__input_number = document.getElementById("body_repair__leave_request__input_number");
const body_repair__step__1 = document.getElementById("body_repair__step__1");
const body_repair__step__2 = document.getElementById("body_repair__step__2");
const body_repair__steps_wrapper = document.getElementById("body_repair__steps_wrapper");
const body_repair__step__3 = document.getElementById("body_repair__step__3");
const body_repair__leave_request__button = document.getElementById("body_repair__leave_request--button");
const body_repair__leave_request = document.getElementById("body_repair__leave_request");
const body_repair__steps__progress_bar = document.getElementById("body_repair__steps--progress_bar");


/* Реализация drag-n-drop переноса изображения в форму */
function leave_request__imageLoad(file) {
    const reader = new FileReader();

    reader.onload = function () {
        body_repair__leave_request__input_image__text.textContent = "Изображение успешно загружено!";
        body_repair__leave_request__uploadForm.classList.remove("body_repair__leave_request--input_image--active");

        // Изображение сохраняется на сервер...

        // Добавляю изображение в блок с загруженными изображениями:
        body_repair__leave_request__images.insertAdjacentHTML(`beforeend`,
            `<img class="body_repair__leave_request__image" src="/wp-content/uploads/${file.name}" alt="Изображение, загруженное пользователем">`);

        setTimeout(() => {
            body_repair__leave_request__input_image__text.innerHTML = 'Перетащите фото сюда или <a id="body_repair__leave_request--input_image_input" class="body_repair__leave_request--input_image--choose">выберите</a> из файлов';
            document.getElementById("body_repair__leave_request--input_image_input").addEventListener("click", () => {
                body_repair__leave_request__fileInput.click();
            });
        }, 1500);

        /* Активация 2 шага */
        body_repair__leave_request__input_name.classList.remove("body_repair__leave_request--input--disabled");
        body_repair__leave_request__input_name.disabled = false;
        body_repair__leave_request__input_number.classList.remove("body_repair__leave_request--input--disabled");
        body_repair__leave_request__input_number.disabled = false;
        body_repair__step__1.classList.remove("body_repair__step--active");
        body_repair__step__1.classList.add("body_repair__step--adaptive");
        body_repair__step__2.classList.add("body_repair__step--active");
        body_repair__step__2.classList.add("body_repair__step--adaptive");
        body_repair__steps_wrapper.classList.add("body_repair__steps_wrapper--step_2");
        body_repair__steps__progress_bar.value = body_repair__steps__progress_bar.value + 30;

        /* Активация 3 шага */
        body_repair__leave_request__button.classList.remove("body_repair__leave_request--button--disabled");
        body_repair__leave_request__button.disabled = false;

        body_repair__leave_request__button.addEventListener("click", () => {
            body_repair__steps_wrapper.classList.remove("body_repair__steps_wrapper--step_2");
            body_repair__steps_wrapper.classList.add("body_repair__steps_wrapper--step_3");
            body_repair__step__2.classList.remove("body_repair__step--active");
            body_repair__step__2.classList.add("body_repair__step--step_3--adaptive");
            body_repair__step__3.classList.add("body_repair__step--active");
            body_repair__step__3.classList.add("body_repair__step--step_3--adaptive");
            body_repair__leave_request.classList.add("body_repair__leave_request--disabled");
            body_repair__leave_request.disabled = true;
            body_repair__steps__progress_bar.value = body_repair__steps__progress_bar.value + 40;
        })
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