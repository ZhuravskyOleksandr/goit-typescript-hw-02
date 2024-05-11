import axios from 'axios';

const API_KEY = 'CejzWCfnZ8jN2JWTpAE7szStVB99Iz9nXC7AB5amxtU';

export async function getImages(query, page) {
  const response = await axios('https://api.unsplash.com/search/photos', {
    params: {
      client_id: API_KEY,
      query: query.split('/')[1],
      page,
      per_page: 12,
      orientation: 'landscape',
    },
  });
  return response;
}
