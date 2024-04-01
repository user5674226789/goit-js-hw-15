import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

export const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('#load-more-btn');
const elemLoader = document.querySelector('#loader');
let searchQueryResult;
let maxPage = 0;
let currentPage = 1;
const pageSize = 15;
const lightbox = await new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

loadMoreBtn.addEventListener('click', onLoadMoreBtn);
searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  gallery.innerHTML = '';
  const searchQueryResult = event.target.elements.query.value;
  if (searchQueryResult.trim() == '') {
    iziToast.warning({
      message: `The search field is empty. Please try again!`,
      position: 'topRight',
    });
    hideButton();
    searchForm.reset();
    return;
  } else {
    try {
      showElemLoader();
      const data = await fetchImages(searchQueryResult, currentPage);
      maxPage = Math.ceil(data.totalHits / pageSize);
      if (!data.hits.length) {
        hideElemLoader();
        hideButton();
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again.',
          position: 'topRight',
        });
      } else {
        hideElemLoader();
        renderGallery(data);
        lightbox.refresh();
        checkBtnStatus();
      }
    } catch (error) {
      hideElemLoader();
      iziToast.error({
        message: `Error render gallery. Please try again!`,
        position: 'topRight',
      });
    }
    searchForm.reset();
  }
});

async function onLoadMoreBtn() {
  currentPage += 1;
  showElemLoader();
  try {
    const data = await fetchImages(searchQueryResult, currentPage);
    renderGallery(data);
    lightbox.refresh();
    window.scrollBy({
      top: 578,
      behavior: 'smooth',
    });
  } catch (err) {
    iziToast.error({
      position: 'topRight',
      message: 'ERROR',
    });
  }
  hideElemLoader();
  checkBtnStatus();
}

function checkBtnStatus() {
  if (currentPage >= maxPage) {
    hideButton();
    iziToast.info({
      message: "We're sorry, there are no more posts to load",
      position: 'topRight',
    });
  } else {
    showButton();
  }
}

function hideButton() {
  loadMoreBtn.classList.add('is-hidden');
}
function showButton() {
  loadMoreBtn.classList.remove('is-hidden');
}

function hideElemLoader() {
  elemLoader.classList.add('is-hidden');
}
function showElemLoader() {
  elemLoader.classList.remove('is-hidden');
}

// console.log(data);
// console.log(data.hits);
// console.log(data.totalHits);

// console.log(searchQueryResult);
// console.log(data);
// console.log(data.hits);
// console.log(data.totalHits);
