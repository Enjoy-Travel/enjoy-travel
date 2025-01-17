  document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.querySelector('#carouselExampleDark');
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 3500, // 자동 전환 시간 (1초)
      ride: 'carousel', // 자동 재생
    });
  });
