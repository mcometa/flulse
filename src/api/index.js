import axios from 'axios';

import { API_BASE, CLIENT_ID } from '../config';

export default axios.create({
  baseURL: API_BASE,
  headers: {
    Authorization: `Client-ID ${CLIENT_ID}`,
  },
});
