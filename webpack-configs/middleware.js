import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

export default (app) => {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    logLevel: 'error',
  }));
  app.use(webpackHotMiddleware(compiler));
};
