import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

export const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('#search-form');
export const cssLoader = document.querySelector('#loader');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = '';
  const searchQueryResult = event.target.elements.query.value;
  if (searchQueryResult == '') {
    iziToast.show({
      title: 'Warning:',
      titleColor: 'red',
      message: `The search field is empty. Please try again!`,
      messageColor: 'red',
      color: 'yellow',
      position: 'topRight',
    });
    return;
  }

  if (searchQueryResult) {
    fetchImages(searchQueryResult)
      .then(data => {
        if (data.totalHits <= 0) {
          iziToast.show({
            title: 'ERROR:',
            titleColor: 'red',
            message:
              'Sorry, there are no images matching your search query. Please try again.',
            messageColor: 'red',
            color: 'red',
            position: 'topRight',
          });
        } else {
          renderGallery(data);
          cssLoader.classList.remove('loader');
        }
      })
      .then(() => {
        const lightbox = new SimpleLightbox('.gallery a', {
          captionsData: 'alt',
          captionPosition: 'bottom',
          captionDelay: 250,
        }).refresh();
      })
      .catch(error => console.log(error));
  }
  searchForm.reset();
});
