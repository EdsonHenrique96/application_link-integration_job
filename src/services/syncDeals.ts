import pipedrive from '../repositories/pipedrive';
import linkIntegration from '../repositories/linkIntegration';

const syncDeals = async (): Promise<void> => {
  const dealsInfos = await pipedrive.getDealsWon();
  await linkIntegration.sendDeals(dealsInfos);
};

export default syncDeals;
