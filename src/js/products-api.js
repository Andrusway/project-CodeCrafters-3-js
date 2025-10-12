import axios from 'axios';
import { getBooksEndpoint } from './constants.js';

export async function getBook(id) {
  try {
    return (await axios.get(getBooksEndpoint(id))).data;
  } catch (error) {
    console.log(error);
  }
}