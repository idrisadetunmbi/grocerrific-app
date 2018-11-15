import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import logger from 'morgan';

import config from './config';
import webpackMiddleware from '../../webpack-configs/middleware';

require('dotenv').config();

const app = express();
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  webpackMiddleware(app);
}

const port = Number(config.PORT || 3000);
http.createServer(app).listen(port, () => {
  console.log(`Server started successfully on port ${port}`);
});
