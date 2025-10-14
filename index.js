import{S as x,N as q,P as j,K as U,i as z,A as te,a as h}from"./assets/vendor-DskxEx1y.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();new x(".events-swiper",{modules:[q,j],slidesPerView:1,spaceBetween:16,pagination:{el:".events-swiper-dots"},navigation:{nextEl:".events-btn-next",prevEl:".events-btn-prev"},breakpoints:{768:{autoHeight:!0,slidesPerView:2,spaceBetween:24},1440:{autoHeight:!0,slidesPerView:3,spaceBetween:24}}});function oe(){const e=new x(".swiper-hero",{modules:[q,U],slidesPerView:1,loop:!1,navigation:{nextEl:".hero-swiper-button-next",prevEl:".hero-swiper-button-prev",disabledClass:"hero-swiper-button-disabled"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{0:{spaceBetween:16},768:{spaceBetween:32},1440:{spaceBetween:64}}});function t(){const o=document.querySelector(".hero-swiper-button-prev"),a=document.querySelector(".hero-swiper-button-next");o&&(o.disabled=e.isBeginning),a&&(a.disabled=e.isEnd)}return e.on("init",t),e.on("slideChange",t),e}const g={feedbacksSwiper:document.querySelector(".feedbacks-swiper"),feedbacksNextBtn:document.querySelector(".feedbacks-btn-next"),feedbacksPrevBtn:document.querySelector(".feedbacks-btn-prev"),feedbacksPagination:document.querySelector(".feedbacks-pagination")},ne=()=>{if(!g.feedbacksSwiper)return;const e=new x(g.feedbacksSwiper,{modules:[q,U,j],slidesPerView:1,spaceBetween:24,keyboard:{enabled:!0},autoHeight:!1,navigation:{nextEl:g.feedbacksNextBtn,prevEl:g.feedbacksPrevBtn},pagination:{el:g.feedbacksPagination,clickable:!0,bulletClass:"feedbacks-bullet",bulletActiveClass:"feedbacks-bullet-active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{init(t){t.navigation.prevEl.disabled=t.isBeginning,t.navigation.nextEl.disabled=t.isEnd},slideChange(t){t.navigation.prevEl.disabled=t.isBeginning,t.navigation.nextEl.disabled=t.isEnd},reachBeginning(t){t.navigation.prevEl.disabled=!0},fromEdge(t){t.navigation.prevEl.disabled=!1,t.navigation.nextEl.disabled=!1},reachEnd(t){t.navigation.nextEl.disabled=!0}}});return document.querySelectorAll(".feedbacks-btn").forEach(t=>{t.addEventListener("mouseup",o=>o.currentTarget.blur()),t.addEventListener("mouseleave",o=>o.currentTarget.blur())}),e},R=document.body,$=document.querySelector(".navbar-btn"),F=document.querySelector(".navbar-close-btn"),m=document.querySelector("ul.navbar"),K=window.matchMedia("(max-width:767px)"),d={backdrop:document.querySelector(".backdrop"),get bookModalContent(){return document.querySelector(".book-modal-content")},get bookModalCountInput(){return document.querySelector(".book-count")},booksList:document.querySelector(".books-list")};function I(){R.classList.remove("no-scroll")}function P(){R.classList.add("no-scroll")}function Y(e){e.matches?m.addEventListener("click",D):m.removeEventListener("click",D)}function D(e){ke(e)}function se(e){return e.toLowerCase().replace(/\b\w/g,t=>t.toUpperCase())}function ae(e){z.info({position:"topRight",message:e})}function re(e){z.success({position:"topRight",message:e})}function w(){return Number(d.bookModalCountInput.value)}const f=document.getElementById("modal"),T=document.getElementById("backdrop"),ie=document.getElementById("closeBtn"),ce=document.getElementById("eventTitle"),p=document.getElementById("registerForm");let C="";function le(e){C=e,ce.textContent=C,f.classList.remove("contacts-hidden"),T.classList.remove("contacts-hidden"),P(),gsap.fromTo(f,{scale:.4,opacity:0,y:-20},{scale:1,opacity:1,y:0,duration:.5,ease:"power2.out"})}function E(){gsap.to(f,{scale:.4,opacity:0,y:-20,duration:.4,ease:"power2.in",onComplete:()=>{f.classList.add("contacts-hidden"),T.classList.add("contacts-hidden"),I(),p.reset()}})}ie.addEventListener("click",E);T.addEventListener("click",E);document.addEventListener("keydown",e=>{e.key==="Escape"&&!f.classList.contains("hidden")&&E()});function de(){const t=Date.now()+2500;(function o(){confetti({particleCount:8,angle:60,spread:100,origin:{x:0},zIndex:19e3,colors:["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"]}),confetti({particleCount:8,angle:120,spread:100,origin:{x:1},zIndex:19e3,colors:["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"]}),Date.now()<t&&requestAnimationFrame(o)})()}function ue(e,t,o=10){const a=["📖","📚","📘","📙","📕"],n=["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"];for(let r=0;r<o;r++){const s=document.createElement("span");s.textContent=a[Math.floor(Math.random()*a.length)],s.style.position="fixed",s.style.left=e+"px",s.style.top=t+"px";const b=Math.random()*28+24;s.style.fontSize=b+"px",s.style.opacity=Math.random()*.7+.3,s.style.color=n[Math.floor(Math.random()*n.length)],s.style.zIndex=19e3,s.style.textShadow="1px 1px 4px rgba(0,0,0,0.4)",s.style.transformOrigin="center",document.body.appendChild(s);const u=Math.random()*Math.PI*2,y=Math.random()*250+100;gsap.to(s,{x:Math.cos(u)*y,y:Math.sin(u)*y-150,rotationX:Math.random()*360,rotationY:Math.random()*360,rotation:Math.random()*720,scale:1+Math.random()*.5,duration:.8+Math.random()*.5,ease:"power2.out",onComplete:()=>{gsap.to(s,{y:`+=${Math.random()*30-15}`,x:`+=${Math.random()*30-15}`,rotation:`+=${Math.random()*180-90}`,rotationX:`+=${Math.random()*180-90}`,rotationY:`+=${Math.random()*180-90}`,duration:.6+Math.random()*.4,ease:"sine.inOut",yoyo:!0,repeat:1,onComplete:()=>{gsap.to(s,{y:window.innerHeight-t+200,x:`+=${(Math.random()-.5)*200}`,rotationX:Math.random()*360,rotationY:Math.random()*360,rotation:Math.random()*720,scale:.8+Math.random()*.4,opacity:0,duration:2+Math.random(),ease:"power2.in",onComplete:()=>s.remove()})}})}})}}p.addEventListener("submit",e=>{e.preventDefault();const t=p.querySelector('input[name="name"]'),o=p.querySelector('input[name="email"]'),a=t.parentElement.querySelector(".error-message"),n=o.parentElement.querySelector(".error-message"),r=t.value.trim(),s=o.value.trim();[t,o].forEach(c=>c.classList.remove("error")),[a,n].forEach(c=>{c.textContent="",c.style.display="none"});let b=!1;if(r||(t.classList.add("error"),a.textContent="Please enter your name",a.style.display="block",b=!0),s||(o.classList.add("error"),n.textContent="Please enter your email",n.style.display="block",b=!0),s&&!s.includes("@")&&(o.classList.add("error"),n.textContent='Email must contain "@"',n.style.display="block",b=!0),b){Swal.fire({title:"Oops!",text:"Please fill in the required fields: Name and Email!",icon:"warning",confirmButtonText:"OK",confirmButtonColor:"#e15d05"});return}const u=e.submitter.getBoundingClientRect(),y=u.left+u.width/2,ee=u.top+u.height/2;Swal.fire({title:"SUCCESS!",html:`You have registered for: <b>${C}</b>`,icon:"success",confirmButtonText:"Great!",confirmButtonColor:"#e15d05",didOpen:()=>{ue(y,ee,11),de()}}),p.reset(),[t,o].forEach(c=>c.classList.remove("error")),[a,n].forEach(c=>{c.textContent="",c.style.display="none"}),E()});p.querySelectorAll("input").forEach(e=>{const t=e.parentElement.querySelector(".error-message");e.addEventListener("input",()=>{e.classList.remove("error"),t.textContent="",t.style.display="none"})});document.querySelectorAll(".register-btn").forEach(e=>{e.addEventListener("click",()=>{const o=e.closest(".events-swiper-slide").querySelector(".events-item-title").textContent.trim();le(o)})});function be(){d.backdrop.classList.add("is-open"),P(),document.addEventListener("keydown",G)}function k(){d.backdrop.classList.remove("is-open"),I(),document.removeEventListener("keydown",G)}const L="/project-CodeCrafters-3-js/assets/sprite-DGpfnEqE.svg";function pe(e){const t=se(e.title);d.bookModalContent.innerHTML=`
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
                  <use href="${L}#icon-chevron-down"></use>
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
                  <use href="${L}#icon-chevron-down"></use>
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
                  <use href="${L}#icon-chevron-down"></use>
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
  `,new te(".book-accordion-container",{showMultiple:!0})}const me="https://books-backend.p.goit.global/";function ge(e){return`${me}books/${e}`}async function fe(e){try{return(await h.get(ge(e))).data}catch(t){console.log(t)}}function he(){m.classList.contains("is-visible")||(m.classList.add("is-visible"),$.classList.remove("is-visible"),F.classList.toggle("is-visible"),P())}function X(){m.classList.contains("is-visible")&&(m.classList.remove("is-visible"),$.classList.add("is-visible"),F.classList.toggle("is-visible"),I())}function ke(e){const t=e.target.closest("a");if(!t)return;const o=t.getAttribute("href").substring(1),a=document.getElementById(o);a&&a.scrollIntoView({behavior:"smooth"}),X()}function G(e){e.key==="Escape"&&k()}async function ye(e){if(!e.target.closest(".books-learn-more-button"))return;const o=e.target.closest(".books-item").dataset.id;be(),pe(await fe(o))}function ve(e){e.target===e.currentTarget&&k()}function we(){k()}function Be(){d.bookModalCountInput.value=w()+1}function Ee(){w()>1&&(d.bookModalCountInput.value=w()-1)}function Le(){const e=w(),t=e>1?`В кошик додано ${e} книг`:"В кошик додана 1 книга";k(),ae(t)}function Ce(e){e.preventDefault(),k(),re("Дякуємо за покупку")}function Se(e){let t=Number(e.target.value);t<1&&(e.target.value=1),t>99&&(e.target.value=99)}h.defaults.baseURL="https://books-backend.p.goit.global/books/";const A=document.querySelector(".books-categories-list");async function Me(){return(await h.get("category-list")).data}function xe(e){const t=e.map(({list_name:o})=>{if(o!=="")return`<li class="books-categories-item">${o}</li>`}).join("");A.innerHTML=t}async function qe(){try{const e=await Me();e.unshift({list_name:"All categories"}),xe(e)}catch(e){console.log(e)}}qe();const $e=document.querySelector(".books-categories-title-wrapper");$e.addEventListener("click",W);function W(){A.classList.toggle("show-books-categories-list")}const N=document.querySelector(".books-show-more-button");function _(){N.classList.add("books-show-more-button-display")}function Q(){N.classList.remove("books-show-more-button-display")}const B=document.querySelector(".books-list"),v=window.innerWidth>=768?24:10,J=document.querySelector(".books-number-info");let l=0,S=0;const O=4,Fe=0;let i=[];async function Ie(){return(await h.get("top-books")).data.flatMap(a=>a.books)}async function Pe(e){return(await h.get(`category?category=${e}`)).data}function Z(e){return e.map(({author:o,book_image:a,price:n,title:r,_id:s})=>`<li class="books-item" data-id="${s}">
          <img class="books-image" src="${a}" alt="${r}" width="343" />
          <div class="book-info">
            <div class="book-title-author">
              <p class="book-title">${r}</p>
              <p class="book-author">${o}</p>
            </div>
            <p class="book-price">$${n}</p>
          </div>
          <button class="books-learn-more-button" type="button">
            Learn More
          </button>
        </li>`).join("")}A.addEventListener("click",Te);async function Te(e){W();const t=e.target.textContent;M(t==="All categories"?"All categories":t)}M("All categories");async function M(e){Q();try{if(e==="All categories"?i=await Ie():i=await Pe(e),l=i.length>v?v:i.length,S=i.length,J.textContent=`Showing ${l} of ${S}`,!i.length){B.innerHTML='<p class="no-books-info">Sorry, there are no books in this category!</p>';return}const t=i.slice(Fe,v);B.innerHTML=Z(t),i.length>v&&_()}catch(t){console.log(t)}}N.addEventListener("click",Ae);let H=0,V=0;function Ae(){Q(),H=l,l=i.length>l+O?l+O:i.length,J.textContent=`Showing ${l} of ${S}`,V=l;const e=i.slice(H,V);B.insertAdjacentHTML("beforeend",Z(e)),i.length>l&&_()}B.addEventListener("click",Ne);function Ne(e){if(e.target.nodeName!=="BUTTON")return;e.target.closest("li.books-item").dataset.id}function De(){document.querySelector(".swiper-hero")&&oe(),document.querySelector(".feedbacks-swiper")&&ne()}document.addEventListener("DOMContentLoaded",De);Y(K);K.addEventListener("change",Y);$.addEventListener("click",he);F.addEventListener("click",X);d.booksList.addEventListener("click",ye);d.backdrop.addEventListener("click",e=>{e.target.closest(".modal-close-btn")&&we(),e.target.closest(".backdrop")&&ve(e),e.target.closest(".book-modal-btn-plus")&&Be(),e.target.closest(".book-modal-btn-minus")&&Ee(),e.target.closest(".book-modal-add-btn")&&Le(),e.target.closest(".book-modal-buy-btn")&&Ce(e)});d.backdrop.addEventListener("input",e=>{e.target.closest(".book-count")&&Se(e)});
//# sourceMappingURL=index.js.map
