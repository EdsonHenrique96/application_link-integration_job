import pipedrive from '../repositories/pipedrive';
import linkIntegration from '../repositories/linkIntegration';

const syncDeals = async (): Promise<void> => {
  const data = await pipedrive.getDealsWon();
  await linkIntegration.sendDeals(data);
};

export default syncDeals;
