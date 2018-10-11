// import React from 'react';
// import ReactDom from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import Routes from './routes';
// class App extends React.Component {
//   render() {
//     return (
//       <div> hi stark  呵呵</div>
//     )
//   }
// }
// // const App = () => {
// // 	return (
// // 		<div>哈哈</div>
// // 	)
// // }

// ReactDom.render(<App />, document.getElementById('root'))


import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import { getClientStore, getStore } from './store';
// const store = getStore();
const store = getStore();
const App = () => (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </div>
      </BrowserRouter>
    </Provider>
)

ReactDom.hydrate(<App />, document.getElementById('root'))
