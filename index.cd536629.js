new Swiper(".swiper",{pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},speed:1500,loop:!0,effect:"fade",fadeEffect:{crossFade:!0}});const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]");console.log(t),e.addEventListener("click",(()=>{const n=!0===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open")}));
//# sourceMappingURL=index.cd536629.js.map