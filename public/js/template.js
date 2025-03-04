document.addEventListener("DOMContentLoaded", () => {
    nunjucks.configure('/public/templates', { autoescape: true });

    fetch('/public/data/links.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('template-container').innerHTML = nunjucks.render('template.html', data);
        })
        .catch(error => console.error("Error loading template or data:", error));
});