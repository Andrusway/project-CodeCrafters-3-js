import{S as q,N as T,P as j,K,i as N,A as W,a as g}from"./assets/vendor-Dz2U2Gzw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();new q(".events-swiper",{modules:[T,j],slidesPerView:1,spaceBetween:16,autoHeight:!0,pagination:{el:".events-swiper-dots"},navigation:{nextEl:".events-btn-next",prevEl:".events-btn-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}});function _(){const e=new q(".swiper-hero",{modules:[T,K],slidesPerView:1,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",disabledClass:"swiper-button-disabled"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{0:{spaceBetween:16},768:{spaceBetween:32},1440:{spaceBetween:64}}});function o(){const n=document.querySelector(".swiper-button-prev"),a=document.querySelector(".swiper-button-next");n&&(n.disabled=e.isBeginning),a&&(a.disabled=e.isEnd)}return e.on("init",o),e.on("slideChange",o),e}const h=document.body,m=document.querySelector(".navbar-btn"),y=document.querySelector(".navbar-close-btn"),d=document.querySelector("ul.navbar"),I=window.matchMedia("(max-width:767px)"),c={backdrop:document.querySelector(".backdrop"),get bookModalContent(){return document.querySelector(".book-modal-content")},get bookModalCountInput(){return document.querySelector(".book-count")},booksList:document.querySelector(".books-list")};function A(){h.classList.toggle("no-scroll")}function P(e){e.matches?d.addEventListener("click",M):d.removeEventListener("click",M)}function M(e){oe(e)}function z(e){return e.toLowerCase().replace(/\b\w/g,o=>o.toUpperCase())}function F(e){N.info({position:"topRight",message:e})}function Q(e){N.success({position:"topRight",message:e})}function f(){return Number(c.bookModalCountInput.value)}function Y(){c.backdrop.classList.add("is-open"),h.classList.add("no-scroll"),document.addEventListener("keydown",D)}function k(){c.backdrop.classList.remove("is-open"),h.classList.remove("no-scroll"),document.removeEventListener("keydown",D)}function G(e){const o=z(e.title);c.bookModalContent.innerHTML=`
      <img
        class="book-modal-cover-img"
        src="${e.book_image}"
        alt="${o} cover"
        width="310"
        height="466"
      />

      <div class="book-modal-product-info">
        <header>
          <h2 class="book-modal-title">${o}</h2>
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
                  <use href="./img/sprite.svg#icon-chevron-down"></use>
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
  `,new W(".book-accordion-container",{showMultiple:!0})}const J="https://books-backend.p.goit.global/";function X(e){return`${J}books/${e}`}async function Z(e){try{return(await g.get(X(e))).data}catch(o){console.log(o)}}function ee(){if(!d.classList.contains("is-visible")){d.classList.add("is-visible"),m.classList.remove("is-visible"),y.classList.toggle("is-visible"),A();return}}function O(){if(d.classList.contains("is-visible")){d.classList.remove("is-visible"),m.classList.add("is-visible"),y.classList.toggle("is-visible"),A();return}}function oe(e){const o=e.target.closest("a");if(!o)return;const n=o.getAttribute("href").substring(1),a=document.getElementById(n);a&&a.scrollIntoView({behavior:"smooth"}),O()}function D(e){e.key==="Escape"&&k()}async function te(e){if(!e.target.closest(".books-learn-more-button"))return;const n=e.target.closest(".books-item").dataset.id;Y(),G(await Z(n))}function ne(e){e.target===e.currentTarget&&k()}function se(){k()}function ie(){c.bookModalCountInput.value=f()+1}function ae(){f()>1&&(c.bookModalCountInput.value=f()-1)}function re(){let e=f();const o=e>1?`В кошик додано ${e} книг`:"В кошик додана 1 книга";k(),F(o)}function ce(e){e.preventDefault(),k(),Q("Дякуємо за покупку")}function le(e){let o=Number(e.target.value);o<1&&(e.target.value=1),o>99&&(e.target.value=99)}g.defaults.baseURL="https://books-backend.p.goit.global/books/";const v=document.querySelector(".books-categories-list");async function de(){return(await g.get("category-list")).data}function ue(e){const o=e.map(({list_name:n})=>{if(n!=="")return`<li class="books-categories-item">${n}</li>`}).join("");v.innerHTML=o}async function be(){try{const e=await de();e.unshift({list_name:"All categories"}),ue(e)}catch(e){console.log(e)}}be();const pe=document.querySelector(".books-categories-title-wrapper");pe.addEventListener("click",H);function H(){v.classList.toggle("show-books-categories-list")}const w=document.querySelector(".books-show-more-button");function L(){w.classList.add("books-show-more-button-display")}function B(){w.classList.remove("books-show-more-button-display")}const b=document.querySelector(".books-list"),l=window.innerWidth>=768?24:10,S=document.querySelector(".books-number-info");let r=0,p=0;const E=4,U=0;let s=[];async function ge(){return(await g.get("top-books")).data.flatMap(a=>a.books)}async function ke(e){return(await g.get(`category?category=${e}`)).data}function C(e){return e.map(({author:n,book_image:a,price:t,title:i,_id:u})=>`<li class="books-item" data-id="${u}">
          <img class="books-image" src="${a}" alt="${i}" width="343" />
          <div class="book-info">
            <div class="book-title-author">
              <p class="book-title">${i}</p>
              <p class="book-author">${n}</p>
            </div>
            <p class="book-price">$${t}</p>
          </div>
          <button class="books-learn-more-button" type="button">
            Learn More
          </button>
        </li>`).join("")}v.addEventListener("click",fe);async function fe(e){H();const o=e.target.textContent;o==="All categories"?V():he(o)}async function V(){B();try{s=await ge();const o=s.slice(U,l);b.innerHTML=C(o),r=s.length>l?l:s.length,p=s.length,S.textContent=`Showing ${r} of ${p}`,s.length>l&&L()}catch(e){console.log(e)}}V();async function he(e){B();try{const o=await ke(e);if(s=o,r=s.length>l?l:s.length,p=s.length,S.textContent=`Showing ${r} of ${p}`,!o.length){b.innerHTML='<p class="no-books-info">Sorry, there are no books in this category!</p>';return}const n=s.slice(U,l);b.innerHTML=C(n),s.length>l&&L()}catch(o){console.log(o)}}w.addEventListener("click",me);let $=0,x=0;function me(){B(),$=r,r=s.length>r+E?r+E:s.length,S.textContent=`Showing ${r} of ${p}`,x=r;const e=s.slice($,x);b.insertAdjacentHTML("beforeend",C(e)),s.length>r&&L()}b.addEventListener("click",ye);function ye(e){if(e.target.nodeName!=="BUTTON")return;e.target.closest("li.books-item").dataset.id}function R(){document.querySelector(".swiper-hero")?_():setTimeout(R,50)}document.addEventListener("DOMContentLoaded",R);P(I);I.addEventListener("change",P);m.addEventListener("click",ee);y.addEventListener("click",O);c.booksList.addEventListener("click",te);c.backdrop.addEventListener("click",e=>{e.target.closest(".modal-close-btn")&&se(),e.target.closest(".backdrop")&&ne(e),e.target.closest(".book-modal-btn-plus")&&ie(),e.target.closest(".book-modal-btn-minus")&&ae(),e.target.closest(".book-modal-add-btn")&&re(),e.target.closest(".book-modal-buy-btn")&&ce(e)});c.backdrop.addEventListener("input",e=>{e.target.closest(".book-count")&&le(e)});
//# sourceMappingURL=index.js.map
