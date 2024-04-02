import{a as q,i as c,S as B}from"./assets/vendor-95dc692e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function f(r,o){try{const s="https://pixabay.com/api/",i=r,e=new URLSearchParams({key:"42946583-b9bd64904b8b2d582b051d84e",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}),t=`${s}?${e}`;return(await q.get(t)).data}catch(s){return c.error({message:"Server error!",position:"topRight"}),console.log(s)}}function p(r){const o=r.hits.map(s=>{const{id:i,webformatURL:e,largeImageURL:t,tags:a,likes:S,views:P,comments:R,downloads:$}=s;return`
    <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img class="gallery-image" id=${i} src="${e}" alt="${a}"/>
        </a>
        <div class="gallery-item-info">
          <div class="item-info-atr">
          <h3>Likes</h3>
          <p>${S}</p>
          </div>
          <div class="item-info-atr">
          <h3>Views</h3>
          <p>${P}</p>
          </div>
          <div class="item-info-atr">
          <h3>Comments</h3>
          <p>${R}</p>
          </div>
          <div class="item-info-atr">
          <h3>Downloads</h3>
          <p>${$}</p>
          </div>
        </div>
    </li>
    `}).join("");u.insertAdjacentHTML("beforeend",o)}const u=document.querySelector(".gallery"),h=document.querySelector("#search-form"),g=document.querySelector("#load-more-btn"),y=document.querySelector("#loader");let L,d=1;const E=15;let n;const v=new B(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});h.addEventListener("submit",async r=>{r.preventDefault(),u.innerHTML="";const o=r.target.elements.query.value;if(o.trim()==""){c.warning({message:"The search field is empty. Please try again!",position:"topRight"}),m(),h.reset();return}else{try{w(),n=await f(o,d),L=Math.ceil(n.totalHits/E),n.hits.length?(l(),p(n),v.refresh(),b()):(l(),m(),c.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"}))}catch{l(),c.error({message:"Error render gallery. Please try again!",position:"topRight"})}h.reset()}});g.addEventListener("click",M);async function M(){d+=1,w();try{n=await f(d),p(n),v.refresh()}catch(r){return c.error({position:"topRight",message:"Error next render gallery"}),console.log(r)}l(),x(),b()}function b(){d>=L?(l(),m(),c.info({message:"We're sorry, there are no more images to load",position:"topRight"})):O()}function x(){const r=u.firstChild.getBoundingClientRect().height;scrollBy({top:r*2,behavior:"smooth"})}function m(){g.classList.add("is-hidden")}function O(){g.classList.remove("is-hidden")}function l(){y.classList.add("is-hidden")}function w(){y.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
