import{a as B,i as c,S as E}from"./assets/vendor-95dc692e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function f(o,r){try{const s="https://pixabay.com/api/",i=o,e=new URLSearchParams({key:"42946583-b9bd64904b8b2d582b051d84e",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}),t=`${s}?${e}`;return(await B.get(t)).data}catch{c.error({message:"Server error!",position:"topRight"})}}function p(o){const r=o.hits.map(s=>{const{id:i,webformatURL:e,largeImageURL:t,tags:a,likes:P,views:R,comments:q,downloads:$}=s;return`
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
          <p>${q}</p>
          </div>
          <div class="item-info-atr">
          <h3>Downloads</h3>
          <p>${$}</p>
          </div>
        </div>
    </li>
    `}).join("");y.insertAdjacentHTML("beforeend",r)}const y=document.querySelector(".gallery"),u=document.querySelector("#search-form"),g=document.querySelector("#load-more-btn"),L=document.querySelector("#loader");let m,v,d;const M=15;let n;const b=new E(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});u.addEventListener("submit",async o=>{if(o.preventDefault(),y.innerHTML="",d=1,m=o.target.elements.query.value,m.trim()==""){c.warning({message:"The search field is empty. Please try again!",position:"topRight"}),h(),u.reset();return}else{try{S(),n=await f(m,d),v=Math.ceil(n.totalHits/M),n.hits.length?(l(),p(n),b.refresh(),w()):(l(),h(),c.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"}))}catch{l(),c.error({message:"Error render gallery. Please try again!",position:"topRight"})}u.reset()}});g.addEventListener("click",x);async function x(){d+=1,S();try{n=await f(m,d),p(n),b.refresh()}catch{c.error({position:"topRight",message:"Error next render gallery"})}l(),O(),w()}function w(){d>=v?(l(),h(),c.info({message:"We're sorry, there are no more images to load",position:"topRight"})):C()}function O(){const r=document.querySelector(".gallery-image").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}function h(){g.classList.add("is-hidden")}function C(){g.classList.remove("is-hidden")}function l(){L.classList.add("is-hidden")}function S(){L.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
