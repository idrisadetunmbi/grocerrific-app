import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import logger from 'morgan';
import mongoose from 'mongoose';
import path from 'path';

import config from './config';
import router from './routes';

require('dotenv').config();

const app = express();
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client')));
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'client', 'index.html')));
} else {
  // eslint-disable-next-line
  require('../../webpack-configs/middleware')(app);
}

const port = Number(config.PORT || 3000);
http.createServer(app).listen(port, () => {
  mongoose.connect(config.DATABASE_URL);
});
