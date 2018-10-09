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
import { getClientStore } from './store';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  )
}

ReactDom.hydrate(<App />, document.getElementById('root'))
