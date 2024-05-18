const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    effect: 'coverflow',
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});