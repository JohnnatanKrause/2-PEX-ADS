// assets/js/script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll para links com hash (#)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const hrefAttribute = this.getAttribute('href');
            // Garante que não é apenas um hash vazio e que o elemento existe
            if (hrefAttribute.length > 1 && document.querySelector(hrefAttribute)) {
                e.preventDefault();
                document.querySelector(hrefAttribute).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Exemplo: Marcar link ativo na navegação (se necessário)
    // Isso é mais complexo para múltiplas páginas e pode exigir mais lógica
    // para determinar a página atual. Para uma SPA seria mais direto.
    // Para um site multi-páginas simples, pode-se fazer com CSS (se os links mudam)
    // ou um script simples como este:
    const navLinks = document.querySelectorAll('#menu-list a');
    const currentPath = window.location.pathname.split("/").pop(); // Pega o nome do arquivo atual

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split("/").pop();
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active-link'); // Supondo que você tem uma classe CSS .active-link
        }
    });
});