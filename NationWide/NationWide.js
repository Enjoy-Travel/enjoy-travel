const regions = [
  {
    name: "전국",
    link: "/NationWide/NationWide.html",
    img: "https://cdn-icons-png.flaticon.com/256/4498/4498474.png",
  },
  {
    name: "서울",
    link: "/Seoul/Seoul.html",
    img: "../images/local/seoul.jpg",
  },
  {
    name: "경기",
    link: "/Gyeonggi/Gyeonggi.html",
    img: "../images/local/gyeonggi.jpg",
  },
  {
    name: "강원",
    link: "/Gangwon.html",
    img: "../images/local/gyeonggi.jpg",
  },
  {
    name: "충북",
    link: "/Chungbuk.html",
    img: "../images/local/gyeonggi.jpg",
  },
  {
    name: "충남",
    link: "/Chungnam.html",
    img: "../images/local/chungnam.jpg",
  },
  {
    name: "경북",
    link: "/Gyeongbuk.html",
    img: "../images/local/gyeongbuk.jpg",
  },
  {
    name: "경남",
    link: "/Gyeongnam.html",
    img: "../images/local/gyeongnam.jpg",
  },
  {
    name: "전북",
    link: "/Jeonbuk.html",
    img: "../images/local/jeonbuk.jpg",
  },
  {
    name: "전남",
    link: "/Jeonnam.html",
    img: "../images/local/jeonnam.jpg",
  },
  {
    name: "제주",
    link: "/Jeju/Jeju.html",
    img: "../images/local/jeju.jpg",
  },
];

let nav = document.getElementById("nav_items");
let currentLocation = window.location.href;

const navPlace = () => {
  nav.innerHTML = "";
  regions.forEach((region, i) => {
    nav.innerHTML += `
      <div class="nav_inner"  id="item_${i}">
        <a href="${region.link}" class="nav_link">
          <img src="${region.img}" class="nav_item item_${i}" id="nav_img${i}" ></img>
        </a>
        <a href="${region.link}" class="nav_link">
          <label class="nav_title">${region.name}</label>
        </a>
      </div>
    `;
  });
};

let cardSection = document.querySelector(".card_section");

let cards = [
  {
    img: "https://i.namu.wiki/i/S6A1BazT7gUkz7BD8p3LEop0p5cTCobCH62DcLfWjNq8SzOtFKVnol2Yc0x9wDK9XG_u29aYYDzkMb_uroeq3w.webp",
    title: "롯데월드타워",
    area: "서울특별시",
    hashtags: ["전망대", "연인"],
  },

  {
    img: "https://i.namu.wiki/i/KJ42M2qPSn4OB9mVo2WL2JerLzOiwTL9VaLkA_3CsaubW5pUA6wUlSK2UDeT3bI0cRsStV5r7a5sXq3Eo15czA.webp",
    title: "석촌호수",
    area: "서울특별시",
    hashtags: ["데이트", "연인"],
  },
  {
    img: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202310/12/58cc2a55-ef6d-4ccb-b2aa-b13ce9cfedcc.jpg",
    title: "송도 센트럴파크",
    area: "인천광역시",
    hashtags: ["야경", "데이트"],
  },
  {
    img: "https://newsroom.posco.com/kr/wp-content/uploads/2021/12/1203_posco_space_03.png",
    title: "스페이스워크 ",
    area: "경북 포항시",
    hashtags: ["스카이워크", "우주"],
  },
  {
    img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=4ca190d5-05dc-45bd-a659-f182ad8b145e",
    title: "소수서원 ",
    area: "경북 영주시",
    hashtags: ["유네스코 세계유산"],
  },
];

const toggleLike = (i) => {
  const isLiked = localStorage.getItem(`card_${i}`);
  if (isLiked === "liked") {
    localStorage.removeItem(`card_${i}`);
    document.getElementById(`card_${i}`).classList.remove("like");
  } else {
    localStorage.setItem(`card_${i}`, "liked");
    document.getElementById(`card_${i}`).classList.add("like");
  }
};

const placeCard = () => {
  cardSection.innerHTML = "";

  cards.forEach((card, i) => {
    cardSection.innerHTML += `
    <div class="card">
          <img
            src="${card.img}"
            alt=""
          />
          <button class="card_likes"  id="card_${i}" onclick="toggleLike(${i})">
            <i class="fa-solid fa-heart"></i>
          </button>

          <div class="card_text">
            <div>
              <h3>${card.title}</h3>
              <p>${card.area}</p>
            </div>
          <div class="card_tags"> 
          ${card.hashtags.map((tag) => `<span>#${tag}</span>`).join("")}</div>
          </div>
        </div>
    `;

    const isLiked = localStorage.getItem(`card_${i}`);
    if (isLiked === "liked") {
      document.getElementById(`card_${i}`).classList.add("like");
    }
  });
};

const checkLocation = () => {
  regions.forEach((region, i) => {
    if (currentLocation.includes(region.link)) {
      document.getElementById(`item_${i}`).classList.add("location_active");
    }
  });
};

navPlace();
placeCard();
checkLocation();
