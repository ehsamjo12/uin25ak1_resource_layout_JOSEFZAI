
const buttons = document.querySelectorAll('nav button');
const resourcesContainer = document.getElementById('resources-container');

// Funksjon for å vise ressurser
function displayResources(category) {
    resourcesContainer.innerHTML = '';

    const filteredResources = resources.filter(resource => resource.category === category);

    if (filteredResources.length > 0) {
        filteredResources.forEach(resource => {
           
            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = category;
            resourcesContainer.appendChild(categoryTitle);

            // Opprett beskrivelse
            const categoryText = document.createElement('p');
            categoryText.textContent = resource.text;
            resourcesContainer.appendChild(categoryText);

            // Opprett liste for kilder
            const ul = document.createElement('ul');
            resource.sources.map(source => {
                const li = document.createElement('li');
                const link = document.createElement('a');
                link.href = source.url;
                link.textContent = source.title;
                li.appendChild(link);
                ul.appendChild(li);
            });
            resourcesContainer.appendChild(ul);
        });
    } else {
        resourcesContainer.innerHTML = '<p>Ingen ressurser tilgjengelig for denne kategorien.</p>';
    }
}

// Legg til event listeners på knappene
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const category = event.target.getAttribute('data-category');
        displayResources(category);

        // Oppdater aktiv knapp
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    });
});

// Initial visning (HTML-kategorien vises først)
displayResources('HTML');
