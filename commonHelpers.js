import{a as q,i as n,S as E}from"./assets/vendor-95dc692e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function g(s,o){try{const r="https://pixabay.com/api/",i=s.trim().split(",").join("+"),e=new URLSearchParams({key:"42946583-b9bd64904b8b2d582b051d84e",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}),t=`${r}?${e}`;return(await q.get(t)).data}catch{return n.error({message:"Server error!",position:"topRight"})}}function p(s){const o=s.hits.map(r=>{const{id:i,webformatURL:e,largeImageURL:t,tags:a,likes:P,views:R,comments:S,downloads:$}=r;return`
    <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img class="gallery-image" id=${i} src="${e}" alt="${a}"/>
        </a>
        <div class="gallery-item-info">
          <div class="item-info-atr">
          <h3>Likes</h3>
          <p>${P}</p>
          </div>
          <div class="item-info-atr">
          <h3>Views</h3>
          <p>${R}</p>
          </div>
          <div class="item-info-atr">
          <h3>Comments</h3>
          <p>${S}</p>
          </div>
          <div class="item-info-atr">
          <h3>Downloads</h3>
          <p>${$}</p>
          </div>
        </div>
    </li>
    `}).join("");f.insertAdjacentHTML("beforeend",o)}const f=document.querySelector(".gallery"),d=document.querySelector("#search-form"),u=document.querySelector("#load-more-btn"),y=document.querySelector("#loader");let M,L,l=1;const x=15;let h;const v=new E(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});d.addEventListener("submit",async s=>{s.preventDefault(),f.innerHTML="";const o=s.target.elements.query.value;if(o.trim()==""){n.warning({message:"The search field is empty. Please try again!",position:"topRight"}),m(),d.reset();return}else{try{w();const r=await g(o,l);L=Math.ceil(r.totalHits/x),r.hits.length?(c(),p(r),v.refresh(),b()):(c(),m(),n.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"}))}catch{c(),n.error({message:"Error render gallery. Please try again!",position:"topRight"})}d.reset()}});u.addEventListener("click",B);async function B(){l+=1,w();try{h=await g(M,l),p(h),v.refresh()}catch(s){return n.error({position:"topRight",message:"Error next render gallery"}),console.log(s)}c(),b()}function b(){l>=L?(m(),n.info({message:"We're sorry, there are no more images to load",position:"topRight"})):O()}function m(){u.classList.add("is-hidden")}function O(){u.classList.remove("is-hidden")}function c(){y.classList.add("is-hidden")}function w(){y.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
