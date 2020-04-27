import 'dotenv/config';

import { bootstrap } from './app';

if (process.env.RUN_ENV === 'server') {
  // tslint:disable-next-line: no-var-requires
  require('newrelic');
  console.log('RUN_ENV is "server", so execute Newrelic agent.');
}

bootstrap();
