const path = require('path');
const express = require('express');
const router = express.Router();

const APP_NAME = 'AdminApp';
const FILE_BASE_PATH = '../../../dist/AdminApp';

const clientFileManifest = require(
  path.join(__dirname, FILE_BASE_PATH, 'client', 'manifest.json'),
);
const serverFileManifest = require(
  path.join(__dirname, FILE_BASE_PATH, 'server', 'manifest.json'),
);

const serverRenderMap = Object.entries(serverFileManifest).reduce(
  (map, [key, value]) => {
    map[key] = require(`${FILE_BASE_PATH}/server${value}`).default;
    return map;
  },
  {},
);

const renderApp = (req, res) => {
  const render = serverRenderMap[`${APP_NAME}.js`];
  const cssFilePath = clientFileManifest[`${APP_NAME}.css`];
  const jsFilePath = clientFileManifest[`${APP_NAME}.js`];

  if (!render) {
    return res.status(404).send('Not Found');
  }

  // ssr을 위한 초기 데이터
  const initialData = {
    userName: 'Minung Han - AdminApp',
  };

  const {
    html,
    head: { title, htmlAttrs, link, meta },
  } = render(req.url, initialData);

  res.set('content-type', 'text/html');
  res.send(`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, user-scalable=no">
          <meta name="google" content="notranslate">
          ${title}
          ${htmlAttrs}
          ${meta}
          ${link}
          <link rel="stylesheet" href="${cssFilePath}" />
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
			      window.__INITIAL_DATA__ = ${JSON.stringify(initialData)};
		      </script>
          <script src="${jsFilePath}"></script>
        </body>
      </html>
  `);
};

router.get('/admin', renderApp);

module.exports = {
  router,
  static: express.static(path.join(__dirname, FILE_BASE_PATH, 'client')),
};
