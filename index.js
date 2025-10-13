import{S as m,N as v,P as N,K as A,i as I,A as F,a as k}from"./assets/vendor-DskxEx1y.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();new m(".events-swiper",{modules:[v,N],slidesPerView:1,spaceBetween:16,autoHeight:!0,pagination:{el:".events-swiper-dots"},navigation:{nextEl:".events-btn-next",prevEl:".events-btn-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}});function W(){const e=new m(".swiper-hero",{modules:[v,A],slidesPerView:1,loop:!1,navigation:{nextEl:".hero-swiper-button-next",prevEl:".hero-swiper-button-prev",disabledClass:"hero-swiper-button-disabled"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{0:{spaceBetween:16},768:{spaceBetween:32},1440:{spaceBetween:64}}});function t(){const o=document.querySelector(".hero-swiper-button-prev"),i=document.querySelector(".hero-swiper-button-next");o&&(o.disabled=e.isBeginning),i&&(i.disabled=e.isEnd)}return e.on("init",t),e.on("slideChange",t),e}const b={feedbacksSwiper:document.querySelector(".feedbacks-swiper"),feedbacksNextBtn:document.querySelector(".feedbacks-btn-next"),feedbacksPrevBtn:document.querySelector(".feedbacks-btn-prev"),feedbacksPagination:document.querySelector(".feedbacks-pagination")},_=()=>{if(!b.feedbacksSwiper)return;const e=new m(b.feedbacksSwiper,{modules:[v,A,N],slidesPerView:1,spaceBetween:24,keyboard:{enabled:!0},autoHeight:!1,navigation:{nextEl:b.feedbacksNextBtn,prevEl:b.feedbacksPrevBtn},pagination:{el:b.feedbacksPagination,clickable:!0,bulletClass:"feedbacks-bullet",bulletActiveClass:"feedbacks-bullet-active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{init(t){t.navigation.prevEl.disabled=t.isBeginning,t.navigation.nextEl.disabled=t.isEnd},slideChange(t){t.navigation.prevEl.disabled=t.isBeginning,t.navigation.nextEl.disabled=t.isEnd},reachBeginning(t){t.navigation.prevEl.disabled=!0},fromEdge(t){t.navigation.prevEl.disabled=!1,t.navigation.nextEl.disabled=!1},reachEnd(t){t.navigation.nextEl.disabled=!0}}});return document.querySelectorAll(".feedbacks-btn").forEach(t=>{t.addEventListener("mouseup",o=>o.currentTarget.blur()),t.addEventListener("mouseleave",o=>o.currentTarget.blur())}),e},y=document.body,w=document.querySelector(".navbar-btn"),B=document.querySelector(".navbar-close-btn"),d=document.querySelector("ul.navbar"),O=window.matchMedia("(max-width:767px)"),c={backdrop:document.querySelector(".backdrop"),get bookModalContent(){return document.querySelector(".book-modal-content")},get bookModalCountInput(){return document.querySelector(".book-count")},booksList:document.querySelector(".books-list")};function H(){y.classList.toggle("no-scroll")}function V(e){e.matches?d.addEventListener("click",q):d.removeEventListener("click",q)}function q(e){oe(e)}function z(e){return e.toLowerCase().replace(/\b\w/g,t=>t.toUpperCase())}function Q(e){I.info({position:"topRight",message:e})}function Y(e){I.success({position:"topRight",message:e})}function h(){return Number(c.bookModalCountInput.value)}function G(){c.backdrop.classList.add("is-open"),y.classList.add("no-scroll"),document.addEventListener("keydown",U)}function f(){c.backdrop.classList.remove("is-open"),y.classList.remove("no-scroll"),document.removeEventListener("keydown",U)}function J(e){const t=z(e.title);c.bookModalContent.innerHTML=`
      <img
        class="book-modal-cover-img"
        src="${e.book_image}"
        alt="${t} cover"
        width="310"
        height="466"
      />

      <div class="book-modal-product-info">
        <header>
          <h2 class="book-modal-title">${t}</h2>
          <p class="book-modal-author">${e.author}</p>
          <p class="book-modal-price">$${e.price}</p>
        </header>

        <form class="book-modal-form">
          <fieldset class="book-modal-count">
            <legend class="visually-hidden">Select book quantity</legend>
            <button type="button" class="book-modal-qty-btn book-modal-btn-minus" aria-label="Decrease quantity">-</button>
            <input type="number" class="book-count" id="book-count" name="book-count" value="1" min="1" max="99" aria-live="polite"/>
            <button type="button" class="book-modal-qty-btn book-modal-btn-plus" aria-label="Increase quantity">+</button>
          </fieldset>

          <div class="book-modal-buy-container">
            <button type="button" class="book-modal-add-btn">Add to Cart</button>
            <button type="submit" class="book-modal-buy-btn">Buy Now</button>
          </div>
        </form>

        <div class="book-accordion-container">
          <section aria-labelledby="details-heading" class="ac">
            <h3 id="details-heading" class="ac-header"">
              <button type="button" class="ac-trigger" aria-expanded="false">
                Details
                <svg class="ac-btn-ico" width="24" height="24" aria-hidden="true">
                  <use href="/img/sprite.svg#icon-chevron-down"></use>
                </svg>
              </button>
            </h3>
            <div class="ac-panel">
              <p class="ac-text">${e.description}</p>
            </div>
          </section>

          <section aria-labelledby="shipping-heading" class="ac">
            <h3 id="shipping-heading" class="ac-header">
              <button type="button" class="ac-trigger" aria-expanded="false">
                Shipping
                <svg class="ac-btn-ico" width="24" height="24" aria-hidden="true">
                  <use href="/img/sprite.svg#icon-chevron-down"></use>
                </svg>
              </button>
            </h3>
            <div class="ac-panel">
              <p class="ac-text">
                We ship across the United States within 2–5 business days. All orders
                are processed through USPS or a reliable courier service. Enjoy free
                standard shipping on orders over $50.
              </p>
            </div>
          </section>

          <section aria-labelledby="returns-heading" class="ac">
            <h3 id="returns-heading" class="ac-header">
              <button type="button" class="ac-trigger" aria-expanded="false">
                Returns
                <svg class="ac-btn-ico" width="24" height="24" aria-hidden="true">
                  <use href="/img/sprite.svg#icon-chevron-down"></use>
                </svg>
              </button>
            </h3>
            <div class="ac-panel">
              <p class="ac-text">
                  You can return an item within 14 days of receiving your order,
                  provided it hasn’t been used and is in its original condition.
                  To start a return, please contact our support team — we’ll guide
                  you through the process quickly and hassle-free.
              </p>
            </div>
          </section>
        </div>
      </div>
  `,new F(".book-accordion-container",{showMultiple:!0})}const X="https://books-backend.p.goit.global/";function Z(e){return`${X}books/${e}`}async function ee(e){try{return(await k.get(Z(e))).data}catch(t){console.log(t)}}function te(){if(!d.classList.contains("is-visible")){d.classList.add("is-visible"),w.classList.remove("is-visible"),B.classList.toggle("is-visible"),H();return}}function D(){if(d.classList.contains("is-visible")){d.classList.remove("is-visible"),w.classList.add("is-visible"),B.classList.toggle("is-visible"),H();return}}function oe(e){const t=e.target.closest("a");if(!t)return;const o=t.getAttribute("href").substring(1),i=document.getElementById(o);i&&i.scrollIntoView({behavior:"smooth"}),D()}function U(e){e.key==="Escape"&&f()}async function ne(e){if(!e.target.closest(".books-learn-more-button"))return;const o=e.target.closest(".books-item").dataset.id;G(),J(await ee(o))}function se(e){e.target===e.currentTarget&&f()}function ae(){f()}function ie(){c.bookModalCountInput.value=h()+1}function re(){h()>1&&(c.bookModalCountInput.value=h()-1)}function ce(){let e=h();const t=e>1?`В кошик додано ${e} книг`:"В кошик додана 1 книга";f(),Q(t)}function le(e){e.preventDefault(),f(),Y("Дякуємо за покупку")}function de(e){let t=Number(e.target.value);t<1&&(e.target.value=1),t>99&&(e.target.value=99)}k.defaults.baseURL="https://books-backend.p.goit.global/books/";const L=document.querySelector(".books-categories-list");async function ue(){return(await k.get("category-list")).data}function be(e){const t=e.map(({list_name:o})=>{if(o!=="")return`<li class="books-categories-item">${o}</li>`}).join("");L.innerHTML=t}async function ge(){try{const e=await ue();e.unshift({list_name:"All categories"}),be(e)}catch(e){console.log(e)}}ge();const pe=document.querySelector(".books-categories-title-wrapper");pe.addEventListener("click",R);function R(){L.classList.toggle("show-books-categories-list")}const S=document.querySelector(".books-show-more-button");function E(){S.classList.add("books-show-more-button-display")}function C(){S.classList.remove("books-show-more-button-display")}const g=document.querySelector(".books-list"),l=window.innerWidth>=768?24:10,x=document.querySelector(".books-number-info");let r=0,p=0;const $=4,j=0;let s=[];async function ke(){return(await k.get("top-books")).data.flatMap(i=>i.books)}async function fe(e){return(await k.get(`category?category=${e}`)).data}function M(e){return e.map(({author:o,book_image:i,price:n,title:a,_id:u})=>`<li class="books-item" data-id="${u}">
          <img class="books-image" src="${i}" alt="${a}" width="343" />
          <div class="book-info">
            <div class="book-title-author">
              <p class="book-title">${a}</p>
              <p class="book-author">${o}</p>
            </div>
            <p class="book-price">$${n}</p>
          </div>
          <button class="books-learn-more-button" type="button">
            Learn More
          </button>
        </li>`).join("")}L.addEventListener("click",he);async function he(e){R();const t=e.target.textContent;t==="All categories"?K():me(t)}async function K(){C();try{s=await ke();const t=s.slice(j,l);g.innerHTML=M(t),r=s.length>l?l:s.length,p=s.length,x.textContent=`Showing ${r} of ${p}`,s.length>l&&E()}catch(e){console.log(e)}}K();async function me(e){C();try{const t=await fe(e);if(s=t,r=s.length>l?l:s.length,p=s.length,x.textContent=`Showing ${r} of ${p}`,!t.length){g.innerHTML='<p class="no-books-info">Sorry, there are no books in this category!</p>';return}const o=s.slice(j,l);g.innerHTML=M(o),s.length>l&&E()}catch(t){console.log(t)}}S.addEventListener("click",ve);let P=0,T=0;function ve(){C(),P=r,r=s.length>r+$?r+$:s.length,x.textContent=`Showing ${r} of ${p}`,T=r;const e=s.slice(P,T);g.insertAdjacentHTML("beforeend",M(e)),s.length>r&&E()}g.addEventListener("click",ye);function ye(e){if(e.target.nodeName!=="BUTTON")return;e.target.closest("li.books-item").dataset.id}function we(){document.querySelector(".swiper-hero")&&W(),document.querySelector(".feedbacks-swiper")&&_()}document.addEventListener("DOMContentLoaded",we);V(O);O.addEventListener("change",V);w.addEventListener("click",te);B.addEventListener("click",D);c.booksList.addEventListener("click",ne);c.backdrop.addEventListener("click",e=>{e.target.closest(".modal-close-btn")&&ae(),e.target.closest(".backdrop")&&se(e),e.target.closest(".book-modal-btn-plus")&&ie(),e.target.closest(".book-modal-btn-minus")&&re(),e.target.closest(".book-modal-add-btn")&&ce(),e.target.closest(".book-modal-buy-btn")&&le(e)});c.backdrop.addEventListener("input",e=>{e.target.closest(".book-count")&&de(e)});
//# sourceMappingURL=index.js.map
