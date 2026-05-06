document.addEventListener('DOMContentLoaded', function() {

    /* ===== 1. Главная страница: показ вакансий ===== */
    const vacancyLists = document.querySelectorAll('.vacancy-list');
    if (vacancyLists.length > 0) {
        vacancyLists.forEach(list => list.style.display = 'none');

        const langRadios = document.querySelectorAll('input[name="language"]');
        langRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                vacancyLists.forEach(list => list.style.display = 'none');
                const selectedLang = this.value;
                const targetBlock = document.getElementById('vac-' + selectedLang);
                if (targetBlock) {
                    targetBlock.style.display = 'block';
                }
            });
        });
    }

    /* ===== 2. Кнопки ответов ===== */
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (!answer || !answer.classList.contains('answer')) return;

            const isVisible = answer.classList.contains('visible');
            if (isVisible) {
                answer.classList.remove('visible');
                this.textContent = 'Показать ответ';
                this.classList.remove('active');   // убираем красный
            } else {
                answer.classList.add('visible');
                this.textContent = 'Скрыть ответ';
                this.classList.add('active');      // добавляем красный
            }
        });
    });

});