document.addEventListener("DOMContentLoaded", function() {
    fetch('galeria.hbs')
        .then(response => response.text())
        .then(templateSource => {
            const template = Handlebars.compile(templateSource);
            const html = template(contexto);
            document.getElementById('galeria').innerHTML = html;
        })
        .catch(error => console.error('Error al cargar la plantilla:', error));
});
