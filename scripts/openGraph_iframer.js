document.addEventListener('DOMContentLoaded', async () => {
    const url = 'https://github.com/cris-mur/basicapi';  // Reemplaza esta URL con la URL específica que deseas usar
    await renderOGImage(url);
});

async function renderOGImage(url, idOfContainer = "ogContainer") {
    try {
        const response = await fetch(url);
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const metaTag = doc.querySelector('meta[property="og:image"]');
        const imageUrl = metaTag ? metaTag.getAttribute('content') : null;

        if (imageUrl) {
            document.getElementById(idOfContainer).innerHTML = `<img src="${imageUrl}" alt="Open Graph Image" style="max-width: 100%;">`;
        } else {
            document.getElementById(idOfContainer).innerText = 'No se encontró ninguna imagen Open Graph.';
        }
    } catch (error) {
        console.error('Error al obtener la imagen Open Graph:', error);
        document.getElementById(idOfContainer).innerText = 'Error al obtener la imagen Open Graph.';
    }

}