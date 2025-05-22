document.addEventListener('DOMContentLoaded', function() {
    function loadHTML(filePath, placeholderId, callback) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Could not load ${filePath}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                const placeholder = document.getElementById(placeholderId);
                if (placeholder) {
                    placeholder.innerHTML = data;
                    if (callback) callback(); // Executa callback após carregar o HTML
                } else {
                    console.warn(`Placeholder with ID '${placeholderId}' not found.`);
                }
            })
            .catch(error => console.error('Error loading HTML:', error));
    }

    // Carregar Cabeçalho
    // O callback aqui é para garantir que o script do menu seja inicializado DEPOIS que o header for carregado
    loadHTML('header.html', 'header-placeholder', function() {
        // Inicializa o menu DEPOIS que o header.html for carregado
        if (typeof initializeMenu === 'function') {
            initializeMenu();
        } else {
            console.warn('initializeMenu function not found. Make sure menu.js is loaded and defines it.');
        }
    });

    // Carregar Rodapé
    loadHTML('footer.html', 'footer-placeholder', function() {
        // Atualiza o ano no rodapé
        const currentYearSpan = document.getElementById('current-year');
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    });
});