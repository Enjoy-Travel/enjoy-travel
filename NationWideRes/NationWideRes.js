const regions = [
  {
    name: "전국",
    link: ["/nationwide/nationwide", "/nationwideres/nationwideres"],
    img: "https://cdn-icons-png.flaticon.com/256/4498/4498474.png",
  },
  {
    name: "서울",
    link: ["url.html"],
    img: "../images/local/seoul.jpg",
  },
  {
    name: "경기",
    link: ["url.html"],
    img: "../images/local/gyeonggi.jpg",
  },
  {
    name: "강원",
    link: ["/gangneung/gangneung.html"],
    img: "../images/local/gyeonggi.jpg",
  },
  {
    name: "충북",
    link: ["url.html"],
    img: "../images/local/gyeonggi.jpg",
  },
  {
    name: "충남",
    link: ["url.html"],
    img: "../images/local/chungnam.jpg",
  },
  {
    name: "경북",
    link: ["url.html"],
    img: "../images/local/gyeongbuk.jpg",
  },
  {
    name: "경남",
    link: ["url.html"],
    img: "../images/local/gyeongnam.jpg",
  },
  {
    name: "전북",
    link: ["url.html"],
    img: "../images/local/jeonbuk.jpg",
  },
  {
    name: "전남",
    link: ["url.html"],
    img: "../images/local/jeonnam.jpg",
  },
  {
    name: "제주",
    link: ["/components/placeholdernav/placeholdernav"],
    img: "../images/local/jeju.jpg",
  },
];

let restaurants = [
  {
    img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=050468cc-b2cb-43dc-a77e-92d15699f9e1&mode=progress",
    title: "강릉짬뽕순두부 동화가든",
    area: "강원 강릉시",
    hashtags: ["초당마을", "짬뽕순두부"],
    detail: "/NationWideDetail/NationWideDetail.html",
  },

  {
    img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=e2b133c2-481c-4db9-97ef-be5ea368e939&mode=progress",
    title: "이진상화",
    area: "경기 이천시",
    hashtags: ["베이커리"],
    detail: "/components/placeholder/placeholder.html",
  },
  {
    img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=07b5e82c-ebb7-4cf7-96f4-1e2a5454632f",
    title: "여수당",
    area: "전남 여수시",
    hashtags: ["수제바게트", "쑥아이스크림"],
  },
  {
    img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=abddc74f-02be-43d1-b3d9-1669f3603246",
    title: "모노클제주",
    area: "제주 서귀포시",
    hashtags: ["감성카페", "반려동물"],
  },
  {
    img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=4925c232-d720-40d4-b44f-50503c294720",
    title: "조양방직",
    area: "인천 강화군",
    hashtags: ["레트로", "커플데이트"],
  },
  {
    img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=3860f600-bb5b-4b74-b1bc-4aa2824bdb9e",
    title: "성심당",
    area: "대전 중구",
    hashtags: ["튀김소보로", "베이커리"],
  },
  {
    img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=34bd96ec-6e09-40d7-9c30-da51276a216a",
    title: "다이닝슬로우라이프",
    area: "대구 수성구",
    hashtags: ["양식", "대구맛집"],
  },
  {
    img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=a38117c4-d0c0-4e19-8494-42a3dca48985",
    title: "어반리st",
    area: "경기 화성시",
    hashtags: ["대형베이커리", "이색카페"],
  },
];

let nav = document.getElementById("nav_items");
let restaurantSection = document.querySelector(".restaurant_section");

const navPlace = () => {
  nav.innerHTML = "";
  regions.forEach((region, i) => {
    nav.innerHTML += `
            <div class="nav_inner"  id="item_${i}">
              <a href="${region.link[0]}" class="nav_link">
                <img src="${region.img}" class="nav_item item_${i}" id="nav_img${i}" ></img>
              </a>
              <a href="${region.link}" class="nav_link">
                <label class="nav_title">${region.name}</label>
              </a>
            </div>
          `;
  });
};

const toggleLike = (i) => {
  const isLiked = localStorage.getItem(`content_res${i}`);
  if (isLiked === "liked") {
    localStorage.removeItem(`content_res${i}`);
    document.getElementById(`content_res${i}`).classList.remove("like");
  } else {
    localStorage.setItem(`content_res${i}`, "liked");
    document.getElementById(`content_res${i}`).classList.add("like");
  }
};

const restaurantCard = () => {
  restaurantSection.innerHTML = "";

  restaurants.forEach((item, i) => {
    restaurantSection.innerHTML += `
      <div class="card">
            <img
              src="${item.img}"
              alt=""
            />
            <button class="card_likes"  id="content_res${i}" onclick="toggleLike(${i})">
              <i class="fa-solid fa-heart"></i>
            </button>
  
            <div class="card_text">
              <div>
                <h3>${item.title}</h3>
                <p>${item.area}</p>
              </div>
            <div > 
            ${item.hashtags.map((tag) => `<span>#${tag}</span>`).join("")}</div>
            </div>
             <a href="${
               item.detail
             }" ><i class="fa-solid fa-arrow-right"></i></a>
          </div>
      `;

    const isLiked = localStorage.getItem(`content_res${i}`);
    if (isLiked === "liked") {
      document.getElementById(`content_res${i}`).classList.add("like");
    }
  });
};

const checkLocation = () => {
  const pathName = window.location.pathname;
  regions.forEach((region, i) => {
    if (region.link.some((link) => pathName.includes(link))) {
      document.getElementById(`item_${i}`).classList.add("location_active");
    }
  });
};

window.addEventListener("scroll", function () {
  const topBtn = document.querySelector(".top_btn");
  if (window.scrollY > 250) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

navPlace();
restaurantCard();
checkLocation();
