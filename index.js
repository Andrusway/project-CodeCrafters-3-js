import{S as T,N,P as K,K as X,i as C,A as re,a as h}from"./assets/vendor-D66hK4hx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();new T(".events-swiper",{modules:[N,K],slidesPerView:1,spaceBetween:16,pagination:{el:".events-swiper-dots"},navigation:{nextEl:".events-btn-next",prevEl:".events-btn-prev"},breakpoints:{768:{autoHeight:!0,slidesPerView:2,spaceBetween:24},1440:{autoHeight:!0,slidesPerView:3,spaceBetween:24}}});function ie(){const e=new T(".swiper-hero",{modules:[N,X],slidesPerView:1,loop:!1,navigation:{nextEl:".hero-swiper-button-next",prevEl:".hero-swiper-button-prev",disabledClass:"hero-swiper-button-disabled"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{0:{spaceBetween:16},768:{spaceBetween:32},1440:{spaceBetween:64}}});function t(){const o=document.querySelector(".hero-swiper-button-prev"),r=document.querySelector(".hero-swiper-button-next");o&&(o.disabled=e.isBeginning),r&&(r.disabled=e.isEnd)}return e.on("init",t),e.on("slideChange",t),e}const m={feedbacksSwiper:document.querySelector(".feedbacks-swiper"),feedbacksNextBtn:document.querySelector(".feedbacks-btn-next"),feedbacksPrevBtn:document.querySelector(".feedbacks-btn-prev"),feedbacksPagination:document.querySelector(".feedbacks-pagination")},ce=()=>{if(!m.feedbacksSwiper)return;const e=new T(m.feedbacksSwiper,{modules:[N,X,K],slidesPerView:1,spaceBetween:24,keyboard:{enabled:!0},autoHeight:!1,navigation:{nextEl:m.feedbacksNextBtn,prevEl:m.feedbacksPrevBtn},pagination:{el:m.feedbacksPagination,clickable:!0,bulletClass:"feedbacks-bullet",bulletActiveClass:"feedbacks-bullet-active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{init(t){t.navigation.prevEl.disabled=t.isBeginning,t.navigation.nextEl.disabled=t.isEnd},slideChange(t){t.navigation.prevEl.disabled=t.isBeginning,t.navigation.nextEl.disabled=t.isEnd},reachBeginning(t){t.navigation.prevEl.disabled=!0},fromEdge(t){t.navigation.prevEl.disabled=!1,t.navigation.nextEl.disabled=!1},reachEnd(t){t.navigation.nextEl.disabled=!0}}});return document.querySelectorAll(".feedbacks-btn").forEach(t=>{t.addEventListener("mouseup",o=>o.currentTarget.blur()),t.addEventListener("mouseleave",o=>o.currentTarget.blur())}),e},W=document.body,P=document.querySelector(".navbar-btn"),D=document.querySelector(".navbar-close-btn"),b=document.querySelector("ul.navbar"),G=window.matchMedia("(max-width:767px)"),q=document.querySelector(".arrow-btn-nav"),l={backdrop:document.querySelector(".backdrop"),get bookModalContent(){return document.querySelector(".book-modal-content")},get bookModalCountInput(){return document.querySelector(".book-count")},booksList:document.querySelector(".books-list")};function O(){W.classList.remove("no-scroll")}function H(){W.classList.add("no-scroll")}function _(e){e.matches?b.addEventListener("click",U):b.removeEventListener("click",U)}function U(e){Le(e)}function le(e){return e.toLowerCase().replace(/\b\w/g,t=>t.toUpperCase())}function de(e){C.info({position:"topRight",message:e})}function ue(e){C.success({position:"topRight",message:e})}function E(){return Number(l.bookModalCountInput.value)}const g=document.getElementById("modal"),L=document.getElementById("backdrop"),be=document.getElementById("closeBtn"),pe=document.getElementById("eventTitle"),u=document.getElementById("registerForm");let $="";function me(e){$=e,pe.textContent=$,g.classList.remove("contacts-hidden"),L.classList.remove("contacts-hidden"),H(),gsap.fromTo(g,{y:-window.innerHeight,opacity:0,scale:1},{y:0,opacity:1,duration:.3,ease:"linear"})}function M(){he(),gsap.to(g,{y:-window.innerHeight,opacity:0,duration:.3,ease:"linear",onComplete:()=>{g.classList.add("contacts-hidden"),L.classList.add("contacts-hidden"),O(),u.reset(),S()}})}u.querySelectorAll("input, textarea").forEach(e=>{e.addEventListener("input",()=>{S()})});function S(){u.querySelectorAll("input, textarea").forEach(t=>{t.classList.remove("error");const o=t.parentElement.querySelector(".error-message");o&&(o.textContent="",o.style.display="none")})}be.addEventListener("click",M);L.addEventListener("click",e=>{e.target===L&&M()});document.addEventListener("keydown",e=>{e.key==="Escape"&&!g.classList.contains("contacts-hidden")&&M()});u.addEventListener("submit",e=>{e.preventDefault();const t=u.querySelector('input[name="name"]'),o=u.querySelector('input[name="email"]'),r=t.parentElement.querySelector(".error-message"),s=o.parentElement.querySelector(".error-message"),a=t.value.trim(),n=o.value.trim();S();let p=!1;if(a||(t.classList.add("error"),r.textContent="Please enter your name",r.style.display="block",p=!0),n||(o.classList.add("error"),s.textContent="Please enter your email",s.style.display="block",p=!0),p){Swal.fire({title:"Oops!",text:"Please fill in the required fields: Name and Email!",icon:"warning",confirmButtonText:"OK",confirmButtonColor:"#e15d05"});return}const d=e.submitter.getBoundingClientRect(),y=d.left+d.width/2,ae=d.top+d.height/2;Swal.fire({title:"SUCCESS!",html:`You have registered for: <b>${$}</b>`,icon:"success",confirmButtonText:"Great!",confirmButtonColor:"#e15d05",didOpen:()=>{ge(y,ae,11),fe()}}),u.reset(),S(),M()});let w=null,F=[],B=!1;function fe(){const t=Date.now()+2500;B=!0;function o(){B&&(confetti({particleCount:8,angle:60,spread:100,origin:{x:0},zIndex:19e3,colors:["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"]}),confetti({particleCount:8,angle:120,spread:100,origin:{x:1},zIndex:19e3,colors:["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"]}),Date.now()<t&&B&&(w=requestAnimationFrame(o)))}o()}function ge(e,t,o=2){const r=["📘","📙","📕"],s=["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"];for(let a=0;a<o;a++){const n=document.createElement("span");n.textContent=r[Math.floor(Math.random()*r.length)],n.style.position="fixed",n.style.left=e+"px",n.style.top=t+"px";const p=Math.random()*28+24;n.style.fontSize=p+"px",n.style.opacity=Math.random()*.7+.3,n.style.color=s[Math.floor(Math.random()*s.length)],n.style.zIndex=19e3,n.style.textShadow="1px 1px 4px rgba(0,0,0,0.4)",n.style.transformOrigin="center",document.body.appendChild(n),F.push(n);const d=Math.random()*Math.PI*2,y=Math.random()*250+100;gsap.to(n,{x:Math.cos(d)*y,y:Math.sin(d)*y-150,rotationX:Math.random()*360,rotationY:Math.random()*360,rotation:Math.random()*720,scale:1+Math.random()*.5,duration:.8+Math.random()*.5,ease:"power2.out",onComplete:()=>{gsap.to(n,{y:`+=${Math.random()*30-15}`,x:`+=${Math.random()*30-15}`,rotation:`+=${Math.random()*180-90}`,rotationX:`+=${Math.random()*180-90}`,rotationY:`+=${Math.random()*180-90}`,duration:.6+Math.random()*.4,ease:"sine.inOut",yoyo:!0,repeat:1,onComplete:()=>{gsap.to(n,{y:window.innerHeight-t+200,x:`+=${(Math.random()-.5)*200}`,rotationX:Math.random()*360,rotationY:Math.random()*360,rotation:Math.random()*720,scale:.8+Math.random()*.4,opacity:0,duration:2+Math.random(),ease:"power2.in",onComplete:()=>n.remove()})}})}})}}function he(){B=!1,w&&(cancelAnimationFrame(w),w=null),confetti&&typeof confetti.reset=="function"&&confetti.reset(),F.forEach(e=>{gsap.killTweensOf(e),e.parentNode&&e.parentNode.removeChild(e)}),F=[]}document.querySelectorAll(".register-btn").forEach(e=>{e.addEventListener("click",()=>{const o=e.closest(".events-swiper-slide").querySelector(".events-item-title").textContent.trim();me(o)})});function ke(){l.backdrop.classList.add("is-open"),H(),document.addEventListener("keydown",J)}function k(){l.backdrop.classList.remove("is-open"),O(),document.removeEventListener("keydown",J)}const x="/project-CodeCrafters-3-js/assets/sprite-DGpfnEqE.svg";function ye(e){const t=le(e.title);l.bookModalContent.innerHTML=`
      <img
        class="book-modal-cover-img"
        src="${e.book_image}"
        alt="${t} cover"
        width="310"
        height="466"
      />

      <div class="book-modal-product-info">
        <header>
          <h2 class="book-modal-title" id="book-modal-title">${t}</h2>
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
                  <use href="${x}#icon-chevron-down"></use>
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
                  <use href="${x}#icon-chevron-down"></use>
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
                  <use href="${x}#icon-chevron-down"></use>
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
  `,new re(".book-accordion-container",{showMultiple:!0})}const ve="https://books-backend.p.goit.global/";function we(e){return`${ve}books/${e}`}async function Be(e){try{return(await h.get(we(e))).data}catch(t){console.log(t)}}function Ee(){b.classList.contains("is-visible")||(b.classList.add("is-visible"),P.classList.remove("is-visible"),D.classList.toggle("is-visible"),H())}function Q(){b.classList.contains("is-visible")&&(b.classList.remove("is-visible"),P.classList.add("is-visible"),D.classList.toggle("is-visible"),O())}function Le(e){const t=e.target.closest("a");if(!t)return;const o=t.getAttribute("href").substring(1),r=document.getElementById(o);r&&r.scrollIntoView({behavior:"smooth"}),Q()}function J(e){e.key==="Escape"&&k()}async function Se(e){if(!e.target.closest(".books-learn-more-button"))return;const o=e.target.closest(".books-item").dataset.id;ke(),ye(await Be(o))}function Ce(e){e.target===e.currentTarget&&k()}function Me(){k()}function xe(){l.bookModalCountInput.value=E()+1}function qe(){E()>1&&(l.bookModalCountInput.value=E()-1)}function $e(){const e=E(),t=e>1?`В кошик додано ${e} книг`:"В кошик додана 1 книга";k(),de(t)}function Fe(e){e.preventDefault(),k(),ue("Дякуємо за покупку")}function Ie(e){let t=Number(e.target.value);t<1&&(e.target.value=1),t>99&&(e.target.value=99)}function Ae(){window.scrollY>600?q.classList.add("is-visible-arrow-btn"):q.classList.remove("is-visible-arrow-btn")}function Te(){window.scrollTo({top:0,behavior:"smooth"})}h.defaults.baseURL="https://books-backend.p.goit.global/books/";const V=document.querySelector(".books-categories-list");async function Ne(){return(await h.get("category-list")).data}function Pe(e){const t=e.map(({list_name:o})=>{if(o!=="")return`<li class="books-categories-item">${o}</li>`}).join("");V.innerHTML=t}async function De(){try{const e=await Ne();e.unshift({list_name:"All categories"}),Pe(e)}catch(e){console.log(e)}}De();const Oe=document.querySelector(".books-categories-title-wrapper");Oe.addEventListener("click",Z);function Z(){V.classList.toggle("show-books-categories-list")}const R=document.querySelector(".books-show-more-button");function ee(){R.classList.add("books-show-more-button-display")}function te(){R.classList.remove("books-show-more-button-display")}const oe=document.querySelector(".loader");function He(){oe.classList.add("loader-show")}function Ve(){oe.classList.remove("loader-show")}const f=document.querySelector(".books-list"),v=window.innerWidth>=768?24:10,ne=document.querySelector(".books-number-info");let c=0,I=0;const j=4,Re=0;let i=[];async function Ue(){return(await h.get("top-books")).data.flatMap(r=>r.books)}async function je(e){return(await h.get(`category?category=${e}`)).data}function se(e){return e.map(({author:o,book_image:r,price:s,title:a,_id:n})=>`<li class="books-item" data-id="${n}">
          <img class="books-image" src="${r}" alt="${a}" width="343" />
          <div class="book-info">
            <div class="book-title-author">
              <p class="book-title">${a}</p>
              <p class="book-author">${o}</p>
            </div>
            <p class="book-price">$${s}</p>
          </div>
          <button class="books-learn-more-button" type="button">
            Learn More
          </button>
        </li>`).join("")}V.addEventListener("click",Ye);async function Ye(e){Z();const t=e.target.textContent;A(t==="All categories"?"All categories":t)}A("All categories");async function A(e){f.innerHTML="",te(),He();try{if(e==="All categories"?i=await Ue():i=await je(e),c=i.length>v?v:i.length,I=i.length,ne.textContent=`Showing ${c} of ${I}`,!i.length){f.innerHTML='<p class="no-books-info">Sorry, there are no books in this category!</p>';return}const t=i.slice(Re,v);f.innerHTML=se(t),i.length>v&&ee()}catch(t){console.log(t),C.show({color:"red",message:"❌ Sorry, an error occurred.",position:"topRight",maxWidth:"450px"})}finally{Ve()}}R.addEventListener("click",ze);let Y=0,z=0;function ze(){te(),Y=c,c=i.length>c+j?c+j:i.length,ne.textContent=`Showing ${c} of ${I}`,z=c;const e=i.slice(Y,z);f.insertAdjacentHTML("beforeend",se(e)),i.length>c&&ee()}f.addEventListener("click",Ke);function Ke(e){if(e.target.nodeName!=="BUTTON")return;e.target.closest("li.books-item").dataset.id}const Xe=document.querySelector(".footer-form");Xe.addEventListener("submit",We);function We(e){e.preventDefault(),C.show({color:"green",message:"You have successfully registered!",position:"topRight"}),e.target.reset()}function Ge(){document.querySelector(".swiper-hero")&&ie(),document.querySelector(".feedbacks-swiper")&&ce()}window.addEventListener("scroll",Ae);document.addEventListener("DOMContentLoaded",Ge);_(G);G.addEventListener("change",_);P.addEventListener("click",Ee);D.addEventListener("click",Q);q.addEventListener("click",Te);l.booksList.addEventListener("click",Se);l.backdrop.addEventListener("click",e=>{e.target.closest(".modal-close-btn")&&Me(),e.target.closest(".backdrop")&&Ce(e),e.target.closest(".book-modal-btn-plus")&&xe(),e.target.closest(".book-modal-btn-minus")&&qe(),e.target.closest(".book-modal-add-btn")&&$e(),e.target.closest(".book-modal-buy-btn")&&Fe(e)});l.backdrop.addEventListener("input",e=>{e.target.closest(".book-count")&&Ie(e)});
//# sourceMappingURL=index.js.map
