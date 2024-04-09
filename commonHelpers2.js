import{c as g,a as B}from"./assets/scroll-9bed19a6.js";import{i as c,a as f,P as D}from"./assets/vendor-ebe44317.js";const b=document.querySelector(".quote__backend"),$=new Date().toLocaleDateString();async function R(){b.innerHTML=`
        <span class="loader"></span>
    `;try{return(await f.get("https://energyflow.b.goit.study/api/quote")).data}catch{c.error({title:"Error",message:"Something went wrong, try again"})}}function S(e,t){return`<p class="quote__backend-text">${t}</p>
            <p class="quote__backend-author">${e}</p>`}function _(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===$){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));b.innerHTML=S(e,t)}else R().then(({author:e,quote:t})=>{const a={author:e,quote:t};localStorage.setItem("quote",JSON.stringify(a)),localStorage.setItem("savedDate",$),b.innerHTML=S(e,t)}).catch(e=>c.error({title:"Error",message:e.message}))}_();const j=document.getElementById("subscriptionForm"),M=document.getElementById("email"),z=new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);j.addEventListener("submit",async function(e){e.preventDefault();try{z.test(M.value)?await f.post("https://energyflow.b.goit.study/api/subscription",{email:M.value}).then(t=>c.success({title:"Success",message:t.data.message})).catch(t=>c.error({title:"Error",message:t.response.data.message})):c.error({title:"Error",message:"Please enter the correct email!"})}catch{c.error({title:"Error",message:"Something went wrong, try again"})}});const w="/project-radioactive/assets/exercises-sprite-d4ab7b8a.svg";function x(e,t){const a=document.getElementById("tui-pagination-container"),s=t<3?t:3,r={totalItems:e*t,itemsPerPage:e,visiblePages:s,centerAlign:!0},i=new D(a,r);return s<=1?a.style.display="none":a.style.display="block",i}const o=document.querySelector(".exercises-list");let u="Muscles",y=1;const O=12,F=9;let E,L;const v=document.getElementById("exercises-search-form"),l=document.querySelector(".exircises-category"),k=document.querySelector(".exercises-title"),Q=v.querySelector(".exercises-search-input");async function m(e,t){let a=new URLSearchParams({filter:e,page:t,limit:O});try{await f.get(`https://energyflow.b.goit.study/api/filters?${a}`).then(s=>{let r=s.data.results;E=s.data.totalPages;const i=r.map(({name:n,filter:d,imgUrl:h})=>`<li class="exercises-list-item" data-name="${n}" data-filter="${d}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${h}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${g(n)}</p>
            <p class="exercises-item-subname">${d}</p>
            </div>
          </li>`).join("");o.insertAdjacentHTML("beforeend",i),J()}).catch(s=>{c.error({title:"Error",message:s.response.data.message})})}catch{c.error({title:"Error",message:"Something went wrong, try again"})}}await m(u,y);x(12,E).on("afterMove",({page:e})=>{o.innerHTML="",m(u,e)});function J(){let e=y;const t=document.querySelectorAll(".exercises-list-item");for(const a of t){a.addEventListener("click",s);async function s(r){const i=r.currentTarget.dataset.name,n=r.currentTarget.dataset.filter;v.classList.remove("input-hidden"),await p({filter:n,name:i,page:e}),x(9,L).on("afterMove",async({page:d})=>{o.innerHTML="",await p({filter:n,name:i,page:d})}),a.removeEventListener("click",s)}}}const P=document.querySelectorAll(".exercises-filter-button");for(const e of P)e.addEventListener("click",async function(t){v.classList.add("input-hidden");const a=t.currentTarget.dataset.name;for(const s of P)s.classList.remove("active-btn");t.target.classList.add("active-btn"),u=a,o.innerHTML="",l.dataset.name="",l.textContent="",k.textContent="Exercises",await m(a,y),x(12,E).on("afterMove",({page:s})=>{o.innerHTML="",m(u,s)})});async function p({filter:e,name:t,page:a,keyword:s=""}){const i={"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[e];await f.get(`https://energyflow.b.goit.study/api/exercises?${i}=${t.toLowerCase()}&keyword=${s}&page=${a}&limit=${F}`).then(n=>{let d=n.data.results;L=n.data.totalPages,l.dataset.name=t,l.dataset.filter=e,l.textContent=g(t),k.textContent="Exercises /";const h=d.map(({bodyPart:T,burnedCalories:q,name:C,_id:H,target:I,rating:A})=>`<li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${A.toFixed(1)}</p>
                    <svg
                      class="exercises-star-icon"
                      width="18"
                      height="18"
                      aria-label="star icon"
                    >
                      <use
                        href="${w}#icon-star"
                      ></use>
                    </svg>
                  </div>
                </div>
                <button class="exercises-start-button" id=${H}>
                  Start
                  <svg class="exercises-start-icon" width="14" height="14">
                    <use
                      href="${w}#icon-arrow"
                    ></use>
                  </svg>
                </button>
              </div>
              <div class="exercises-card-namewrapper">
                <svg
                  class="exercises-star-icon"
                  width="24"
                  height="24"
                  aria-label="star icon"
                >
                  <use
                    href="${w}#icon-icon"
                  ></use>
                </svg>
                <p class="exercises-card-exname">${g(C)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${q}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${g(T)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${g(I)}
                </li>
              </ul>
            </div>
          </li> `).join("");o.innerHTML="",o.insertAdjacentHTML("beforeend",h),B("Add")}).catch(n=>{console.log(n),c.error({title:"Error",message:"Something went wrong"})})}v.addEventListener("submit",async e=>{e.preventDefault();let t=y,a=l.dataset.filter,s=l.dataset.name,r=Q.value.trim().toLowerCase();await p({filter:a,name:s,page:t,keyword:r}),x(9,L).on("afterMove",async({page:i})=>{o.innerHTML="",await p({filter:a,name:s,page:i,keyword:r})})});
//# sourceMappingURL=commonHelpers2.js.map
