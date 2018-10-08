import express from 'express';
import Home from './container/Home';
import React from 'react';
import { renderToString } from 'react-dom/server';

// 客户端渲染
// React代码在浏览器上执行，消耗的是用户浏览器的性能

// 服务器端渲染
// React代码在服务器上执行，消耗的是服务器端的性能

const app = express();
const content = renderToString(<Home />);

app.get('/', function (req, res) {
  res.send(`
		<html>
			<head>
				<title>ssr</title>
			</head>
			<body>
				${content}
			</body>
		</html>
  `);
});

var server = app.listen(3000);
