// assets/js/animations.js

document.addEventListener('DOMContentLoaded', function() {
    // Verifica se a biblioteca AOS está carregada no objeto window
    // Isso é uma boa prática para evitar erros caso a biblioteca não seja carregada por algum motivo
    if (typeof AOS !== 'undefined') {
        AOS.init({
            // Configurações da biblioteca AOS:
            // Você pode descomentar e ajustar essas opções conforme necessário

            // offset: 120, // (em px) a partir do qual a animação é disparada em relação ao ponto original do elemento
            // delay: 0, // valores de 0 a 3000, com passo de 50ms
            duration: 800, // valores de 0 a 3000, com passo de 50ms - duração da animação
            easing: 'ease-in-out', // tipo de easing padrão para as animações AOS
            once: true, // se a animação deve acontecer apenas uma vez - ao rolar para baixo
            // mirror: false, // se os elementos devem animar ao rolar para cima também (ao sair da tela e voltar)
            // anchorPlacement: 'top-bottom', // define qual posição do elemento na tela em relação à janela dispara a animação

        });
    } else {
        console.warn('AOS (Animate On Scroll) library not loaded.');
    }
});