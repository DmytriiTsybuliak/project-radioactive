import{c as u,a as P}from"./assets/scroll-9bed19a6.js";import{i as v,a as x}from"./assets/vendor-ebe44317.js";const g=document.querySelector(".quote-container"),f=new Date().toLocaleDateString();async function A(){g.innerHTML=`
        <span class="loader"></span>
    `;try{return await x.get("https://energyflow.b.goit.study/api/quote").then(t=>t.data)}catch{v.error({title:"Error",message:"Something went wrong, try again"})}}function M(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===f){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));g.innerHTML=y(e,t)}else A().then(({author:e,quote:t})=>{const r={quote:t,author:e};localStorage.setItem("quote",JSON.stringify(r)),localStorage.setItem("savedDate",f),g.innerHTML=y(e,t)}).catch(e=>v.error({title:"Error",message:e.message}))}function y(e,t){return`
            <div class='title-container'>
              <span class='quote-icon_before'></span>
              <h2 class="quote-title">Quote of the day</h2>
              <span class='quote-icon_after'></span>
            </div>

           <div class='text-container'>
              <p class='quote-text'>${t}</p>
              <p class='quote-author'>${e}</p>
           </div>
      `}M();const c="/project-radioactive/assets/symbol-defs-b922d213.svg",p=document.querySelector(".exercises-list");p.addEventListener("click",D);const k=document.querySelector(".list-pages");k.addEventListener("click",B);const E=document.querySelector(".empty-favorite"),b=document.querySelector(".list-pages");window.addEventListener("resize",L);const l=document.querySelector(".first-page"),a=document.querySelector(".second-page"),o=document.querySelector(".third-page"),S="favorite",s=JSON.parse(localStorage.getItem(S))??[],m=s.slice(0,8),h=s.slice(8,16),T=s.slice(16,26);function L(){if(window.innerWidth<768&&s.length>=8){n(m),i(),l.classList.add("current-page");return}else{n(s),b.style.display="none";return}}L();function n(e){if(!s.length)p.innerHTML="",E.style.display="flex",b.style.display="none";else{const t=e.map(({_id:r,bodyPart:d,name:q,target:w,burnedCalories:I,time:$})=>`<li data-id="${r}" class="favopite-item">
            <div class="card-elements-top">
            <svg class="workaut-img" width="76" height="26">
                <use href="${c}#icon-Badge"></use></svg>
                <button class="btn-delete-favorite"><svg  width="14" height="14">
                <use class="delete-favorite" href="${c}#icon-delete"></use></svg></button>
                <button class ="exercises-start-button" id=${r}>Start
                <svg class="exercises-start-icon" width="14" height="14">
                <use href="${c}#icon-start"></use></svg>
                </button>
            </div>
            <div class="card-elements">
            <svg class="svg-name" width="24" height="24"><use href="${c}#icon-runMan"></use></svg>
            <H2 class="name-from-api">${u(q)}</H2>
            </div>
            <ul class="card-elements-botton">
                <li class="elements-botton-item"><h3 class="elements-botton-style">Burned calories:</h3>
                <p class="botton-style-fromAPI">${I}</p>
                <span class="botton-style-fromAPI">&nbsp/&nbsp</span>
                <p class="botton-style-fromAPI">${$} min</p></li>
                <li class="elements-botton-item"><h3 class="elements-botton-style">Body part:</h3>
                <p class="botton-style-fromAPI">${u(d)}</p></li>
                <li class="elements-botton-item"><h3 class="elements-botton-style">Target:</h3>
                <p class="botton-style-fromAPI">${u(w)}</p></li>
            </ul>    
        </li>
        `).join("");p.innerHTML=t,P("Delete")}}function D(e){if(e.preventDefault(),e.target.classList.contains("delete-favorite")){const{id:t}=e.target.closest(".favopite-item").dataset,r=O(String(t)),d=H(r);localStorage.setItem(S,JSON.stringify(d)),n(s),i(),l.classList.add("current-page"),a.classList.remove("current-page"),o.classList.remove("current-page")}}function H(e){return s.splice(e,1),s}function O(e){return s.findIndex(({_id:t})=>t===e)}function B(e){if(e.preventDefault(),e.target.classList.contains("page")){const t=e.target.dataset.id;if(t==="1"){n(m),l.classList.add("current-page"),a.classList.remove("current-page"),o.classList.remove("current-page"),i();return}else if(t==="2"){if(s.length>=8){n(h),i(),a.classList.add("current-page"),l.classList.remove("current-page"),o.classList.remove("current-page");return}else n(m);return}else t==="3"&&(s.length>16?(n(T),i(),a.classList.remove("current-page"),l.classList.remove("current-page"),o.classList.add("current-page")):n(h))}}function i(){s.length<=8?(l.style.display="none",a.style.display="none",o.style.display="none"):s.length>8&&s.length<=16?(o.style.display="none",a.style.display="flex"):s.length>16&&(a.style.display="flex",o.style.display="flex")}
//# sourceMappingURL=commonHelpers.js.map
