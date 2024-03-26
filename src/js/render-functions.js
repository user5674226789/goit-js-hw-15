import { gallery } from '../main';

export function renderGallery(data) {
  const createMarkup = data.hits
    .map(hit => {
      const {
        id,
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = hit;
      return `
    <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" id=${id} src="${webformatURL}" alt="${tags}"/>
        </a>
        <div class="gallery-item-info">
          <div class="item-info-atr">
          <h3>Likes</h3>
          <p>${likes}</p>
          </div>
          <div class="item-info-atr">
          <h3>Views</h3>
          <p>${views}</p>
          </div>
          <div class="item-info-atr">
          <h3>Comments</h3>
          <p>${comments}</p>
          </div>
          <div class="item-info-atr">
          <h3>Downloads</h3>
          <p>${downloads}</p>
          </div>
        </div>
    </li>
    `;
    })
    .join('');

  gallery.insertAdjacentHTML('afterbegin', createMarkup);
}
