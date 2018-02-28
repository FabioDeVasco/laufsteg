/* @flow */
/* eslint no-console: 0, import/no-extraneous-dependencies: 0 */
import R from 'ramda';
import chalk from 'chalk';
import express, { type $Request, type $Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import axios from 'axios';
import postmark from 'postmark';
import history from 'connect-history-api-fallback';

const PORT = process.env.PORT || 3000;
const app = express();
const postmarkClient = new postmark.Client(process.env.POSTMARK_SERVER_TOKEN);

app.use(bodyParser.json({ type: 'application/json' }));

/*
|-----------------------------------------------------------
| Express behind proxies
|-----------------------------------------------------------
|
| When running an Express app behind a proxy such as HAProxy
| it will incorrectly register the proxy's IP address as the
| client IP address unless we set "trust proxy" to true.
| If true, the client's IP address is understood as the
| left-most entry in the X-Forwarded-* header. Keep in mind
| that this setting is only meaningful when the proxy
| actually forwards the information to the server.
| In HAProxy this is done by setting the "forwardfor" option.
|
*/
app.set('trust proxy');

/*
|-----------------------------------------------------------
| Connect history API fallback
|-----------------------------------------------------------
|
| Single Page Applications (SPA) typically only utilise one
| index file that is accessible by web browsers: usually
| index.html. Navigation in the application is then commonly
| handled using JavaScript with the help of the HTML5 History
| API. This results in issues when the user hits the refresh
| button or is directly accessing a page other than the
| landing page, e.g. /help or /help/online as the web server
| bypasses the index file to locate the file at this location.
| As your application is a SPA, the web server will fail
| trying to retrieve the file and return a 404 - Not Found
| message to the user. This tiny middleware addresses some
| of the issues. Specifically, it will change the requested
| location to the index you specify (default /index.html).
|
*/
app.use(history());

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config').default;
  const config = webpackConfig(process.env.NODE_ENV);
  const compiler = webpack(config);

  app.use(
    require('webpack-dev-middleware')(compiler, {
      // https://webpack.js.org/configuration/dev-server/
      noInfo: true,
      publicPath: config.output.publicPath,
    }),
  );

  app.use(require('webpack-hot-middleware')(compiler));

  app.get('/', (req: $Request, res: $Response) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
} else {
  app.use(require('compression')());
  app.use(express.static(path.join(__dirname, 'react')));

  app.get('/', (req: $Request, res: $Response) => {
    res.sendFile(path.join(__dirname, 'react', 'index.html'));
  });
}

app.post('/api/contact', async (req: $Request, res: $Response) => {
  try {
    const capitalize = (string: string) =>
      string[0].toUpperCase() + string.substring(1);

    await postmarkClient.sendEmail({
      From: 'contact@laufsteg-heilbronn.de',
      To: 'fatosch@laufsteg-heilbronn.de',
      Subject: `${capitalize(req.body.subject)} inquiry by ${req.body.email}`,
      TextBody: req.body.message,
    });

    res.status(200).end();
  } catch (error) {
    res.status(400).end();
  }
});

app.listen(PORT, err => {
  if (err) {
    console.log('err: ', err);
  } else {
    console.log(
      'NODE_ENV',
      chalk.yellow(`${process.env.NODE_ENV || 'development'}`),
    );
    console.log(
      chalk.green(
        `===> LAUFSTEG <=== | Listening on http://localhost:${PORT}.`,
      ),
    );
  }
});
