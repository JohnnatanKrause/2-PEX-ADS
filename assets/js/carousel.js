document.addEventListener('DOMContentLoaded', function () {
    const serviceSwiperElement = document.querySelector('.service-swiper');

    if (serviceSwiperElement) {
        console.log("Iniciando Swiper.js..."); // Confirma se o código está rodando
        // Lista com 35 imagens
        const imagens = [
            "assets/img/carousel/1.jpg",
            "assets/img/carousel/2.jpg",
            "assets/img/carousel/3.jpg",
            "assets/img/carousel/4.jpg",
            "assets/img/carousel/5.jpg",
            "assets/img/carousel/6.jpg",
            "assets/img/carousel/7.jpg",
            "assets/img/carousel/8.jpg",
            "assets/img/carousel/9.jpg",
            "assets/img/carousel/10.jpg",
            "assets/img/carousel/11.jpg",
            "assets/img/carousel/12.jpg",
            "assets/img/carousel/13.jpg",
            "assets/img/carousel/14.jpg",
            "assets/img/carousel/15.jpg",
            "assets/img/carousel/16.jpg",
            "assets/img/carousel/17.jpg",
            "assets/img/carousel/18.jpg",
            "assets/img/carousel/19.jpg",
            "assets/img/carousel/20.jpg",
            "assets/img/carousel/21.jpg",
            "assets/img/carousel/22.jpg",
            "assets/img/carousel/23.jpg",
            "assets/img/carousel/24.jpg",
            "assets/img/carousel/25.jpg",
            "assets/img/carousel/26.jpg",
            "assets/img/carousel/27.jpg",
            "assets/img/carousel/28.jpg",
            "assets/img/carousel/29.jpg",
            "assets/img/carousel/30.jpg",
            "assets/img/carousel/31.jpg",
            "assets/img/carousel/32.jpg",
            "assets/img/carousel/33.jpg",
            "assets/img/carousel/34.jpg",
            "assets/img/carousel/35.jpg",
            "assets/img/carousel/36.jpg",
            "assets/img/carousel/37.jpg",
            "assets/img/carousel/38.jpg",
        ];

        const swiperWrapper = document.querySelector('.service-swiper .swiper-wrapper');

        // Adiciona as imagens dinamicamente ao carrossel
        imagens.forEach(src => {
            let slide = document.createElement("div");
            slide.classList.add("swiper-slide");
            slide.innerHTML = `<img src="${src}" alt="Serviço">`;
            swiperWrapper.appendChild(slide);
        });

        // Inicializa o Swiper.js
        const serviceSwiper = new Swiper('.service-swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
        delay: 7000, // Tempo de transição entre imagens 
        disableOnInteraction: false // Permite que continue após interação manual
    },
            breakpoints: {
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 1, spaceBetween: 30 },
                1200: { slidesPerView: 1, spaceBetween: 40 },
            }
        });
    }
});
