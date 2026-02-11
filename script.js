document.addEventListener('DOMContentLoaded', function() {
    
    // Находим кнопку и блок с услугами
    const toggleBtn = document.getElementById('servicesToggle');
    const servicesGrid = document.getElementById('servicesGrid');

    // Если элементов нет на странице (например, другая страница), скрипт не сломается
    if (toggleBtn && servicesGrid) {
        
        toggleBtn.addEventListener('click', function() {
            // Переключаем класс hidden (показать/скрыть)
            if (servicesGrid.style.display === "none" || servicesGrid.classList.contains('hidden')) {
                servicesGrid.classList.remove('hidden');
                servicesGrid.style.display = "grid"; // Возвращаем Grid-отображение
                toggleBtn.textContent = "Hide Services ▲";
            } else {
                servicesGrid.classList.add('hidden');
                servicesGrid.style.display = "none";
                toggleBtn.textContent = "Show Services ▼";
            }
        });
    }

});