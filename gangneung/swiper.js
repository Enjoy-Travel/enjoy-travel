document.addEventListener("DOMContentLoaded", () => {
    const mySwiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: "auto",
        loop: true,
        centeredSlides: true,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        preventClicks: false,
        preventClicksPropagation: false,
    });
});