document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.querySelector("#carouselExampleDark");
  const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 3500,
      ride: "carousel",
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const imageBoxes = document.querySelectorAll(".conimg-box");
  const textBoxes = document.querySelectorAll(".content1-text");
  let currentHoveredBox = null;

  imageBoxes.forEach((box, index) => {
      // 마우스 오버 이벤트
      box.addEventListener("mouseover", () => {
          // 다른 박스들 처리
          imageBoxes.forEach((b) => {
              b.classList.remove("hovered");
              b.classList.add("small");
          });

          // 현재 박스 처리
          box.classList.remove("small");
          box.classList.add("hovered");
          currentHoveredBox = box;

          // 해당 텍스트 박스 스타일 조정
          textBoxes.forEach((text, i) => {
              if (i === index) {
                  text.classList.add("plwtext");
                  text.classList.remove("miwtext");
                  // 강제로 리렌더링
                  text.style.width = "520px";
              } else {
                  text.classList.remove("plwtext");
                  text.classList.add("miwtext");
                  text.style.width = "160px";
              }
          });
      });

      // 마우스 리브 이벤트
      box.addEventListener("mouseleave", () => {
          if (currentHoveredBox !== box) {
              box.classList.remove("hovered");
              box.classList.add("small");

              // 모든 텍스트 박스 초기화
              textBoxes.forEach((text) => {
                  text.classList.remove("plwtext");
                  text.classList.add("miwtext");
                  text.style.width = "160px"; // 초기 상태로 복원
              });
          }
      });
  });
});