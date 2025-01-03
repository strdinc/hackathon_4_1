// Функция для изменения размеров блоков в зависимости от видимой области
function resizeBlocks() {
  // Получаем высоту и ширину видимой области браузера
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  // Логируем текущие размеры видимой области
  console.log(`Viewport dimensions: Width = ${viewportWidth}px, Height = ${viewportHeight}px`);

  // Массив ID блоков
  const blockIds = [
    'first_screen',
    'second_screen',
    'third_screen',
    'fourth_screen',
    'fifth_screen',
    'sixth_screen',
    'seventh_screen'
  ];

  // Обрабатываем каждый блок
  blockIds.forEach(id => {
    const block = document.getElementById(id);
    if (block) {
      // Устанавливаем высоту блока равной высоте viewport
      block.style.height = `${viewportHeight}px`;
      // Устанавливаем ширину блока равной ширине viewport
      block.style.width = `${viewportWidth}px`;

      // Логируем обновленные размеры блока
      console.log(`Block ID: '${id}' - Width: ${viewportWidth}px, Height: ${viewportHeight}px`);
    } else {
      console.warn(`Block with ID '${id}' not found.`);
    }
  });
}

// Вызываем функцию при загрузке страницы
window.addEventListener('load', resizeBlocks);

// Вызываем функцию при изменении размеров окна браузера
window.addEventListener('resize', resizeBlocks);
