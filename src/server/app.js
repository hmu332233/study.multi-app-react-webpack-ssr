const express = require('express');
const path = require('path');

const render = require(`../../dist/server/main`).default;
const fileManifest = require(`../../dist/client/manifest.json`);

const app = express();

app.use(express.static(path.join(__dirname, '../../dist/client')));

app.get('*', (req, res) => {
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
          <link rel="stylesheet" href="${fileManifest['main.css']}" />
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
			      window.__INITIAL_DATA__ = ${JSON.stringify(initialData)};
		      </script>
          <script src="${fileManifest['main.js']}"></script>
        </body>
      </html>
  `);
});

app.listen(3000, () => {
  console.log('Running on http://localhost:3000/');
});
