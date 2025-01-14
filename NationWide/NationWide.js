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

const checkLocation = () => {
  regions.forEach((region, i) => {
    if (currentLocation.includes(region.link)) {
      document.getElementById(`item_${i}`).classList.add("active");
      s;
    }
  });
};
navPlace();

checkLocation();
