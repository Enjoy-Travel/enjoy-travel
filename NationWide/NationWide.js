const regions = [
  {
    name: "전국",
    link: ["/nationwide/nationwide", "/nationwide/nationwideres"],
    img: "https://cdn-icons-png.flaticon.com/256/4498/4498474.png",
  },
  {
    name: "서울",
    link: ["/components/placeholder/placeholder.html"],
    img: "../images/local/seoul.jpg",
  },
  {
    name: "경기",
    link: ["/Gyeonggi/Gyeonggi.html"],
    img: "../images/local/gyeonggi.jpg",
  },
  {
    name: "강원",
    link: ["/gangneung/gangneung.html"],
    img: "../images/local/gyeonggi.jpg",
  },
  {
    name: "충북",
    link: ["/components/placeholder/placeholder.html"],
    img: "../images/local/gyeonggi.jpg",
  },
  {
    name: "충남",
    link: ["/components/placeholder/placeholder.html"],
    img: "../images/local/chungnam.jpg",
  },
  {
    name: "경북",
    link: ["/components/placeholder/placeholder.html"],
    img: "../images/local/gyeongbuk.jpg",
  },
  {
    name: "경남",
    link: ["/components/placeholder/placeholder.html"],
    img: "../images/local/gyeongnam.jpg",
  },
  {
    name: "전북",
    link: ["/components/placeholder/placeholder.html"],
    img: "../images/local/jeonbuk.jpg",
  },
  {
    name: "전남",
    link: ["/components/placeholder/placeholder.html"],
    img: "../images/local/jeonnam.jpg",
  },
  {
    name: "제주",
    link: ["/components/placeholderNav/placeholderNav.html"],
    img: "../images/local/jeju.jpg",
  },
];

let cards = [
  {
    img: "https://i.namu.wiki/i/S6A1BazT7gUkz7BD8p3LEop0p5cTCobCH62DcLfWjNq8SzOtFKVnol2Yc0x9wDK9XG_u29aYYDzkMb_uroeq3w.webp",
    title: "롯데월드타워",
    area: "서울 송파구",
    hashtags: ["전망대", "연인"],
    detail: "/components/placeholder/placeholder.html",
  },
  {
    img: "https://i.namu.wiki/i/KJ42M2qPSn4OB9mVo2WL2JerLzOiwTL9VaLkA_3CsaubW5pUA6wUlSK2UDeT3bI0cRsStV5r7a5sXq3Eo15czA.webp",
    title: "석촌호수",
    area: "서울 송파구",
    hashtags: ["데이트", "연인"],
    detail: "/components/placeholder/placeholder.html",
  },
  {
    img: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202310/12/58cc2a55-ef6d-4ccb-b2aa-b13ce9cfedcc.jpg",
    title: "송도 센트럴파크",
    area: "인천광역시",
    hashtags: ["야경", "데이트"],
    detail: "/components/placeholder/placeholder.html",
  },
  {
    img: "https://newsroom.posco.com/kr/wp-content/uploads/2021/12/1203_posco_space_03.png",
    title: "스페이스워크 ",
    area: "경북 포항시",
    hashtags: ["스카이워크", "우주"],
    detail: "/components/placeholder/placeholder.html",
  },
  {
    img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=4ca190d5-05dc-45bd-a659-f182ad8b145e",
    title: "소수서원",
    area: "경북 영주시",
    hashtags: ["유네스코 세계유산"],
    detail: "/components/placeholder/placeholder.html",
  },
  {
    img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=f7b96f6f-2450-46bd-9c77-bc64136139de",
    title: "여수예술랜드",
    area: "전남 여수시",
    hashtags: ["가족과함께", "여수여행"],
    detail: "/components/placeholder/placeholder.html",
  },
  {
    img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=0aadcf3f-19b6-4f99-a344-ddbd61d0a388",
    title: "서대문자연사박물관",
    area: "서울 서대문구",
    hashtags: ["가족여행", "박물관"],
    detail: "/components/placeholder/placeholder.html",
  },
  {
    img: "https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=d0e95063-8876-4fe8-ad0f-289a97d3607a",
    title: "안동 하회마을",
    area: "경북 안동시",
    hashtags: ["유네스코 세계유산"],
    detail: "/components/placeholder/placeholder.html",
  },
];

let nav = document.getElementById("nav_items");
let cardSection = document.querySelector(".card_section");

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
  const isLiked = localStorage.getItem(`content_place${i}`);
  if (isLiked === "liked") {
    localStorage.removeItem(`content_place${i}`);
    document.getElementById(`content_place${i}`).classList.remove("like");
  } else {
    localStorage.setItem(`content_place${i}`, "liked");
    document.getElementById(`content_place${i}`).classList.add("like");
  }
};

const placeCard = () => {
  cardSection.innerHTML = "";

  cards.forEach((item, i) => {
    cardSection.innerHTML += `
        <div class="card">
 
              <img
                src="${item.img}"
                alt=""
              />
       
              <button class="card_likes"  id="content_place${i}" onclick="toggleLike(${i})">
                <i class="fa-solid fa-heart"></i>
              </button>
  
              <div class="card_text">
                <div>
                  <h3>${item.title}</h3>
                  <p>${item.area}</p>
                </div>    
          
                 <div > 
                  ${item.hashtags.map((tag) => `<span>#${tag}</span>`).join("")}
                  </div>
               </div>
              <a href="${
                item.detail
              }" ><i class="fa-solid fa-arrow-right"></i></a>
            </div>
        `;

    const isLiked = localStorage.getItem(`content_place${i}`);
    if (isLiked === "liked") {
      document.getElementById(`content_place${i}`).classList.add("like");
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
placeCard();
checkLocation();
