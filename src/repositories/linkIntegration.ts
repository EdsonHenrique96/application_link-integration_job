import axios from 'axios';

const { LINK_INTEGRATION_BASE_URL } = process.env;

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
