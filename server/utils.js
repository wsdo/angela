import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../src/routes';

export const render = (req) => {
	const content = renderToString((
		<StaticRouter location={req.path} context={{}}>
			{Routes}
		</StaticRouter>
	));

	return `
		<html>
			<head>
				<title>ssr</title>
			</head>
			<body>
				<div id="root">${content}</div>
				<script src='/index.js'></script>
			</body>
		</html>
  `;
}
