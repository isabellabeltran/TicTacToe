import React from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Application from './components/index.jsx'; 
import { AppContainer } from 'react-hot-loader';

function render(Component) {
  ReactDOM.render(
    <BrowserRouter> 
    <AppContainer>
      <Component />
    </AppContainer>
    </BrowserRouter>, 
  document.getElementById("root"));
}

render(Application);

if (module.hot) {
  module.hot.accept('./components/index.jsx', () => {
    const NewApplication = require('./components/index.jsx').default
    render(NewApplication); 
  }); 
}