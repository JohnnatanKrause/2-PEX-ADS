// Esta função será chamada pelo headerFooterLoad.js após o header.html ser carregado
function initializeMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const menuList = document.getElementById('menu-list');

    if (menuBtn && menuList) {
        menuBtn.addEventListener('click', () => {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
            menuBtn.setAttribute('aria-expanded', !isExpanded);
            menuList.classList.toggle('active');
            document.body.classList.toggle('no-scroll'); // Opcional: para evitar scroll da página com menu aberto
        });

        // Fechar o menu ao clicar em um link (para SPAs ou navegação na mesma página)
        // Para múltiplas páginas, isso é menos crítico, mas bom ter
        menuList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (menuList.classList.contains('active')) {
                    menuBtn.setAttribute('aria-expanded', 'false');
                    menuList.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            });
        });
    } else {
        // Isso ajuda a debugar se os IDs estiverem errados em header.html
        console.warn('Menu button or menu list not found. Check IDs in header.html.');
    }
}

// Importante: Não chame initializeMenu() diretamente aqui.
// Ela será chamada pelo callback em headerFooterLoad.js