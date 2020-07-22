import axios from 'axios';

const { PIPEDRIVE_API_KEY, PIPEDRIVE_BASE_URL } = process.env;

const HttpClient = axios.create({
  baseURL: PIPEDRIVE_BASE_URL,
  timeout: 2000,
});

const pipedrive = {
  async getDeals(): Promise<any> {
    const response = await HttpClient.get('/deals', {
      params: { api_token: PIPEDRIVE_API_KEY },
    });

    return response.data;
  },
};

export default pipedrive;
