document.addEventListener("DOMContentLoaded", function() {
    console.log('Скрипт отработал корректно')

    //Объявляем переменную welcоmeButtonModal и сохраняем в нее кнопку c классом button
    const welcomeButtonModal = document.querySelector(".button");
    //объявляем переменную modalApplication и сохраняем в нее модальное окно, которое хотим увидеть
    const modalApplication = document.querySelector(".applications");
    //Объявляем переменную closeModalButton и сохраняем в нее кнопку c классом application__close
    const closeModalButton = document.querySelector(".application__close");

    //Если есть такая кнопка и модальное окно
    if (welcomeButtonModal && modalApplication) {
        //Для кнопки «sign up» добавляем обработчик события клика по этой кнопке:
        welcomeButtonModal.addEventListener("click", function(event) {
        // удаляем атрибут hidden у модального окна modalApplication и модальное окно становится видимым
        modalApplication.removeAttribute("hidden");
        });
    }

    // добавляем обработчик события при клике вне области формы. 
    window.addEventListener("click", function(event) {
        // проверяем, был ли клик на фоне модального окна
        if (event.target === modalApplication) {
            //если условие выполняется, добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
            modalApplication.setAttribute("hidden", true);
        }
    });

    //Для кнопки «Закрыть» добавляем обработчик события клика по этой кнопке:
    closeModalButton.addEventListener("click", function(event)  {
    // Добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
    modalApplication.setAttribute("hidden", true);
    });

});
