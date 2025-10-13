import{S as R,N as j,K,i as x,A as V,a as g}from"./assets/vendor-DjnWvFOZ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function W(){const o=new R(".swiper-hero",{modules:[j,K],slidesPerView:1,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",disabledClass:"swiper-button-disabled"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{0:{spaceBetween:16},768:{spaceBetween:32},1440:{spaceBetween:64}}});function e(){const n=document.querySelector(".swiper-button-prev"),a=document.querySelector(".swiper-button-next");n&&(n.disabled=o.isBeginning),a&&(a.disabled=o.isEnd)}return o.on("init",e),o.on("slideChange",e),o}const h=document.body,m=document.querySelector(".navbar-btn"),y=document.querySelector(".navbar-close-btn"),d=document.querySelector("ul.navbar"),T=window.matchMedia("(max-width:767px)"),c={backdrop:document.querySelector(".backdrop"),get bookModalContent(){return document.querySelector(".book-modal-content")},get bookModalCountInput(){return document.querySelector(".book-count")},booksList:document.querySelector(".books-list")};function N(){h.classList.toggle("no-scroll")}function I(o){o.matches?d.addEventListener("click",M):d.removeEventListener("click",M)}function M(o){oo(o)}function _(o){return o.toLowerCase().replace(/\b\w/g,e=>e.toUpperCase())}function z(o){x.info({position:"topRight",message:o})}function F(o){x.success({position:"topRight",message:o})}function f(){return Number(c.bookModalCountInput.value)}function Q(){c.backdrop.classList.add("is-open"),h.classList.add("no-scroll"),document.addEventListener("keydown",O)}function k(){c.backdrop.classList.remove("is-open"),h.classList.remove("no-scroll"),document.removeEventListener("keydown",O)}function Y(o){const e=_(o.title);c.bookModalContent.innerHTML=`
      <img
        class="book-modal-cover-img"
        src="${o.book_image}"
        alt="${e} cover"
        width="310"
        height="466"
      />

      <div class="book-modal-product-info">
        <header>
          <h2 class="book-modal-title">${e}</h2>
          <p class="book-modal-author">${o.author}</p>
          <p class="book-modal-price">$${o.price}</p>
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
                  <use href="./img/sprite.svg#icon-chevron-down"></use>
                </svg>
              </button>
            </h3>
            <div class="ac-panel">
              <p class="ac-text">${o.description}</p>
            </div>
          </section>

          <section aria-labelledby="shipping-heading" class="ac">
            <h3 id="shipping-heading" class="ac-header">
              <button type="button" class="ac-trigger" aria-expanded="false">
                Shipping
                <svg class="ac-btn-ico" width="24" height="24" aria-hidden="true">
                  <use href="./img/sprite.svg#icon-chevron-down"></use>
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
                  <use href="./img/sprite.svg#icon-chevron-down"></use>
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
  `,new V(".book-accordion-container",{showMultiple:!0})}const G="https://books-backend.p.goit.global/";function J(o){return`${G}books/${o}`}async function X(o){try{return(await g.get(J(o))).data}catch(e){console.log(e)}}function Z(){if(!d.classList.contains("is-visible")){d.classList.add("is-visible"),m.classList.remove("is-visible"),y.classList.toggle("is-visible"),N();return}}function A(){if(d.classList.contains("is-visible")){d.classList.remove("is-visible"),m.classList.add("is-visible"),y.classList.toggle("is-visible"),N();return}}function oo(o){const e=o.target.closest("a");if(!e)return;const n=e.getAttribute("href").substring(1),a=document.getElementById(n);a&&a.scrollIntoView({behavior:"smooth"}),A()}function O(o){o.key==="Escape"&&k()}async function eo(o){if(!o.target.closest(".books-learn-more-button"))return;const n=o.target.closest(".books-item").dataset.id;Q(),Y(await X(n))}function to(o){o.target===o.currentTarget&&k()}function no(){k()}function so(){c.bookModalCountInput.value=f()+1}function io(){f()>1&&(c.bookModalCountInput.value=f()-1)}function ao(){let o=f();const e=o>1?`В кошик додано ${o} книг`:"В кошик додана 1 книга";k(),z(e)}function ro(o){o.preventDefault(),k(),F("Дякуємо за покупку")}function co(o){let e=Number(o.target.value);e<1&&(o.target.value=1),e>99&&(o.target.value=99)}g.defaults.baseURL="https://books-backend.p.goit.global/books/";const v=document.querySelector(".books-categories-list");async function lo(){return(await g.get("category-list")).data}function uo(o){const e=o.map(({list_name:n})=>{if(n!=="")return`<li class="books-categories-item">${n}</li>`}).join("");v.innerHTML=e}async function bo(){try{const o=await lo();o.unshift({list_name:"All categories"}),uo(o)}catch(o){console.log(o)}}bo();const po=document.querySelector(".books-categories-title-wrapper");po.addEventListener("click",P);function P(){v.classList.toggle("show-books-categories-list")}const w=document.querySelector(".books-show-more-button");function L(){w.classList.add("books-show-more-button-display")}function B(){w.classList.remove("books-show-more-button-display")}const b=document.querySelector(".books-list"),l=window.innerWidth>=768?24:10,S=document.querySelector(".books-number-info");let r=0,p=0;const E=4,D=0;let s=[];async function go(){return(await g.get("top-books")).data.flatMap(a=>a.books)}async function ko(o){return(await g.get(`category?category=${o}`)).data}function C(o){return o.map(({author:n,book_image:a,price:t,title:i,_id:u})=>`<li class="books-item" data-id="${u}">
          <img class="books-image" src="${a}" alt="${i}" width="343" />
          <div class="book-info">
            <div>
              <p class="book-title">${i}</p>
              <p class="book-author">${n}</p>
            </div>
            <p class="book-price">$${t}</p>
          </div>
          <button class="books-learn-more-button" type="button">
            Learn More
          </button>
        </li>`).join("")}v.addEventListener("click",fo);async function fo(o){P();const e=o.target.textContent;e==="All categories"?H():ho(e)}async function H(){B();try{s=await go();const e=s.slice(D,l);b.innerHTML=C(e),r=s.length>l?l:s.length,p=s.length,S.textContent=`Showing ${r} of ${p}`,s.length>l&&L()}catch(o){console.log(o)}}H();async function ho(o){B();try{const e=await ko(o);if(s=e,r=s.length>l?l:s.length,p=s.length,S.textContent=`Showing ${r} of ${p}`,!e.length){b.innerHTML="<p>Sorry, there are no books in this category!</p>";return}const n=s.slice(D,l);b.innerHTML=C(n),s.length>l&&L()}catch(e){console.log(e)}}w.addEventListener("click",mo);let $=0,q=0;function mo(){B(),$=r,r=s.length>r+E?r+E:s.length,S.textContent=`Showing ${r} of ${p}`,q=r;const o=s.slice($,q);b.insertAdjacentHTML("beforeend",C(o)),s.length>r&&L()}b.addEventListener("click",yo);function yo(o){if(o.target.nodeName!=="BUTTON")return;o.target.closest("li.books-item").dataset.id}function U(){document.querySelector(".swiper-hero")?W():setTimeout(U,50)}document.addEventListener("DOMContentLoaded",U);I(T);T.addEventListener("change",I);m.addEventListener("click",Z);y.addEventListener("click",A);c.booksList.addEventListener("click",eo);c.backdrop.addEventListener("click",o=>{o.target.closest(".modal-close-btn")&&no(),o.target.closest(".backdrop")&&to(o),o.target.closest(".book-modal-btn-plus")&&so(),o.target.closest(".book-modal-btn-minus")&&io(),o.target.closest(".book-modal-add-btn")&&ao(),o.target.closest(".book-modal-buy-btn")&&ro(o)});c.backdrop.addEventListener("input",o=>{o.target.closest(".book-count")&&co(o)});
//# sourceMappingURL=index.js.map
