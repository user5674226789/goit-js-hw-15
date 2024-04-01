import axios from 'axios';
import iziToast from 'izitoast';

export async function fetchImages(searchQueryResult, currentPage) {
  try {
    const BASE_URL = 'https://pixabay.com/api/';
    const q = searchQueryResult.trim().split(',').join('+');
    const params = new URLSearchParams({
      key: '42946583-b9bd64904b8b2d582b051d84e',
      q: q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: currentPage,
    });
    const url = `${BASE_URL}?${params}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return iziToast.error({
      message: 'Server error!',
      position: 'topRight',
    });
  }
}
