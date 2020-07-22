import pipedrive from '../repositories/pipedrive';
import linkIntegration from '../repositories/linkIntegration';

const syncDeals = async (): Promise<void> => {
  try {
    const data = await pipedrive.getDeals();
    await linkIntegration.sendDeals(data);
  } catch (err) {
    console.log(err);
  }
};

export default syncDeals;
