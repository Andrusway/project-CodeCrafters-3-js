import{S as F,N as I,P as j,K as Y,i as L,A as ne,a as h}from"./assets/vendor-D66hK4hx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();new F(".events-swiper",{modules:[I,j],slidesPerView:1,spaceBetween:16,pagination:{el:".events-swiper-dots"},navigation:{nextEl:".events-btn-next",prevEl:".events-btn-prev"},breakpoints:{768:{autoHeight:!0,slidesPerView:2,spaceBetween:24},1440:{autoHeight:!0,slidesPerView:3,spaceBetween:24}}});function se(){const e=new F(".swiper-hero",{modules:[I,Y],slidesPerView:1,loop:!1,navigation:{nextEl:".hero-swiper-button-next",prevEl:".hero-swiper-button-prev",disabledClass:"hero-swiper-button-disabled"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{0:{spaceBetween:16},768:{spaceBetween:32},1440:{spaceBetween:64}}});function t(){const o=document.querySelector(".hero-swiper-button-prev"),r=document.querySelector(".hero-swiper-button-next");o&&(o.disabled=e.isBeginning),r&&(r.disabled=e.isEnd)}return e.on("init",t),e.on("slideChange",t),e}const m={feedbacksSwiper:document.querySelector(".feedbacks-swiper"),feedbacksNextBtn:document.querySelector(".feedbacks-btn-next"),feedbacksPrevBtn:document.querySelector(".feedbacks-btn-prev"),feedbacksPagination:document.querySelector(".feedbacks-pagination")},ae=()=>{if(!m.feedbacksSwiper)return;const e=new F(m.feedbacksSwiper,{modules:[I,Y,j],slidesPerView:1,spaceBetween:24,keyboard:{enabled:!0},autoHeight:!1,navigation:{nextEl:m.feedbacksNextBtn,prevEl:m.feedbacksPrevBtn},pagination:{el:m.feedbacksPagination,clickable:!0,bulletClass:"feedbacks-bullet",bulletActiveClass:"feedbacks-bullet-active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{init(t){t.navigation.prevEl.disabled=t.isBeginning,t.navigation.nextEl.disabled=t.isEnd},slideChange(t){t.navigation.prevEl.disabled=t.isBeginning,t.navigation.nextEl.disabled=t.isEnd},reachBeginning(t){t.navigation.prevEl.disabled=!0},fromEdge(t){t.navigation.prevEl.disabled=!1,t.navigation.nextEl.disabled=!1},reachEnd(t){t.navigation.nextEl.disabled=!0}}});return document.querySelectorAll(".feedbacks-btn").forEach(t=>{t.addEventListener("mouseup",o=>o.currentTarget.blur()),t.addEventListener("mouseleave",o=>o.currentTarget.blur())}),e},z=document.body,P=document.querySelector(".navbar-btn"),T=document.querySelector(".navbar-close-btn"),b=document.querySelector("ul.navbar"),K=window.matchMedia("(max-width:767px)"),M=document.querySelector(".arrow-btn-nav"),l={backdrop:document.querySelector(".backdrop"),get bookModalContent(){return document.querySelector(".book-modal-content")},get bookModalCountInput(){return document.querySelector(".book-count")},booksList:document.querySelector(".books-list")};function A(){z.classList.remove("no-scroll")}function N(){z.classList.add("no-scroll")}function X(e){e.matches?b.addEventListener("click",H):b.removeEventListener("click",H)}function H(e){ve(e)}function re(e){return e.toLowerCase().replace(/\b\w/g,t=>t.toUpperCase())}function ie(e){L.info({position:"topRight",message:e})}function ce(e){L.success({position:"topRight",message:e})}function w(){return Number(l.bookModalCountInput.value)}const f=document.getElementById("modal"),B=document.getElementById("backdrop"),le=document.getElementById("closeBtn"),de=document.getElementById("eventTitle"),u=document.getElementById("registerForm");let x="";function ue(e){x=e,de.textContent=x,f.classList.remove("contacts-hidden"),B.classList.remove("contacts-hidden"),N(),gsap.fromTo(f,{scale:.4,opacity:0,y:-20},{scale:1,opacity:1,y:0,duration:.5,ease:"power2.out"})}function S(){gsap.to(f,{scale:.4,opacity:0,y:-20,duration:.4,ease:"power2.in",onComplete:()=>{f.classList.add("contacts-hidden"),B.classList.add("contacts-hidden"),A(),u.reset(),E()}})}u.querySelectorAll("input, textarea").forEach(e=>{e.addEventListener("input",()=>{E()})});function E(){u.querySelectorAll("input, textarea").forEach(t=>{t.classList.remove("error");const o=t.parentElement.querySelector(".error-message");o&&(o.textContent="",o.style.display="none")})}le.addEventListener("click",S);B.addEventListener("click",e=>{e.target===B&&S()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!f.classList.contains("hidden")&&S()});u.addEventListener("submit",e=>{e.preventDefault();const t=u.querySelector('input[name="name"]'),o=u.querySelector('input[name="email"]'),r=t.parentElement.querySelector(".error-message"),n=o.parentElement.querySelector(".error-message"),a=t.value.trim(),s=o.value.trim();E();let p=!1;if(a||(t.classList.add("error"),r.textContent="Please enter your name",r.style.display="block",p=!0),s||(o.classList.add("error"),n.textContent="Please enter your email",n.style.display="block",p=!0),p){Swal.fire({title:"Oops!",text:"Please fill in the required fields: Name and Email!",icon:"warning",confirmButtonText:"OK",confirmButtonColor:"#e15d05"});return}const d=e.submitter.getBoundingClientRect(),y=d.left+d.width/2,oe=d.top+d.height/2;Swal.fire({title:"SUCCESS!",html:`You have registered for: <b>${x}</b>`,icon:"success",confirmButtonText:"Great!",confirmButtonColor:"#e15d05",didOpen:()=>{pe(y,oe,11),be()}}),u.reset(),E(),S()});function be(){const t=Date.now()+2500;(function o(){confetti({particleCount:8,angle:60,spread:100,origin:{x:0},zIndex:19e3,colors:["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"]}),confetti({particleCount:8,angle:120,spread:100,origin:{x:1},zIndex:19e3,colors:["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"]}),Date.now()<t&&requestAnimationFrame(o)})()}function pe(e,t,o=10){const r=["📖","📚","📘","📙","📕"],n=["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"];for(let a=0;a<o;a++){const s=document.createElement("span");s.textContent=r[Math.floor(Math.random()*r.length)],s.style.position="fixed",s.style.left=e+"px",s.style.top=t+"px";const p=Math.random()*28+24;s.style.fontSize=p+"px",s.style.opacity=Math.random()*.7+.3,s.style.color=n[Math.floor(Math.random()*n.length)],s.style.zIndex=19e3,s.style.textShadow="1px 1px 4px rgba(0,0,0,0.4)",s.style.transformOrigin="center",document.body.appendChild(s);const d=Math.random()*Math.PI*2,y=Math.random()*250+100;gsap.to(s,{x:Math.cos(d)*y,y:Math.sin(d)*y-150,rotationX:Math.random()*360,rotationY:Math.random()*360,rotation:Math.random()*720,scale:1+Math.random()*.5,duration:.8+Math.random()*.5,ease:"power2.out",onComplete:()=>{gsap.to(s,{y:`+=${Math.random()*30-15}`,x:`+=${Math.random()*30-15}`,rotation:`+=${Math.random()*180-90}`,rotationX:`+=${Math.random()*180-90}`,rotationY:`+=${Math.random()*180-90}`,duration:.6+Math.random()*.4,ease:"sine.inOut",yoyo:!0,repeat:1,onComplete:()=>{gsap.to(s,{y:window.innerHeight-t+200,x:`+=${(Math.random()-.5)*200}`,rotationX:Math.random()*360,rotationY:Math.random()*360,rotation:Math.random()*720,scale:.8+Math.random()*.4,opacity:0,duration:2+Math.random(),ease:"power2.in",onComplete:()=>s.remove()})}})}})}}document.querySelectorAll(".register-btn").forEach(e=>{e.addEventListener("click",()=>{const o=e.closest(".events-swiper-slide").querySelector(".events-item-title").textContent.trim();ue(o)})});function me(){l.backdrop.classList.add("is-open"),N(),document.addEventListener("keydown",G)}function k(){l.backdrop.classList.remove("is-open"),A(),document.removeEventListener("keydown",G)}const C="/project-CodeCrafters-3-js/assets/sprite-DGpfnEqE.svg";function ge(e){const t=re(e.title);l.bookModalContent.innerHTML=`
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
  `,new ne(".book-accordion-container",{showMultiple:!0})}const fe="https://books-backend.p.goit.global/";function he(e){return`${fe}books/${e}`}async function ke(e){try{return(await h.get(he(e))).data}catch(t){console.log(t)}}function ye(){b.classList.contains("is-visible")||(b.classList.add("is-visible"),P.classList.remove("is-visible"),T.classList.toggle("is-visible"),N())}function W(){b.classList.contains("is-visible")&&(b.classList.remove("is-visible"),P.classList.add("is-visible"),T.classList.toggle("is-visible"),A())}function ve(e){const t=e.target.closest("a");if(!t)return;const o=t.getAttribute("href").substring(1),r=document.getElementById(o);r&&r.scrollIntoView({behavior:"smooth"}),W()}function G(e){e.key==="Escape"&&k()}async function we(e){if(!e.target.closest(".books-learn-more-button"))return;const o=e.target.closest(".books-item").dataset.id;me(),ge(await ke(o))}function Be(e){e.target===e.currentTarget&&k()}function Ee(){k()}function Le(){l.bookModalCountInput.value=w()+1}function Se(){w()>1&&(l.bookModalCountInput.value=w()-1)}function Ce(){const e=w(),t=e>1?`В кошик додано ${e} книг`:"В кошик додана 1 книга";k(),ie(t)}function Me(e){e.preventDefault(),k(),ce("Дякуємо за покупку")}function xe(e){let t=Number(e.target.value);t<1&&(e.target.value=1),t>99&&(e.target.value=99)}function qe(){window.scrollY>600?M.classList.add("is-visible-arrow-btn"):M.classList.remove("is-visible-arrow-btn")}function $e(){window.scrollTo({top:0,behavior:"smooth"})}h.defaults.baseURL="https://books-backend.p.goit.global/books/";const D=document.querySelector(".books-categories-list");async function Fe(){return(await h.get("category-list")).data}function Ie(e){const t=e.map(({list_name:o})=>{if(o!=="")return`<li class="books-categories-item">${o}</li>`}).join("");D.innerHTML=t}async function Pe(){try{const e=await Fe();e.unshift({list_name:"All categories"}),Ie(e)}catch(e){console.log(e)}}Pe();const Te=document.querySelector(".books-categories-title-wrapper");Te.addEventListener("click",_);function _(){D.classList.toggle("show-books-categories-list")}const O=document.querySelector(".books-show-more-button");function Q(){O.classList.add("books-show-more-button-display")}function J(){O.classList.remove("books-show-more-button-display")}const Z=document.querySelector(".loader");function Ae(){Z.classList.add("loader-show")}function Ne(){Z.classList.remove("loader-show")}const g=document.querySelector(".books-list"),v=window.innerWidth>=768?24:10,ee=document.querySelector(".books-number-info");let c=0,q=0;const V=4,De=0;let i=[];async function Oe(){return(await h.get("top-books")).data.flatMap(r=>r.books)}async function He(e){return(await h.get(`category?category=${e}`)).data}function te(e){return e.map(({author:o,book_image:r,price:n,title:a,_id:s})=>`<li class="books-item" data-id="${s}">
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
        </li>`).join("")}D.addEventListener("click",Ve);async function Ve(e){_();const t=e.target.textContent;$(t==="All categories"?"All categories":t)}$("All categories");async function $(e){g.innerHTML="",J(),Ae();try{if(e==="All categories"?i=await Oe():i=await He(e),c=i.length>v?v:i.length,q=i.length,ee.textContent=`Showing ${c} of ${q}`,!i.length){g.innerHTML='<p class="no-books-info">Sorry, there are no books in this category!</p>';return}const t=i.slice(De,v);g.innerHTML=te(t),i.length>v&&Q()}catch(t){console.log(t),L.show({color:"red",message:"❌ Sorry, an error occurred.",position:"topRight",maxWidth:"450px"})}finally{Ne()}}O.addEventListener("click",Ue);let U=0,R=0;function Ue(){J(),U=c,c=i.length>c+V?c+V:i.length,ee.textContent=`Showing ${c} of ${q}`,R=c;const e=i.slice(U,R);g.insertAdjacentHTML("beforeend",te(e)),i.length>c&&Q()}g.addEventListener("click",Re);function Re(e){if(e.target.nodeName!=="BUTTON")return;e.target.closest("li.books-item").dataset.id}const je=document.querySelector(".footer-form");je.addEventListener("submit",Ye);function Ye(e){e.preventDefault(),L.show({color:"green",message:"You have successfully registered!",position:"topRight"}),e.target.reset()}function ze(){document.querySelector(".swiper-hero")&&se(),document.querySelector(".feedbacks-swiper")&&ae()}window.addEventListener("scroll",qe);document.addEventListener("DOMContentLoaded",ze);X(K);K.addEventListener("change",X);P.addEventListener("click",ye);T.addEventListener("click",W);M.addEventListener("click",$e);l.booksList.addEventListener("click",we);l.backdrop.addEventListener("click",e=>{e.target.closest(".modal-close-btn")&&Ee(),e.target.closest(".backdrop")&&Be(e),e.target.closest(".book-modal-btn-plus")&&Le(),e.target.closest(".book-modal-btn-minus")&&Se(),e.target.closest(".book-modal-add-btn")&&Ce(),e.target.closest(".book-modal-buy-btn")&&Me(e)});l.backdrop.addEventListener("input",e=>{e.target.closest(".book-count")&&xe(e)});
//# sourceMappingURL=index.js.map
