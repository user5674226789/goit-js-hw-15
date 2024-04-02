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
let totalPage;
let currentPage = 1;
const maxPage = 15;
let data;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

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
      data = await fetchImages(searchQueryResult, currentPage);
      totalPage = Math.ceil(data.totalHits / maxPage);
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

loadMoreBtn.addEventListener('click', onLoadMoreBtn);
async function onLoadMoreBtn() {
  currentPage += 1;
  showElemLoader();
  try {
    data = await fetchImages(currentPage);
    renderGallery(data);
    lightbox.refresh();
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: 'Error next render gallery',
    });
    return console.log(error);
  }
  hideElemLoader();
  onScroll();
  checkBtnStatus();
}

function checkBtnStatus() {
  if (currentPage >= totalPage) {
    hideElemLoader();
    hideButton();
    iziToast.info({
      message: "We're sorry, there are no more images to load",
      position: 'topRight',
    });
  } else {
    showButton();
  }
}

function onScroll() {
  const height = gallery.firstChild.getBoundingClientRect().height;

  scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
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
