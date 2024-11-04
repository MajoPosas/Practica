document.addEventListener("DOMContentLoaded", function() {
    fetch('deportes.hbs')
        .then(response => response.text())
        .then(templateSource => {
            const template = Handlebars.compile(templateSource);
            const html = template({ deportes });
            document.getElementById('tablaDeportes').innerHTML = html;
        })
        .catch(error => console.error('Error al cargar la plantilla:', error));
});
