let showBtn = document.getElementById("showPhotosBtn");
let gallery = document.getElementById("gallery");
let title = document.getElementById("title");

showBtn.addEventListener("click", function() {
    // Проверяем, скрыты ли сейчас фотографии
    if (gallery.style.display === "none" || gallery.style.display === "") {
        gallery.style.display = "flex"; // Показываем все фото сразу
        showBtn.textContent = "Скрыть фотки";
        title.textContent = "Наши лучшие моменты!";
    } else {
        gallery.style.display = "none"; // Прячем обратно при повторном нажатии
        showBtn.textContent = "Открыть наши фотки";
        title.textContent = "С Днем Рождения, брат!";
    }
});
