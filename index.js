import{S as $,N as F,P as j,K as z,i as R,A as oe,a as f}from"./assets/vendor-DskxEx1y.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();new $(".events-swiper",{modules:[F,j],slidesPerView:1,spaceBetween:16,pagination:{el:".events-swiper-dots"},navigation:{nextEl:".events-btn-next",prevEl:".events-btn-prev"},breakpoints:{768:{autoHeight:!0,slidesPerView:2,spaceBetween:24},1440:{autoHeight:!0,slidesPerView:3,spaceBetween:24}}});function ne(){const e=new $(".swiper-hero",{modules:[F,z],slidesPerView:1,loop:!1,navigation:{nextEl:".hero-swiper-button-next",prevEl:".hero-swiper-button-prev",disabledClass:"hero-swiper-button-disabled"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{0:{spaceBetween:16},768:{spaceBetween:32},1440:{spaceBetween:64}}});function t(){const o=document.querySelector(".hero-swiper-button-prev"),r=document.querySelector(".hero-swiper-button-next");o&&(o.disabled=e.isBeginning),r&&(r.disabled=e.isEnd)}return e.on("init",t),e.on("slideChange",t),e}const m={feedbacksSwiper:document.querySelector(".feedbacks-swiper"),feedbacksNextBtn:document.querySelector(".feedbacks-btn-next"),feedbacksPrevBtn:document.querySelector(".feedbacks-btn-prev"),feedbacksPagination:document.querySelector(".feedbacks-pagination")},se=()=>{if(!m.feedbacksSwiper)return;const e=new $(m.feedbacksSwiper,{modules:[F,z,j],slidesPerView:1,spaceBetween:24,keyboard:{enabled:!0},autoHeight:!1,navigation:{nextEl:m.feedbacksNextBtn,prevEl:m.feedbacksPrevBtn},pagination:{el:m.feedbacksPagination,clickable:!0,bulletClass:"feedbacks-bullet",bulletActiveClass:"feedbacks-bullet-active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{init(t){t.navigation.prevEl.disabled=t.isBeginning,t.navigation.nextEl.disabled=t.isEnd},slideChange(t){t.navigation.prevEl.disabled=t.isBeginning,t.navigation.nextEl.disabled=t.isEnd},reachBeginning(t){t.navigation.prevEl.disabled=!0},fromEdge(t){t.navigation.prevEl.disabled=!1,t.navigation.nextEl.disabled=!1},reachEnd(t){t.navigation.nextEl.disabled=!0}}});return document.querySelectorAll(".feedbacks-btn").forEach(t=>{t.addEventListener("mouseup",o=>o.currentTarget.blur()),t.addEventListener("mouseleave",o=>o.currentTarget.blur())}),e},Y=document.body,I=document.querySelector(".navbar-btn"),P=document.querySelector(".navbar-close-btn"),b=document.querySelector("ul.navbar"),K=window.matchMedia("(max-width:767px)"),S=document.querySelector(".arrow-btn-nav"),l={backdrop:document.querySelector(".backdrop"),get bookModalContent(){return document.querySelector(".book-modal-content")},get bookModalCountInput(){return document.querySelector(".book-count")},booksList:document.querySelector(".books-list")};function A(){Y.classList.remove("no-scroll")}function T(){Y.classList.add("no-scroll")}function X(e){e.matches?b.addEventListener("click",O):b.removeEventListener("click",O)}function O(e){ye(e)}function ae(e){return e.toLowerCase().replace(/\b\w/g,t=>t.toUpperCase())}function re(e){R.info({position:"topRight",message:e})}function ie(e){R.success({position:"topRight",message:e})}function v(){return Number(l.bookModalCountInput.value)}const g=document.getElementById("modal"),w=document.getElementById("backdrop"),ce=document.getElementById("closeBtn"),le=document.getElementById("eventTitle"),u=document.getElementById("registerForm");let M="";function de(e){M=e,le.textContent=M,g.classList.remove("contacts-hidden"),w.classList.remove("contacts-hidden"),T(),gsap.fromTo(g,{scale:.4,opacity:0,y:-20},{scale:1,opacity:1,y:0,duration:.5,ease:"power2.out"})}function L(){gsap.to(g,{scale:.4,opacity:0,y:-20,duration:.4,ease:"power2.in",onComplete:()=>{g.classList.add("contacts-hidden"),w.classList.add("contacts-hidden"),A(),u.reset(),B()}})}u.querySelectorAll("input, textarea").forEach(e=>{e.addEventListener("input",()=>{B()})});function B(){u.querySelectorAll("input, textarea").forEach(t=>{t.classList.remove("error");const o=t.parentElement.querySelector(".error-message");o&&(o.textContent="",o.style.display="none")})}ce.addEventListener("click",L);w.addEventListener("click",e=>{e.target===w&&L()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!g.classList.contains("hidden")&&L()});u.addEventListener("submit",e=>{e.preventDefault();const t=u.querySelector('input[name="name"]'),o=u.querySelector('input[name="email"]'),r=t.parentElement.querySelector(".error-message"),n=o.parentElement.querySelector(".error-message"),a=t.value.trim(),s=o.value.trim();B();let p=!1;if(a||(t.classList.add("error"),r.textContent="Please enter your name",r.style.display="block",p=!0),s||(o.classList.add("error"),n.textContent="Please enter your email",n.style.display="block",p=!0),p){Swal.fire({title:"Oops!",text:"Please fill in the required fields: Name and Email!",icon:"warning",confirmButtonText:"OK",confirmButtonColor:"#e15d05"});return}const d=e.submitter.getBoundingClientRect(),k=d.left+d.width/2,te=d.top+d.height/2;Swal.fire({title:"SUCCESS!",html:`You have registered for: <b>${M}</b>`,icon:"success",confirmButtonText:"Great!",confirmButtonColor:"#e15d05",didOpen:()=>{be(k,te,11),ue()}}),u.reset(),B(),L()});function ue(){const t=Date.now()+2500;(function o(){confetti({particleCount:8,angle:60,spread:100,origin:{x:0},zIndex:19e3,colors:["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"]}),confetti({particleCount:8,angle:120,spread:100,origin:{x:1},zIndex:19e3,colors:["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"]}),Date.now()<t&&requestAnimationFrame(o)})()}function be(e,t,o=10){const r=["📖","📚","📘","📙","📕"],n=["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"];for(let a=0;a<o;a++){const s=document.createElement("span");s.textContent=r[Math.floor(Math.random()*r.length)],s.style.position="fixed",s.style.left=e+"px",s.style.top=t+"px";const p=Math.random()*28+24;s.style.fontSize=p+"px",s.style.opacity=Math.random()*.7+.3,s.style.color=n[Math.floor(Math.random()*n.length)],s.style.zIndex=19e3,s.style.textShadow="1px 1px 4px rgba(0,0,0,0.4)",s.style.transformOrigin="center",document.body.appendChild(s);const d=Math.random()*Math.PI*2,k=Math.random()*250+100;gsap.to(s,{x:Math.cos(d)*k,y:Math.sin(d)*k-150,rotationX:Math.random()*360,rotationY:Math.random()*360,rotation:Math.random()*720,scale:1+Math.random()*.5,duration:.8+Math.random()*.5,ease:"power2.out",onComplete:()=>{gsap.to(s,{y:`+=${Math.random()*30-15}`,x:`+=${Math.random()*30-15}`,rotation:`+=${Math.random()*180-90}`,rotationX:`+=${Math.random()*180-90}`,rotationY:`+=${Math.random()*180-90}`,duration:.6+Math.random()*.4,ease:"sine.inOut",yoyo:!0,repeat:1,onComplete:()=>{gsap.to(s,{y:window.innerHeight-t+200,x:`+=${(Math.random()-.5)*200}`,rotationX:Math.random()*360,rotationY:Math.random()*360,rotation:Math.random()*720,scale:.8+Math.random()*.4,opacity:0,duration:2+Math.random(),ease:"power2.in",onComplete:()=>s.remove()})}})}})}}document.querySelectorAll(".register-btn").forEach(e=>{e.addEventListener("click",()=>{const o=e.closest(".events-swiper-slide").querySelector(".events-item-title").textContent.trim();de(o)})});function pe(){l.backdrop.classList.add("is-open"),T(),document.addEventListener("keydown",W)}function h(){l.backdrop.classList.remove("is-open"),A(),document.removeEventListener("keydown",W)}const C="/project-CodeCrafters-3-js/assets/sprite-DGpfnEqE.svg";function me(e){const t=ae(e.title);l.bookModalContent.innerHTML=`
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
                  <use href="${C}#icon-chevron-down"></use>
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
                  <use href="${C}#icon-chevron-down"></use>
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
                  <use href="${C}#icon-chevron-down"></use>
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
  `,new oe(".book-accordion-container",{showMultiple:!0})}const ge="https://books-backend.p.goit.global/";function fe(e){return`${ge}books/${e}`}async function he(e){try{return(await f.get(fe(e))).data}catch(t){console.log(t)}}function ke(){b.classList.contains("is-visible")||(b.classList.add("is-visible"),I.classList.remove("is-visible"),P.classList.toggle("is-visible"),T())}function G(){b.classList.contains("is-visible")&&(b.classList.remove("is-visible"),I.classList.add("is-visible"),P.classList.toggle("is-visible"),A())}function ye(e){const t=e.target.closest("a");if(!t)return;const o=t.getAttribute("href").substring(1),r=document.getElementById(o);r&&r.scrollIntoView({behavior:"smooth"}),G()}function W(e){e.key==="Escape"&&h()}async function ve(e){if(!e.target.closest(".books-learn-more-button"))return;const o=e.target.closest(".books-item").dataset.id;pe(),me(await he(o))}function we(e){e.target===e.currentTarget&&h()}function Be(){h()}function Ee(){l.bookModalCountInput.value=v()+1}function Le(){v()>1&&(l.bookModalCountInput.value=v()-1)}function Ce(){const e=v(),t=e>1?`В кошик додано ${e} книг`:"В кошик додана 1 книга";h(),re(t)}function Se(e){e.preventDefault(),h(),ie("Дякуємо за покупку")}function Me(e){let t=Number(e.target.value);t<1&&(e.target.value=1),t>99&&(e.target.value=99)}function xe(){window.scrollY>600?S.classList.add("is-visible-arrow-btn"):S.classList.remove("is-visible-arrow-btn")}function qe(){window.scrollTo({top:0,behavior:"smooth"})}f.defaults.baseURL="https://books-backend.p.goit.global/books/";const N=document.querySelector(".books-categories-list");async function $e(){return(await f.get("category-list")).data}function Fe(e){const t=e.map(({list_name:o})=>{if(o!=="")return`<li class="books-categories-item">${o}</li>`}).join("");N.innerHTML=t}async function Ie(){try{const e=await $e();e.unshift({list_name:"All categories"}),Fe(e)}catch(e){console.log(e)}}Ie();const Pe=document.querySelector(".books-categories-title-wrapper");Pe.addEventListener("click",_);function _(){N.classList.toggle("show-books-categories-list")}const D=document.querySelector(".books-show-more-button");function Q(){D.classList.add("books-show-more-button-display")}function J(){D.classList.remove("books-show-more-button-display")}const E=document.querySelector(".books-list"),y=window.innerWidth>=768?24:10,Z=document.querySelector(".books-number-info");let c=0,x=0;const H=4,Ae=0;let i=[];async function Te(){return(await f.get("top-books")).data.flatMap(r=>r.books)}async function Ne(e){return(await f.get(`category?category=${e}`)).data}function ee(e){return e.map(({author:o,book_image:r,price:n,title:a,_id:s})=>`<li class="books-item" data-id="${s}">
          <img class="books-image" src="${r}" alt="${a}" width="343" />
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
        </li>`).join("")}N.addEventListener("click",De);async function De(e){_();const t=e.target.textContent;q(t==="All categories"?"All categories":t)}q("All categories");async function q(e){J();try{if(e==="All categories"?i=await Te():i=await Ne(e),c=i.length>y?y:i.length,x=i.length,Z.textContent=`Showing ${c} of ${x}`,!i.length){E.innerHTML='<p class="no-books-info">Sorry, there are no books in this category!</p>';return}const t=i.slice(Ae,y);E.innerHTML=ee(t),i.length>y&&Q()}catch(t){console.log(t)}}D.addEventListener("click",Oe);let V=0,U=0;function Oe(){J(),V=c,c=i.length>c+H?c+H:i.length,Z.textContent=`Showing ${c} of ${x}`,U=c;const e=i.slice(V,U);E.insertAdjacentHTML("beforeend",ee(e)),i.length>c&&Q()}E.addEventListener("click",He);function He(e){if(e.target.nodeName!=="BUTTON")return;e.target.closest("li.books-item").dataset.id}function Ve(){document.querySelector(".swiper-hero")&&ne(),document.querySelector(".feedbacks-swiper")&&se()}window.addEventListener("scroll",xe);document.addEventListener("DOMContentLoaded",Ve);X(K);K.addEventListener("change",X);I.addEventListener("click",ke);P.addEventListener("click",G);S.addEventListener("click",qe);l.booksList.addEventListener("click",ve);l.backdrop.addEventListener("click",e=>{e.target.closest(".modal-close-btn")&&Be(),e.target.closest(".backdrop")&&we(e),e.target.closest(".book-modal-btn-plus")&&Ee(),e.target.closest(".book-modal-btn-minus")&&Le(),e.target.closest(".book-modal-add-btn")&&Ce(),e.target.closest(".book-modal-buy-btn")&&Se(e)});l.backdrop.addEventListener("input",e=>{e.target.closest(".book-count")&&Me(e)});
//# sourceMappingURL=index.js.map
