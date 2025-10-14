import{S as x,N as q,P as V,K as U,i as z,A as Z,a as h}from"./assets/vendor-DskxEx1y.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();new x(".events-swiper",{modules:[q,V],slidesPerView:1,spaceBetween:16,autoHeight:!0,pagination:{el:".events-swiper-dots"},navigation:{nextEl:".events-btn-next",prevEl:".events-btn-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24}}});function ee(){const e=new x(".swiper-hero",{modules:[q,U],slidesPerView:1,loop:!1,navigation:{nextEl:".hero-swiper-button-next",prevEl:".hero-swiper-button-prev",disabledClass:"hero-swiper-button-disabled"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{0:{spaceBetween:16},768:{spaceBetween:32},1440:{spaceBetween:64}}});function t(){const o=document.querySelector(".hero-swiper-button-prev"),a=document.querySelector(".hero-swiper-button-next");o&&(o.disabled=e.isBeginning),a&&(a.disabled=e.isEnd)}return e.on("init",t),e.on("slideChange",t),e}const g={feedbacksSwiper:document.querySelector(".feedbacks-swiper"),feedbacksNextBtn:document.querySelector(".feedbacks-btn-next"),feedbacksPrevBtn:document.querySelector(".feedbacks-btn-prev"),feedbacksPagination:document.querySelector(".feedbacks-pagination")},te=()=>{if(!g.feedbacksSwiper)return;const e=new x(g.feedbacksSwiper,{modules:[q,U,V],slidesPerView:1,spaceBetween:24,keyboard:{enabled:!0},autoHeight:!1,navigation:{nextEl:g.feedbacksNextBtn,prevEl:g.feedbacksPrevBtn},pagination:{el:g.feedbacksPagination,clickable:!0,bulletClass:"feedbacks-bullet",bulletActiveClass:"feedbacks-bullet-active"},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{init(t){t.navigation.prevEl.disabled=t.isBeginning,t.navigation.nextEl.disabled=t.isEnd},slideChange(t){t.navigation.prevEl.disabled=t.isBeginning,t.navigation.nextEl.disabled=t.isEnd},reachBeginning(t){t.navigation.prevEl.disabled=!0},fromEdge(t){t.navigation.prevEl.disabled=!1,t.navigation.nextEl.disabled=!1},reachEnd(t){t.navigation.nextEl.disabled=!0}}});return document.querySelectorAll(".feedbacks-btn").forEach(t=>{t.addEventListener("mouseup",o=>o.currentTarget.blur()),t.addEventListener("mouseleave",o=>o.currentTarget.blur())}),e},$=document.body,F=document.querySelector(".navbar-btn"),I=document.querySelector(".navbar-close-btn"),m=document.querySelector("ul.navbar"),R=window.matchMedia("(max-width:767px)"),d={backdrop:document.querySelector(".backdrop"),get bookModalContent(){return document.querySelector(".book-modal-content")},get bookModalCountInput(){return document.querySelector(".book-count")},booksList:document.querySelector(".books-list")};function E(){$.classList.toggle("no-scroll")}function j(e){e.matches?m.addEventListener("click",N):m.removeEventListener("click",N)}function N(e){fe(e)}function oe(e){return e.toLowerCase().replace(/\b\w/g,t=>t.toUpperCase())}function ne(e){z.info({position:"topRight",message:e})}function se(e){z.success({position:"topRight",message:e})}function w(){return Number(refs.bookModalCountInput.value)}const f=document.getElementById("modal"),P=document.getElementById("backdrop"),ae=document.getElementById("closeBtn"),re=document.getElementById("eventTitle"),p=document.getElementById("registerForm");let C="";function ie(e){C=e,re.textContent=C,f.classList.remove("contacts-hidden"),P.classList.remove("contacts-hidden"),E(),gsap.fromTo(f,{scale:.4,opacity:0,y:-20},{scale:1,opacity:1,y:0,duration:.5,ease:"power2.out"})}function L(){gsap.to(f,{scale:.4,opacity:0,y:-20,duration:.4,ease:"power2.in",onComplete:()=>{f.classList.add("contacts-hidden"),P.classList.add("contacts-hidden"),E(),p.reset()}})}ae.addEventListener("click",L);P.addEventListener("click",L);document.addEventListener("keydown",e=>{e.key==="Escape"&&!f.classList.contains("hidden")&&L()});function ce(){const t=Date.now()+2500;(function o(){confetti({particleCount:8,angle:60,spread:100,origin:{x:0},zIndex:19e3,colors:["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"]}),confetti({particleCount:8,angle:120,spread:100,origin:{x:1},zIndex:19e3,colors:["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"]}),Date.now()<t&&requestAnimationFrame(o)})()}function le(e,t,o=10){const a=["📖","📚","📘","📙","📕"],n=["#E15D05","#FFD700","#FF9F1C","#B000FF","#00C4B3"];for(let r=0;r<o;r++){const s=document.createElement("span");s.textContent=a[Math.floor(Math.random()*a.length)],s.style.position="fixed",s.style.left=e+"px",s.style.top=t+"px";const b=Math.random()*28+24;s.style.fontSize=b+"px",s.style.opacity=Math.random()*.7+.3,s.style.color=n[Math.floor(Math.random()*n.length)],s.style.zIndex=19e3,s.style.textShadow="1px 1px 4px rgba(0,0,0,0.4)",s.style.transformOrigin="center",document.body.appendChild(s);const u=Math.random()*Math.PI*2,y=Math.random()*250+100;gsap.to(s,{x:Math.cos(u)*y,y:Math.sin(u)*y-150,rotationX:Math.random()*360,rotationY:Math.random()*360,rotation:Math.random()*720,scale:1+Math.random()*.5,duration:.8+Math.random()*.5,ease:"power2.out",onComplete:()=>{gsap.to(s,{y:`+=${Math.random()*30-15}`,x:`+=${Math.random()*30-15}`,rotation:`+=${Math.random()*180-90}`,rotationX:`+=${Math.random()*180-90}`,rotationY:`+=${Math.random()*180-90}`,duration:.6+Math.random()*.4,ease:"sine.inOut",yoyo:!0,repeat:1,onComplete:()=>{gsap.to(s,{y:window.innerHeight-t+200,x:`+=${(Math.random()-.5)*200}`,rotationX:Math.random()*360,rotationY:Math.random()*360,rotation:Math.random()*720,scale:.8+Math.random()*.4,opacity:0,duration:2+Math.random(),ease:"power2.in",onComplete:()=>s.remove()})}})}})}}p.addEventListener("submit",e=>{e.preventDefault();const t=p.querySelector('input[name="name"]'),o=p.querySelector('input[name="email"]'),a=t.parentElement.querySelector(".error-message"),n=o.parentElement.querySelector(".error-message"),r=t.value.trim(),s=o.value.trim();[t,o].forEach(c=>c.classList.remove("error")),[a,n].forEach(c=>{c.textContent="",c.style.display="none"});let b=!1;if(r||(t.classList.add("error"),a.textContent="Please enter your name",a.style.display="block",b=!0),s||(o.classList.add("error"),n.textContent="Please enter your email",n.style.display="block",b=!0),s&&!s.includes("@")&&(o.classList.add("error"),n.textContent='Email must contain "@"',n.style.display="block",b=!0),b){Swal.fire({title:"Oops!",text:"Please fill in the required fields: Name and Email!",icon:"warning",confirmButtonText:"OK",confirmButtonColor:"#e15d05"});return}const u=e.submitter.getBoundingClientRect(),y=u.left+u.width/2,J=u.top+u.height/2;Swal.fire({title:"SUCCESS!",html:`You have registered for: <b>${C}</b>`,icon:"success",confirmButtonText:"Great!",confirmButtonColor:"#e15d05",didOpen:()=>{le(y,J,11),ce()}}),p.reset(),[t,o].forEach(c=>c.classList.remove("error")),[a,n].forEach(c=>{c.textContent="",c.style.display="none"}),L()});p.querySelectorAll("input").forEach(e=>{const t=e.parentElement.querySelector(".error-message");e.addEventListener("input",()=>{e.classList.remove("error"),t.textContent="",t.style.display="none"})});document.querySelectorAll(".register-btn").forEach(e=>{e.addEventListener("click",()=>{const o=e.closest(".events-swiper-slide").querySelector(".events-item-title").textContent.trim();ie(o)})});function de(){d.backdrop.classList.add("is-open"),$.classList.add("no-scroll"),document.addEventListener("keydown",Y)}function k(){d.backdrop.classList.remove("is-open"),$.classList.remove("no-scroll"),document.removeEventListener("keydown",Y)}function ue(e){const t=oe(e.title);d.bookModalContent.innerHTML=`
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
  `,new Z(".book-accordion-container",{showMultiple:!0})}const be="https://books-backend.p.goit.global/";function pe(e){return`${be}books/${e}`}async function me(e){try{return(await h.get(pe(e))).data}catch(t){console.log(t)}}function ge(){m.classList.contains("is-visible")||(m.classList.add("is-visible"),F.classList.remove("is-visible"),I.classList.toggle("is-visible"),E())}function K(){m.classList.contains("is-visible")&&(m.classList.remove("is-visible"),F.classList.add("is-visible"),I.classList.toggle("is-visible"),E())}function fe(e){const t=e.target.closest("a");if(!t)return;const o=t.getAttribute("href").substring(1),a=document.getElementById(o);a&&a.scrollIntoView({behavior:"smooth"}),K()}function Y(e){e.key==="Escape"&&k()}async function he(e){if(!e.target.closest(".books-learn-more-button"))return;const o=e.target.closest(".books-item").dataset.id;de(),ue(await me(o))}function ke(e){e.target===e.currentTarget&&k()}function ye(){k()}function ve(){d.bookModalCountInput.value=w()+1}function we(){w()>1&&(d.bookModalCountInput.value=w()-1)}function Be(){const e=w(),t=e>1?`В кошик додано ${e} книг`:"В кошик додана 1 книга";k(),ne(t)}function Ee(e){e.preventDefault(),k(),se("Дякуємо за покупку")}function Le(e){let t=Number(e.target.value);t<1&&(e.target.value=1),t>99&&(e.target.value=99)}h.defaults.baseURL="https://books-backend.p.goit.global/books/";const T=document.querySelector(".books-categories-list");async function Ce(){return(await h.get("category-list")).data}function Se(e){const t=e.map(({list_name:o})=>{if(o!=="")return`<li class="books-categories-item">${o}</li>`}).join("");T.innerHTML=t}async function Me(){try{const e=await Ce();e.unshift({list_name:"All categories"}),Se(e)}catch(e){console.log(e)}}Me();const xe=document.querySelector(".books-categories-title-wrapper");xe.addEventListener("click",X);function X(){T.classList.toggle("show-books-categories-list")}const A=document.querySelector(".books-show-more-button");function W(){A.classList.add("books-show-more-button-display")}function _(){A.classList.remove("books-show-more-button-display")}const B=document.querySelector(".books-list"),v=window.innerWidth>=768?24:10,G=document.querySelector(".books-number-info");let l=0,S=0;const D=4,qe=0;let i=[];async function $e(){return(await h.get("top-books")).data.flatMap(a=>a.books)}async function Fe(e){return(await h.get(`category?category=${e}`)).data}function Q(e){return e.map(({author:o,book_image:a,price:n,title:r,_id:s})=>`<li class="books-item" data-id="${s}">
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
        </li>`).join("")}T.addEventListener("click",Ie);async function Ie(e){X();const t=e.target.textContent;M(t==="All categories"?"All categories":t)}M("All categories");async function M(e){_();try{if(e==="All categories"?i=await $e():i=await Fe(e),l=i.length>v?v:i.length,S=i.length,G.textContent=`Showing ${l} of ${S}`,!i.length){B.innerHTML='<p class="no-books-info">Sorry, there are no books in this category!</p>';return}const t=i.slice(qe,v);B.innerHTML=Q(t),i.length>v&&W()}catch(t){console.log(t)}}A.addEventListener("click",Pe);let O=0,H=0;function Pe(){_(),O=l,l=i.length>l+D?l+D:i.length,G.textContent=`Showing ${l} of ${S}`,H=l;const e=i.slice(O,H);B.insertAdjacentHTML("beforeend",Q(e)),i.length>l&&W()}B.addEventListener("click",Te);function Te(e){if(e.target.nodeName!=="BUTTON")return;e.target.closest("li.books-item").dataset.id}function Ae(){document.querySelector(".swiper-hero")&&ee(),document.querySelector(".feedbacks-swiper")&&te()}document.addEventListener("DOMContentLoaded",Ae);j(R);R.addEventListener("change",j);F.addEventListener("click",ge);I.addEventListener("click",K);d.booksList.addEventListener("click",he);d.backdrop.addEventListener("click",e=>{e.target.closest(".modal-close-btn")&&ye(),e.target.closest(".backdrop")&&ke(e),e.target.closest(".book-modal-btn-plus")&&ve(),e.target.closest(".book-modal-btn-minus")&&we(),e.target.closest(".book-modal-add-btn")&&Be(),e.target.closest(".book-modal-buy-btn")&&Ee(e)});d.backdrop.addEventListener("input",e=>{e.target.closest(".book-count")&&Le(e)});
//# sourceMappingURL=index.js.map
