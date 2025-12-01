// Funcionalidades adicionales para la presentación

// Inicializar cuando Reveal.js esté listo
Reveal.addEventListener('ready', function(event) {
    console.log('Presentación cargada correctamente');
});

// Navegación por teclado adicional
document.addEventListener('keydown', function(event) {
    // 'I' para ir al índice
    if (event.key === 'i' || event.key === 'I') {
        Reveal.slide(1);
    }
});

// Actualizar estado activo en tabla de contenidos
Reveal.addEventListener('slidechanged', function(event) {
    updateActiveTOC(event.indexh);
});

function updateActiveTOC(slideIndex) {
    const tocItems = document.querySelectorAll('.toc-item');
    tocItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index + 2 === slideIndex) {
            item.classList.add('active');
            item.style.background = 'rgba(76, 175, 80, 0.3)';
            item.style.borderColor = '#4CAF50';
        } else {
            item.style.background = 'rgba(255, 255, 255, 0.1)';
            item.style.borderColor = 'transparent';
        }
    });
}