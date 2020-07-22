import axios from 'axios';

const { PIPEDRIVE_API_KEY, PIPEDRIVE_BASE_URL } = process.env;

if (!PIPEDRIVE_API_KEY || !PIPEDRIVE_BASE_URL) {
  throw new Error(
    'The envs PIPEDRIVE_API_KEY, PIPEDRIVE_BASE_URL are mandatory!',
  );
}

const HttpClient = axios.create({
  baseURL: PIPEDRIVE_BASE_URL,
  timeout: 2000,
});

const pipedrive = {
  async getDealsWon(): Promise<any> {
    const response = await HttpClient.get('/deals', {
      params: { api_token: PIPEDRIVE_API_KEY, status: 'won' },
    });

    return response.data;
  },
};

export default pipedrive;
