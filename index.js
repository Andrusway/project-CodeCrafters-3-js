import{S as L,N as E,P as D,K as O,i as H,A as Q,a as m}from"./assets/vendor-DskxEx1y.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();new L(".events-swiper",{modules:[E,D],slidesPerView:1,spaceBetween:16,autoHeight:!0,pagination:{el:".events-swiper-dots"},navigation:{nextEl:".events-btn-next",prevEl:".events-btn-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}});function J(){const e=new L(".swiper-hero",{modules:[E,O],slidesPerView:1,loop:!1,navigation:{nextEl:".hero-swiper-button-next",prevEl:".hero-swiper-button-prev",disabledClass:"hero-swiper-button-disabled"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{0:{spaceBetween:16},768:{spaceBetween:32},1440:{spaceBetween:64}}});function t(){const o=document.querySelector(".hero-swiper-button-prev"),a=document.querySelector(".hero-swiper-button-next");o&&(o.disabled=e.isBeginning),a&&(a.disabled=e.isEnd)}return e.on("init",t),e.on("slideChange",t),e}const u={feedbacksSwiper:document.querySelector(".feedbacks-swiper"),feedbacksNextBtn:document.querySelector(".feedbacks-btn-next"),feedbacksPrevBtn:document.querySelector(".feedbacks-btn-prev"),feedbacksPagination:document.querySelector(".feedbacks-pagination")},Z=()=>{if(!u.feedbacksSwiper)return;const e=new L(u.feedbacksSwiper,{modules:[E,O,D],slidesPerView:1,spaceBetween:24,keyboard:{enabled:!0},autoHeight:!1,navigation:{nextEl:u.feedbacksNextBtn,prevEl:u.feedbacksPrevBtn},pagination:{el:u.feedbacksPagination,clickable:!0,bulletClass:"feedbacks-bullet",bulletActiveClass:"feedbacks-bullet-active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{init(t){t.navigation.prevEl.disabled=t.isBeginning,t.navigation.nextEl.disabled=t.isEnd},slideChange(t){t.navigation.prevEl.disabled=t.isBeginning,t.navigation.nextEl.disabled=t.isEnd},reachBeginning(t){t.navigation.prevEl.disabled=!0},fromEdge(t){t.navigation.prevEl.disabled=!1,t.navigation.nextEl.disabled=!1},reachEnd(t){t.navigation.nextEl.disabled=!0}}});return document.querySelectorAll(".feedbacks-btn").forEach(t=>{t.addEventListener("mouseup",o=>o.currentTarget.blur()),t.addEventListener("mouseleave",o=>o.currentTarget.blur())}),e},C=document.body,S=document.querySelector(".navbar-btn"),M=document.querySelector(".navbar-close-btn"),d=document.querySelector("ul.navbar"),V=window.matchMedia("(max-width:767px)"),l={backdrop:document.querySelector(".backdrop"),get bookModalContent(){return document.querySelector(".book-modal-content")},get bookModalCountInput(){return document.querySelector(".book-count")},booksList:document.querySelector(".books-list")};function U(){C.classList.toggle("no-scroll")}function X(e){e.matches?d.addEventListener("click",P):d.removeEventListener("click",P)}function P(e){me(e)}function ee(e){return e.toLowerCase().replace(/\b\w/g,t=>t.toUpperCase())}function te(e){H.info({position:"topRight",message:e})}function oe(e){H.success({position:"topRight",message:e})}function h(){return Number(refs.bookModalCountInput.value)}const p=document.getElementById("modal"),x=document.getElementById("backdrop"),ne=document.getElementById("closeBtn"),se=document.getElementById("eventTitle"),b=document.getElementById("registerForm");let y="";function ae(e){y=e,se.textContent=y,p.classList.remove("contacts-hidden"),x.classList.remove("contacts-hidden"),document.body.classList.add("modal-open"),gsap.fromTo(p,{scale:.5,rotationX:-90,opacity:0},{scale:1,rotationX:0,opacity:1,duration:.6,ease:"power4.in"})}function v(){gsap.to(p,{scale:.8,rotationX:90,opacity:0,duration:.4,ease:"power4.out",onComplete:()=>{p.classList.add("contacts-hidden"),x.classList.add("contacts-hidden"),document.body.classList.remove("modal-open"),b.reset()}})}ne.addEventListener("click",v);x.addEventListener("click",v);document.addEventListener("keydown",e=>{e.key==="Escape"&&!p.classList.contains("hidden")&&v()});function ie(){const t=Date.now()+2500;(function o(){confetti({particleCount:8,angle:60,spread:100,origin:{x:0},zIndex:19e3,colors:["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"]}),confetti({particleCount:8,angle:120,spread:100,origin:{x:1},zIndex:19e3,colors:["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"]}),Date.now()<t&&requestAnimationFrame(o)})()}function re(e,t,o=10){const a=["📖","📚","📘","📙","📕"],n=["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"];for(let i=0;i<o;i++){const s=document.createElement("span");s.textContent=a[Math.floor(Math.random()*a.length)],s.style.position="fixed",s.style.left=e+"px",s.style.top=t+"px";const G=Math.random()*28+24;s.style.fontSize=G+"px",s.style.opacity=Math.random()*.7+.3,s.style.color=n[Math.floor(Math.random()*n.length)],s.style.zIndex=19e3,s.style.textShadow="1px 1px 4px rgba(0,0,0,0.4)",s.style.transformOrigin="center",document.body.appendChild(s);const F=Math.random()*Math.PI*2,I=Math.random()*250+100;gsap.to(s,{x:Math.cos(F)*I,y:Math.sin(F)*I-150,rotationX:Math.random()*360,rotationY:Math.random()*360,rotation:Math.random()*720,scale:1+Math.random()*.5,duration:.8+Math.random()*.5,ease:"power2.out",onComplete:()=>{gsap.to(s,{y:`+=${Math.random()*30-15}`,x:`+=${Math.random()*30-15}`,rotation:`+=${Math.random()*180-90}`,rotationX:`+=${Math.random()*180-90}`,rotationY:`+=${Math.random()*180-90}`,duration:.6+Math.random()*.4,ease:"sine.inOut",yoyo:!0,repeat:1,onComplete:()=>{gsap.to(s,{y:window.innerHeight-t+200,x:`+=${(Math.random()-.5)*200}`,rotationX:Math.random()*360,rotationY:Math.random()*360,rotation:Math.random()*720,scale:.8+Math.random()*.4,opacity:0,duration:2+Math.random(),ease:"power2.in",onComplete:()=>s.remove()})}})}})}}b.addEventListener("submit",e=>{e.preventDefault();const t=b.querySelector('input[name="name"]').value.trim(),o=b.querySelector('input[name="email"]').value.trim();if(!t||!o){Swal.fire({title:"Oops!",text:"Please fill in the required fields: Name and Email.",icon:"warning",confirmButtonText:"OK"});return}const a=e.submitter.getBoundingClientRect(),n=a.left+a.width/2,i=a.top+a.height/2;Swal.fire({title:"SUCCESS!",html:`You have registered for: <b>${y}</b>`,icon:"success",showConfirmButton:!0,confirmButtonText:"Great!",confirmButtonColor:"#e15d05",didOpen:()=>{re(n,i,11),ie()}}),b.reset(),v()});document.querySelectorAll(".register-btn").forEach(e=>{e.addEventListener("click",()=>{const o=e.closest(".events-swiper-slide").querySelector(".events-item-title").textContent.trim();ae(o)})});function ce(){l.backdrop.classList.add("is-open"),C.classList.add("no-scroll"),document.addEventListener("keydown",R)}function g(){l.backdrop.classList.remove("is-open"),C.classList.remove("no-scroll"),document.removeEventListener("keydown",R)}function le(e){const t=ee(e.title);l.bookModalContent.innerHTML=`
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
  `,new Q(".book-accordion-container",{showMultiple:!0})}const de="https://books-backend.p.goit.global/";function ue(e){return`${de}books/${e}`}async function be(e){try{return(await m.get(ue(e))).data}catch(t){console.log(t)}}function pe(){d.classList.contains("is-visible")||(d.classList.add("is-visible"),S.classList.remove("is-visible"),M.classList.toggle("is-visible"),U())}function z(){d.classList.contains("is-visible")&&(d.classList.remove("is-visible"),S.classList.add("is-visible"),M.classList.toggle("is-visible"),U())}function me(e){const t=e.target.closest("a");if(!t)return;const o=t.getAttribute("href").substring(1),a=document.getElementById(o);a&&a.scrollIntoView({behavior:"smooth"}),z()}function R(e){e.key==="Escape"&&g()}async function ge(e){if(!e.target.closest(".books-learn-more-button"))return;const o=e.target.closest(".books-item").dataset.id;ce(),le(await be(o))}function fe(e){e.target===e.currentTarget&&g()}function he(){g()}function ke(){l.bookModalCountInput.value=h()+1}function ve(){h()>1&&(l.bookModalCountInput.value=h()-1)}function ye(){const e=h(),t=e>1?`В кошик додано ${e} книг`:"В кошик додана 1 книга";g(),te(t)}function we(e){e.preventDefault(),g(),oe("Дякуємо за покупку")}function Be(e){let t=Number(e.target.value);t<1&&(e.target.value=1),t>99&&(e.target.value=99)}m.defaults.baseURL="https://books-backend.p.goit.global/books/";const q=document.querySelector(".books-categories-list");async function Le(){return(await m.get("category-list")).data}function Ee(e){const t=e.map(({list_name:o})=>{if(o!=="")return`<li class="books-categories-item">${o}</li>`}).join("");q.innerHTML=t}async function Ce(){try{const e=await Le();e.unshift({list_name:"All categories"}),Ee(e)}catch(e){console.log(e)}}Ce();const Se=document.querySelector(".books-categories-title-wrapper");Se.addEventListener("click",j);function j(){q.classList.toggle("show-books-categories-list")}const $=document.querySelector(".books-show-more-button");function K(){$.classList.add("books-show-more-button-display")}function Y(){$.classList.remove("books-show-more-button-display")}const k=document.querySelector(".books-list"),f=window.innerWidth>=768?24:10,W=document.querySelector(".books-number-info");let c=0,w=0;const T=4,Me=0;let r=[];async function xe(){return(await m.get("top-books")).data.flatMap(a=>a.books)}async function qe(e){return(await m.get(`category?category=${e}`)).data}function _(e){return e.map(({author:o,book_image:a,price:n,title:i,_id:s})=>`<li class="books-item" data-id="${s}">
          <img class="books-image" src="${a}" alt="${i}" width="343" />
          <div class="book-info">
            <div class="book-title-author">
              <p class="book-title">${i}</p>
              <p class="book-author">${o}</p>
            </div>
            <p class="book-price">$${n}</p>
          </div>
          <button class="books-learn-more-button" type="button">
            Learn More
          </button>
        </li>`).join("")}q.addEventListener("click",$e);async function $e(e){j();const t=e.target.textContent;B(t==="All categories"?"All categories":t)}B("All categories");async function B(e){Y();try{if(e==="All categories"?r=await xe():r=await qe(e),c=r.length>f?f:r.length,w=r.length,W.textContent=`Showing ${c} of ${w}`,!r.length){k.innerHTML='<p class="no-books-info">Sorry, there are no books in this category!</p>';return}const t=r.slice(Me,f);k.innerHTML=_(t),r.length>f&&K()}catch(t){console.log(t)}}$.addEventListener("click",Fe);let N=0,A=0;function Fe(){Y(),N=c,c=r.length>c+T?c+T:r.length,W.textContent=`Showing ${c} of ${w}`,A=c;const e=r.slice(N,A);k.insertAdjacentHTML("beforeend",_(e)),r.length>c&&K()}k.addEventListener("click",Ie);function Ie(e){if(e.target.nodeName!=="BUTTON")return;e.target.closest("li.books-item").dataset.id}function Pe(){document.querySelector(".swiper-hero")&&J(),document.querySelector(".feedbacks-swiper")&&Z()}document.addEventListener("DOMContentLoaded",Pe);X(V);V.addEventListener("change",X);S.addEventListener("click",pe);M.addEventListener("click",z);l.booksList.addEventListener("click",ge);l.backdrop.addEventListener("click",e=>{e.target.closest(".modal-close-btn")&&he(),e.target.closest(".backdrop")&&fe(e),e.target.closest(".book-modal-btn-plus")&&ke(),e.target.closest(".book-modal-btn-minus")&&ve(),e.target.closest(".book-modal-add-btn")&&ye(),e.target.closest(".book-modal-buy-btn")&&we(e)});l.backdrop.addEventListener("input",e=>{e.target.closest(".book-count")&&Be(e)});
//# sourceMappingURL=index.js.map
