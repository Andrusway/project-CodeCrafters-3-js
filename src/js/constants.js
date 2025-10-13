const BASE_URL = 'https://books-backend.p.goit.global/';

export function getBooksEndpoint(id) {
  return `${BASE_URL}books/${id}`;
}