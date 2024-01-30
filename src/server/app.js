const express = require('express');
const path = require('path');

const clientFileManifest = require(`../../dist/client/manifest.json`);
const serverFileManifest = require(`../../dist/server/manifest.json`);

const serverRenderMap = Object.entries(serverFileManifest).reduce(
  (map, [key, value]) => {
    map[key] = require(`../../dist/server/${value}`).default;
    return map;
  },
  {},
);

const app = express();

app.use(express.static(path.join(__dirname, '../../dist/client')));

app.get('*', (req, res) => {
  // 테스트를 위해 req.url이 appName이라는 것을 가정하고 작성
  const appName = req.url.split('/')[1];
  console.log('appName', appName);

  const render = serverRenderMap[`${appName}.js`];
  const cssFilePath = clientFileManifest[`${appName}.css`];
  const jsFilePath = clientFileManifest[`${appName}.js`];

  if (!render) {
    return res.status(404).send('Not Found');
  }

  // ssr을 위한 초기 데이터
  const initialData = {
    userName: 'Minung Han',
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
});

app.listen(3000, () => {
  console.log('Running on http://localhost:3000/');
});
