import { cssLoader } from '../main';

export function fetchImages(searchQueryResult) {
  cssLoader.classList.add('loader');
  const BASE_URL = 'https://pixabay.com/api/';
  const q = searchQueryResult.trim().split(',').join('+');
  const params = new URLSearchParams({
    key: '42946583-b9bd64904b8b2d582b051d84e',
    q: q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}?${params}`;

  return fetch(url)
    .then(res => res.json())
    .catch(error =>
      iziToast.show({
        title: 'ERROR:',
        titleColor: 'red',
        message: 'Server error!',
        messageColor: 'red',
        color: 'red',
        position: 'topRight',
      })
    );
}
