import{S as B,N as L,P as V,K as U,i as X,A as J,a as h}from"./assets/vendor-DskxEx1y.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();new B(".events-swiper",{modules:[L,V],slidesPerView:1,spaceBetween:16,autoHeight:!0,pagination:{el:".events-swiper-dots"},navigation:{nextEl:".events-btn-next",prevEl:".events-btn-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}});function Z(){const e=new B(".swiper-hero",{modules:[L,U],slidesPerView:1,loop:!1,navigation:{nextEl:".hero-swiper-button-next",prevEl:".hero-swiper-button-prev",disabledClass:"hero-swiper-button-disabled"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{0:{spaceBetween:16},768:{spaceBetween:32},1440:{spaceBetween:64}}});function t(){const o=document.querySelector(".hero-swiper-button-prev"),a=document.querySelector(".hero-swiper-button-next");o&&(o.disabled=e.isBeginning),a&&(a.disabled=e.isEnd)}return e.on("init",t),e.on("slideChange",t),e}const b={feedbacksSwiper:document.querySelector(".feedbacks-swiper"),feedbacksNextBtn:document.querySelector(".feedbacks-btn-next"),feedbacksPrevBtn:document.querySelector(".feedbacks-btn-prev"),feedbacksPagination:document.querySelector(".feedbacks-pagination")},ee=()=>{if(!b.feedbacksSwiper)return;const e=new B(b.feedbacksSwiper,{modules:[L,U,V],slidesPerView:1,spaceBetween:24,keyboard:{enabled:!0},autoHeight:!1,navigation:{nextEl:b.feedbacksNextBtn,prevEl:b.feedbacksPrevBtn},pagination:{el:b.feedbacksPagination,clickable:!0,bulletClass:"feedbacks-bullet",bulletActiveClass:"feedbacks-bullet-active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{init(t){t.navigation.prevEl.disabled=t.isBeginning,t.navigation.nextEl.disabled=t.isEnd},slideChange(t){t.navigation.prevEl.disabled=t.isBeginning,t.navigation.nextEl.disabled=t.isEnd},reachBeginning(t){t.navigation.prevEl.disabled=!0},fromEdge(t){t.navigation.prevEl.disabled=!1,t.navigation.nextEl.disabled=!1},reachEnd(t){t.navigation.nextEl.disabled=!0}}});return document.querySelectorAll(".feedbacks-btn").forEach(t=>{t.addEventListener("mouseup",o=>o.currentTarget.blur()),t.addEventListener("mouseleave",o=>o.currentTarget.blur())}),e},C=document.body,E=document.querySelector(".navbar-btn"),S=document.querySelector(".navbar-close-btn"),u=document.querySelector("ul.navbar"),z=window.matchMedia("(max-width:767px)"),d={backdrop:document.querySelector(".backdrop"),get bookModalContent(){return document.querySelector(".book-modal-content")},get bookModalCountInput(){return document.querySelector(".book-count")},booksList:document.querySelector(".books-list")};function R(){C.classList.toggle("no-scroll")}function j(e){e.matches?u.addEventListener("click",A):u.removeEventListener("click",A)}function A(e){me(e)}function te(e){return e.toLowerCase().replace(/\b\w/g,t=>t.toUpperCase())}function oe(e){X.info({position:"topRight",message:e})}function ne(e){X.success({position:"topRight",message:e})}function v(){return Number(refs.bookModalCountInput.value)}const g=document.getElementById("modal"),M=document.getElementById("backdrop"),se=document.getElementById("closeBtn"),ae=document.getElementById("eventTitle"),p=document.getElementById("registerForm");let w="";function ie(e){w=e,ae.textContent=w,g.classList.remove("contacts-hidden"),M.classList.remove("contacts-hidden"),document.body.classList.add("modal-open"),gsap.fromTo(g,{scale:.5,rotationX:-90,opacity:0},{scale:1,rotationX:0,opacity:1,duration:.6,ease:"power4.in"})}function y(){gsap.to(g,{scale:.8,rotationX:90,opacity:0,duration:.4,ease:"power4.out",onComplete:()=>{g.classList.add("contacts-hidden"),M.classList.add("contacts-hidden"),document.body.classList.remove("modal-open"),p.reset()}})}se.addEventListener("click",y);M.addEventListener("click",y);document.addEventListener("keydown",e=>{e.key==="Escape"&&!g.classList.contains("hidden")&&y()});function re(){const t=Date.now()+2500;(function o(){confetti({particleCount:8,angle:60,spread:100,origin:{x:0},zIndex:19e3,colors:["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"]}),confetti({particleCount:8,angle:120,spread:100,origin:{x:1},zIndex:19e3,colors:["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"]}),Date.now()<t&&requestAnimationFrame(o)})()}function ce(e,t,o=10){const a=["📖","📚","📘","📙","📕"],n=["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"];for(let i=0;i<o;i++){const s=document.createElement("span");s.textContent=a[Math.floor(Math.random()*a.length)],s.style.position="fixed",s.style.left=e+"px",s.style.top=t+"px";const Q=Math.random()*28+24;s.style.fontSize=Q+"px",s.style.opacity=Math.random()*.7+.3,s.style.color=n[Math.floor(Math.random()*n.length)],s.style.zIndex=19e3,s.style.textShadow="1px 1px 4px rgba(0,0,0,0.4)",s.style.transformOrigin="center",document.body.appendChild(s);const P=Math.random()*Math.PI*2,N=Math.random()*250+100;gsap.to(s,{x:Math.cos(P)*N,y:Math.sin(P)*N-150,rotationX:Math.random()*360,rotationY:Math.random()*360,rotation:Math.random()*720,scale:1+Math.random()*.5,duration:.8+Math.random()*.5,ease:"power2.out",onComplete:()=>{gsap.to(s,{y:`+=${Math.random()*30-15}`,x:`+=${Math.random()*30-15}`,rotation:`+=${Math.random()*180-90}`,rotationX:`+=${Math.random()*180-90}`,rotationY:`+=${Math.random()*180-90}`,duration:.6+Math.random()*.4,ease:"sine.inOut",yoyo:!0,repeat:1,onComplete:()=>{gsap.to(s,{y:window.innerHeight-t+200,x:`+=${(Math.random()-.5)*200}`,rotationX:Math.random()*360,rotationY:Math.random()*360,rotation:Math.random()*720,scale:.8+Math.random()*.4,opacity:0,duration:2+Math.random(),ease:"power2.in",onComplete:()=>s.remove()})}})}})}}p.addEventListener("submit",e=>{e.preventDefault();const t=p.querySelector('input[name="name"]').value.trim(),o=p.querySelector('input[name="email"]').value.trim();if(!t||!o){Swal.fire({title:"Oops!",text:"Please fill in the required fields: Name and Email.",icon:"warning",confirmButtonText:"OK"});return}const a=e.submitter.getBoundingClientRect(),n=a.left+a.width/2,i=a.top+a.height/2;Swal.fire({title:"SUCCESS!",html:`You have registered for: <b>${w}</b>`,icon:"success",showConfirmButton:!0,confirmButtonText:"Great!",confirmButtonColor:"#e15d05",didOpen:()=>{ce(n,i,11),re()}}),p.reset(),y()});document.querySelectorAll(".register-btn").forEach(e=>{e.addEventListener("click",()=>{const o=e.closest(".events-swiper-slide").querySelector(".events-item-title").textContent.trim();ie(o)})});function le(){d.backdrop.classList.add("is-open"),C.classList.add("no-scroll"),document.addEventListener("keydown",Y)}function k(){d.backdrop.classList.remove("is-open"),C.classList.remove("no-scroll"),document.removeEventListener("keydown",Y)}function de(e){const t=te(e.title);d.bookModalContent.innerHTML=`
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
  `,new J(".book-accordion-container",{showMultiple:!0})}const ue="https://books-backend.p.goit.global/";function be(e){return`${ue}books/${e}`}async function pe(e){try{return(await h.get(be(e))).data}catch(t){console.log(t)}}function ge(){u.classList.contains("is-visible")||(u.classList.add("is-visible"),E.classList.remove("is-visible"),S.classList.toggle("is-visible"),R())}function K(){u.classList.contains("is-visible")&&(u.classList.remove("is-visible"),E.classList.add("is-visible"),S.classList.toggle("is-visible"),R())}function me(e){const t=e.target.closest("a");if(!t)return;const o=t.getAttribute("href").substring(1),a=document.getElementById(o);a&&a.scrollIntoView({behavior:"smooth"}),K()}function Y(e){e.key==="Escape"&&k()}async function fe(e){if(!e.target.closest(".books-learn-more-button"))return;const o=e.target.closest(".books-item").dataset.id;le(),de(await pe(o))}function he(e){e.target===e.currentTarget&&k()}function ke(){k()}function ve(){d.bookModalCountInput.value=v()+1}function ye(){v()>1&&(d.bookModalCountInput.value=v()-1)}function we(){const e=v(),t=e>1?`В кошик додано ${e} книг`:"В кошик додана 1 книга";k(),oe(t)}function Be(e){e.preventDefault(),k(),ne("Дякуємо за покупку")}function Le(e){let t=Number(e.target.value);t<1&&(e.target.value=1),t>99&&(e.target.value=99)}h.defaults.baseURL="https://books-backend.p.goit.global/books/";const x=document.querySelector(".books-categories-list");async function Ce(){return(await h.get("category-list")).data}function Ee(e){const t=e.map(({list_name:o})=>{if(o!=="")return`<li class="books-categories-item">${o}</li>`}).join("");x.innerHTML=t}async function Se(){try{const e=await Ce();e.unshift({list_name:"All categories"}),Ee(e)}catch(e){console.log(e)}}Se();const Me=document.querySelector(".books-categories-title-wrapper");Me.addEventListener("click",W);function W(){x.classList.toggle("show-books-categories-list")}const $=document.querySelector(".books-show-more-button");function q(){$.classList.add("books-show-more-button-display")}function F(){$.classList.remove("books-show-more-button-display")}const m=document.querySelector(".books-list"),l=window.innerWidth>=768?24:10,I=document.querySelector(".books-number-info");let c=0,f=0;const D=4,_=0;let r=[];async function xe(){return(await h.get("top-books")).data.flatMap(a=>a.books)}async function $e(e){return(await h.get(`category?category=${e}`)).data}function T(e){return e.map(({author:o,book_image:a,price:n,title:i,_id:s})=>`<li class="books-item" data-id="${s}">
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
        </li>`).join("")}x.addEventListener("click",qe);async function qe(e){W();const t=e.target.textContent;t==="All categories"?G():Fe(t)}async function G(){F();try{r=await xe();const t=r.slice(_,l);m.innerHTML=T(t),c=r.length>l?l:r.length,f=r.length,I.textContent=`Showing ${c} of ${f}`,r.length>l&&q()}catch(e){console.log(e)}}G();async function Fe(e){F();try{const t=await $e(e);if(r=t,c=r.length>l?l:r.length,f=r.length,I.textContent=`Showing ${c} of ${f}`,!t.length){m.innerHTML='<p class="no-books-info">Sorry, there are no books in this category!</p>';return}const o=r.slice(_,l);m.innerHTML=T(o),r.length>l&&q()}catch(t){console.log(t)}}$.addEventListener("click",Ie);let O=0,H=0;function Ie(){F(),O=c,c=r.length>c+D?c+D:r.length,I.textContent=`Showing ${c} of ${f}`,H=c;const e=r.slice(O,H);m.insertAdjacentHTML("beforeend",T(e)),r.length>c&&q()}m.addEventListener("click",Te);function Te(e){if(e.target.nodeName!=="BUTTON")return;e.target.closest("li.books-item").dataset.id}function Pe(){document.querySelector(".swiper-hero")&&Z(),document.querySelector(".feedbacks-swiper")&&ee()}document.addEventListener("DOMContentLoaded",Pe);j(z);z.addEventListener("change",j);E.addEventListener("click",ge);S.addEventListener("click",K);d.booksList.addEventListener("click",fe);d.backdrop.addEventListener("click",e=>{e.target.closest(".modal-close-btn")&&ke(),e.target.closest(".backdrop")&&he(e),e.target.closest(".book-modal-btn-plus")&&ve(),e.target.closest(".book-modal-btn-minus")&&ye(),e.target.closest(".book-modal-add-btn")&&we(),e.target.closest(".book-modal-buy-btn")&&Be(e)});d.backdrop.addEventListener("input",e=>{e.target.closest(".book-count")&&Le(e)});
//# sourceMappingURL=index.js.map
