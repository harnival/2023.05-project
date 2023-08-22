const mnIcon = document.querySelector("div.menu_icon");
const hdEl = document.querySelector("header");
const topEl = document.querySelector("div.top");
const bottomEl = document.querySelector("nav.bottom");

const slEls = document.querySelectorAll("div.select");
const mnEls = document.querySelectorAll("ul.menus");

// 1. CLASS : BOTTOM 열고 닫기
mnIcon.addEventListener("click", () => {
  hdEl.classList.toggle("open");
  topEl.classList.toggle("open");
  bottomEl.classList.toggle("open");

  switch (mnIcon.innerText) {
    case 'menu' : 
      mnIcon.textContent = 'close';
      break
    
    case 'close' : 
      mnIcon.textContent = 'menu';
      break
  }
});
// 1. CLASS : BOTTOM 열고 닫기

// 2. PARK MENU & HOTEL MENU, 열고 닫기

for (let i = 0; i < slEls.length; i++) {
  for (let i = 0; i < mnEls.length; i++) {
    slEls[i].addEventListener("click", () => {
      slEls.forEach((mnLiEl) => {
        if (mnLiEl === slEls[i]) {
          mnLiEl.style.backgroundColor = 'transparent';
          mnLiEl.classList.add("active");
        } else {
          mnLiEl.style.backgroundColor = "#ffcf00"
          mnLiEl.classList.remove("active");
        }
      });

      mnEls.forEach((vsLiEl) => {
        if (vsLiEl === mnEls[i]) {
          vsLiEl.classList.add("active");
        } else {
          vsLiEl.classList.remove("active");
        }
      });

    });
  }
}

for (let i = 0; i < slEls.length; i++) {
  for (let i = 0; i < mnEls.length; i++) {
    mnIcon.addEventListener("click", () => {
      
      slEls.forEach((mnLiEl) => {
        if (mnLiEl === slEls[i]) {
          mnLiEl.classList.remove("active");
        }
      });

      mnEls.forEach((vsLiEl) => {
        if (vsLiEl === mnEls[i]) {
          vsLiEl.classList.remove("active");
        } 
      });

    });
  }
}

// 2. PARK MENU & HOTEL MENU, 열고 닫기

// menu switch

const pageNumberEls = document.querySelectorAll("div.page_number");
const pageOneEl = document.querySelector("div.page_1");
const pageContentEls = document.querySelectorAll("div.page_contents");

for (let i = 0; i < pageNumberEls.length; i++) {
  for (let i = 0; i < pageContentEls.length; i++) {
    pageNumberEls[i].addEventListener("click", () => {
      pageNumberEls.forEach((pageNumberEl) => {
        if (pageNumberEl === pageNumberEls[i]) {
          pageNumberEl.classList.add("active");
        } else {
          pageNumberEl.classList.remove("active");
        }
      });
      
      pageContentEls.forEach((pageContentEl) => {
        if (pageContentEl === pageContentEls[i]) {
          pageContentEl.classList.add("active");
        } else {
          pageContentEl.classList.remove("active");
        }
      });
    });
  }
}

// menu switch


