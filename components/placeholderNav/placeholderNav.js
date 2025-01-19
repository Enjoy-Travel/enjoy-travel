const regions = [
  {
    name: "전국",
    link: ["/nationwide/nationwide", "/nationwide/nationwideres"],
    img: "https://cdn-icons-png.flaticon.com/256/4498/4498474.png",
  },
  {
    name: "서울",
    link: ["url.html"],
    img: "/images/local/seoul.jpg",
  },
  {
    name: "경기",
    link: ["url.html"],
    img: "/images/local/gyeonggi.jpg",
  },
  {
    name: "강원",
    link: ["/gangneung/gangneung.html"],
    img: "/images/local/gyeonggi.jpg",
  },
  {
    name: "충북",
    link: ["url.html"],
    img: "/images/local/gyeonggi.jpg",
  },
  {
    name: "충남",
    link: ["url.html"],
    img: "/images/local/chungnam.jpg",
  },
  {
    name: "경북",
    link: ["url.html"],
    img: "/images/local/gyeongbuk.jpg",
  },
  {
    name: "경남",
    link: ["url.html"],
    img: "/images/local/gyeongnam.jpg",
  },
  {
    name: "전북",
    link: ["url.html"],
    img: "/images/local/jeonbuk.jpg",
  },
  {
    name: "전남",
    link: ["url.html"],
    img: "/images/local/jeonnam.jpg",
  },
  {
    name: "제주",
    link: ["/components/placeholdernav/placeholdernav"],
    img: "/images/local/jeju.jpg",
  },
];

let cards = [
  {
    img: "https://i.namu.wiki/i/M9DUOeJIn3If7FU7QlF6mfB2SEF3ecNWrQk0RiC1b6w59SLthwswxt2sFO3_86gyKVEn-DknunO-6pxJcR44tg.webp",
    title: "TITLE",
    area: "location",
    hashtags: ["hashtag"],
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
  const isLiked = localStorage.getItem(`holder_place${i}`);
  if (isLiked === "liked") {
    localStorage.removeItem(`holder_place${i}`);
    document.getElementById(`holder_place${i}`).classList.remove("like");
  } else {
    localStorage.setItem(`holder_place${i}`, "liked");
    document.getElementById(`holder_place${i}`).classList.add("like");
  }
};

const placeCard = () => {
  cardSection.innerHTML = "";

  for (let i = 0; i < 8; i++) {
    const item = cards[0];

    cardSection.innerHTML += `
          <div class="card">
   
                <img
                  src="${item.img}"
                  alt=""
                />
         
                <button class="card_likes"  id="holder_place${i}" onclick="toggleLike(${i})">
                  <i class="fa-solid fa-heart"></i>
                </button>
    
                <div class="card_text">
                  <div>
                    <h3>${item.title}</h3>
                    <p>${item.area}</p>
                  </div>    
            
                   <div> 
                    ${item.hashtags
                      .map((tag) => `<span>#${tag}</span>`)
                      .join("")}
                    </div>
                 </div>
                <a href="${
                  item.detail
                }" ><i class="fa-solid fa-arrow-right"></i></a>
              </div>
          `;

    const isLiked = localStorage.getItem(`holder_place${i}`);
    if (isLiked === "liked") {
      document.getElementById(`holder_place${i}`).classList.add("like");
    }
  }
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
