import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import logger from 'morgan';
import mongoose from 'mongoose';

import config from './config';
import webpackMiddleware from '../../webpack-configs/middleware';
import router from './routes';

require('dotenv').config();

const app = express();
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  webpackMiddleware(app);
}

const port = Number(config.PORT || 3000);
http.createServer(app).listen(port, () => {
  mongoose.connect(config.DATABASE_URL);
});
