// Función para cambiar los textos en el footer en dispositivos móviles
function changeFooterText() {
    const isMobile = window.innerWidth <= 768; // Verifica si el tamaño de pantalla es menor o igual a 768px
    const footerLinks = document.querySelectorAll('footer a');

    if (isMobile) {
        // Cambiar los textos de los enlaces en modo móvil
        footerLinks[1].textContent = 'Política';
        footerLinks[2].textContent = 'Acuerdo';
        footerLinks[3].textContent = 'Acerca de';
        footerLinks[4].textContent = 'Ayuda';
    } else {
        // Restaurar los textos originales si no está en móvil
        footerLinks[1].textContent = 'Política de privacidad';
        footerLinks[2].textContent = 'Acuerdo de suscripción';
        footerLinks[3].textContent = 'Acerca de Finup';
        footerLinks[4].textContent = 'Ayuda';
    }
}

// Llamar a la función cuando se cargue la página y cuando se redimensione la ventana
window.addEventListener('DOMContentLoaded', changeFooterText);
window.addEventListener('resize', changeFooterText);
