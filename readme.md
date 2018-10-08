## 目录构建
* config
* const
* store
* src
* components
* containers
* actions
* router
* views
* reducers
* utils
* build
```
touch index.js App.js readme.md
touch webpack.config.base.js webpack.config.dev.js webpack.config.prod.js env.js paths.js
mkdir -p build src/{const,store,config,component,container,action,router,view,reducer,util,server}
```

## package

```
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "express": "^4.16.3",
    "react": "^16.4.1",
    "react-dom": "^16.4.1",
    "webpack": "^4.16.0",
    "webpack-cli": "^3.0.8",
    "webpack-node-externals": "^1.7.2"
```
