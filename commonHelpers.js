import{a as q,i as c,S as E}from"./assets/vendor-95dc692e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function g(o,r){try{const s="https://pixabay.com/api/",i=o.trim().split(",").join("+"),e=new URLSearchParams({key:"42946583-b9bd64904b8b2d582b051d84e",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}),t=`${s}?${e}`;return(await q.get(t)).data}catch(s){return c.error({message:"Server error!",position:"topRight"}),console.log(s)}}function p(o){const r=o.hits.map(s=>{const{id:i,webformatURL:e,largeImageURL:t,tags:a,likes:P,views:R,comments:S,downloads:$}=s;return`
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
    `}).join("");f.insertAdjacentHTML("beforeend",r)}const f=document.querySelector(".gallery"),m=document.querySelector("#search-form"),h=document.querySelector("#load-more-btn"),y=document.querySelector("#loader");let M,L,d=1;const x=15;let n;const v=new E(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});m.addEventListener("submit",async o=>{o.preventDefault(),f.innerHTML="";const r=o.target.elements.query.value;if(r.trim()==""){c.warning({message:"The search field is empty. Please try again!",position:"topRight"}),u(),m.reset();return}else{try{w(),n=await g(r,d),L=Math.ceil(n.totalHits/x),n.hits.length?(l(),p(n),v.refresh(),b()):(l(),u(),c.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"}))}catch{l(),c.error({message:"Error render gallery. Please try again!",position:"topRight"})}m.reset()}});h.addEventListener("click",B);async function B(){d+=1,w();try{n=await g(M,d),p(n),v.refresh()}catch(o){return c.error({position:"topRight",message:"Error next render gallery"}),console.log(o)}l(),b()}function b(){d>=L?(u(),c.info({message:"We're sorry, there are no more images to load",position:"topRight"})):O()}function u(){h.classList.add("is-hidden")}function O(){h.classList.remove("is-hidden")}function l(){y.classList.add("is-hidden")}function w(){y.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
