import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 7wNJ_4HIGqQrt4UlFj7uxVlkSOkCcUTjPobwwk9kqMI',
  },
});
