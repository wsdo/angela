import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import paths from '../../config/paths'

const path = require('path')
const fs = require('fs')

// console.log(path.join(__dirname, '../server/index.html'))
const template = fs.readFileSync('./src/index.html', 'utf8')
export const render = (store, routes, req) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </div>
      </StaticRouter>
    </Provider>
  ));

  // console.log(template.replace('<!-- stark -->', content))
  return template.replace('<!-- stark -->', content)

//   return `<html>
//   <head>
//     <title>ssr</title>
//   </head>
//   <body>
//     <div id="root">${content}</div>
//     <script>
  // window.context = {
  //   state: ${JSON.stringify(store.getState())}
  // }
//     </script>
//     <script src='/index.js'></script>
//   </body>
// </html>
// 	  `;
}
