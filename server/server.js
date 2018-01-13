import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
import App from '../client/src/components/App';
import config from './config';
import routes from '../client/src/routes';

const compiler = webpack(webpackConfig);
const server = express();
const context = {};

// fix for webpack-loop-rebundling
// delete when webpack is fixed
// https://github.com/webpack/watchpack/issues/25
const timefix = 11000;
compiler.plugin('watch-run', (watching, callback) => {
  watching.startTime += timefix;
  callback();
});
compiler.plugin('done', (stats) => {
  stats.startTime -= timefix;
});
//

server.use(webpackDevMiddleware(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath,
}));
server.use(webpackHotMiddleware(compiler));

server.set('view engine', 'ejs');
server.set('views', path.join(`${__dirname}/../client/views`));
server.use(express.static(`${__dirname}/../public`));


server.get('*', (req, res) => {
  res.render('index', {
    content: ReactDOMServer.renderToString(
      // might have to wrap this in a <Provider component later from redux
      <StaticRouter location={req.url} context={context}>
        <App routes={routes} />
      </StaticRouter>),
  });
});

// server.get('*', (req, res) => {
//   res.render('index', {
//     content: 'hello',
//   });
// });


server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
