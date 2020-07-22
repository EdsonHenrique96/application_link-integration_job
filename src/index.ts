import 'dotenv/config';
import { CronJob } from 'cron';
import syncDeals from './services/syncDeals';

const cronTime = process.env.CRON_TIME || '0 * * * * *';

const job = new CronJob(
  cronTime,
  async () => {
    try {
      console.info('Starting synchronization...');
      await syncDeals();
      console.info('Synchronization succeeded!');
    } catch (err) {
      console.error('The synchronization process failed: ', err);
    }
  },
  null,
  true,
  'America/Sao_Paulo',
);

job.start();
