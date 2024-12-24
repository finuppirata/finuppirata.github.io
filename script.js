function changeContent(content) {
    // Resalta el botón activo
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.classList.remove('active');
    });

    const activeButton = document.querySelector(`[onclick="changeContent('${content}')"]`);
    activeButton.classList.add('active');

    // Cambiar contenido según el botón seleccionado
    const mainTitle = document.getElementById('mainTitle');
    const subTitle = document.getElementById('subTitle');
    const featuresList = document.getElementById('featuresList');
    const journeyContent = document.getElementById('journeyContent');
    const instructorsContent = document.getElementById('instructorsContent');

    // Ocultar ambos contenidos al inicio
    featuresList.style.display = 'none';
    journeyContent.style.display = 'none';
    instructorsContent.style.display = 'none';

    // Mostrar contenido específico según el botón seleccionado
    if (content === 'whatIncludes') {
        mainTitle.textContent = 'Hacemos accesible la Educación financiera';
        subTitle.textContent = 'Acceso ilimitado a TODO el contenido de Finup+';
        featuresList.style.display = 'block';
    } else if (content === 'startJourney') {
        mainTitle.textContent = 'Hacemos accesible la Educación financiera';
        subTitle.textContent = 'Un viaje es una ruta de aprendizaje';
        journeyContent.style.display = 'block';
    } else if (content === 'instructors') {
        mainTitle.textContent = 'Hacemos accesible la Educación financiera';
        subTitle.textContent = 'Los especialistas e influencers que te gustan, te enseñan en simple.';
        instructorsContent.style.display = 'block';
    }
}
