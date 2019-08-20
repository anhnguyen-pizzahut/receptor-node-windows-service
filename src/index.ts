import express from 'express';
import basicAuth from 'express-basic-auth';
import { logger } from '@pizza-hut/gms-utils';
import { router } from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(basicAuth({
  users: {
    'api_user': 'test123456'
  }
}));
app.use(router);

app.listen(port, () => logger.info({ port }, `receptor orders listener service ready!`))
