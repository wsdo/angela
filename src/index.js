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
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import getStore from './store';
import { Provider } from 'react-redux';
const store = getStore();
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {Routes}
        </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.hydrate(<App />, document.getElementById('root'))
