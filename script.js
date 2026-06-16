// 1. Guardamos en "variables" los elementos que necesitamos controlar
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const sidebar = document.getElementById('sidebar');

// Seleccionamos todos los enlaces que están dentro del menú lateral
const menuLinks = document.querySelectorAll('.menu-links a');

// 2. Cuando el usuario haga clic en la hamburguesa (Abrir)
menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
});

// 3. Cuando el usuario haga clic en la X (Cerrar)
menuClose.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// 4. NUEVA FUNCIÓN: Cerrar el menú automáticamente al tocar cualquier enlace
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});
