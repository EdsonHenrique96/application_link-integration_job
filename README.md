# link-repository_cron

This is a cron job responsible for collecting data from the [pipedrive api](https://developers.pipedrive.com/docs/api/v1/) and synchronizing with the [link-repository api](https://github.com/EdsonHenrique96/link-integration).

By default, cron is programmed to run every 1 minute, but this interval can be easily changed using an environment variable.

# Prerequisites

- Git
- Yarn
- NodeJs (Recommended v13.14.0 or +)
- Docker (TODO)

# Scripts

First of all, you must copy the .env.example:
```bash
cp .env.example .env

```

Now run the cron job in the desired environment:

```bash
# run cron job in dev environment
yarn dev:server

```

```bash
# run con job in prod environment
yarn build
yarn start
```
