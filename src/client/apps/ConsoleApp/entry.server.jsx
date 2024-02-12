import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import Helmet from 'react-helmet';

import App from './App.jsx';

const render = (location, initialData) => {
  const context = {};
  const html = ReactDOMServer.renderToString(
    // <StaticRouter location={location} context={context}>

    // </StaticRouter>
    <App {...initialData} />,
  );

  const helmet = Helmet.renderStatic();
  const title = helmet.title.toString();
  const htmlAttrs = helmet.htmlAttributes.toString();
  const link = helmet.link.toString();
  const meta = helmet.meta.toString();

  return { html, head: { title, htmlAttrs, link, meta } };
};

export default render;
