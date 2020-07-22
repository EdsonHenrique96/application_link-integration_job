import 'dotenv/config';
import { CronJob } from 'cron';
import syncDeals from './services/syncDeals';

const cronTime = process.env.CRON_TIME || '0 * * * * *';

const job = new CronJob(
  cronTime,
  async () => {
    await syncDeals();
  },
  null,
  true,
  'America/Sao_Paulo',
);

job.start();
