function actualizarTexto() {
    if (window.confirm("¡Se ha actualizado la información!")) {
        const name = document.getElementById("name");
        const title = document.getElementById("title");
        const description = document.getElementById("description");
        name.textContent = "Nicolas Esteban Garnica Herrera";
        title.textContent = "Perfil Profesional Actualizado";
        title.style = "color: red; transition: all 0.5s;";
        description.innerHTML = "Estudiante de Ingeniería de Sistemas - Universidad EAN. <br> Email institucional: ngarnic03766@universidadean.edu.co";
        description.style.fontWeight = "bold";
    }
}