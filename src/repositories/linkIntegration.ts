import axios from 'axios';

const { LINK_INTEGRATION_BASE_URL } = process.env;

if (!LINK_INTEGRATION_BASE_URL) {
  throw new Error('The env LINK_INTEGRATION_BASE_URL is missing!');
}

const HttpClient = axios.create({
  baseURL: LINK_INTEGRATION_BASE_URL,
  timeout: 2000,
});

const linkIntegration = {
  sendDeals(deals: any): Promise<void> {
    return HttpClient.post('deals', deals);
  },
};

export default linkIntegration;
