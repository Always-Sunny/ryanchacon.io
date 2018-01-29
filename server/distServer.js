/*eslint-disable no-console */
import express from 'express';
import path from 'path';
import { StaticRouter } from 'react-router-dom';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/src/components/App';
import routes from '../client/src/routes';



const port = 3000;
const app = express();
const context = {};


// app.use(express.static('dist'));
app.use(express.static(`${__dirname}/../dist`));

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

// app.get('*', (req, res) => {
//   res.render('index', {
//     content: ReactDOMServer.renderToString(
//       // might have to wrap this in a <Provider component later from redux
//       <StaticRouter location={req.url} context={context}>
//         <App routes={routes} />
//       </StaticRouter>),
//   });
// });


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.info('Express listening on port', port);
});
//
