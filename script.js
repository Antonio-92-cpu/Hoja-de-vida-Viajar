// Habilidades
const skills = [
	 { name: 'Paquete Adobe', level: 95 },
    { name: 'HTML', level: 90 },
    { name: 'Arreglar Ordenadores', level: 86 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 75 },
    { name: 'Astro', level: 72 },
    { name: 'React', level: 70 },
    { name: 'Node.js', level: 65 },
    { name: 'Reflex', level: 60 },
    { name: 'Python', level: 50 },
    { name: 'Otras Tecnologías', level: 45 },
    { name: 'Vue', level: 40 },
    { name: 'Seguridad informática', level: 38 },
    { name: 'Samba', level: 30 },
];

// Renderizar habilidades
const skillsContainer = document.getElementById('skills-container');

skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill';
    skillElement.innerHTML = `
        <p>${skill.name}</p>
        <div class="progress-bar">
            <div class="progress" style="width: ${skill.level}%;"></div>
        </div>
    `;
    skillsContainer.appendChild(skillElement);
});

// Obtener el modal
var modal = document.getElementById("imageModal");

// Obtener la imagen y el elemento modal
var modalImg = document.getElementById("imgModal");
var captionText = document.getElementById("caption");

// Añadir eventos de clic a todas las imágenes con clase cv-image
document.querySelectorAll('.cv-image').forEach(image => {
    image.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en <span> (x), se cierra el modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de la imagen
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
