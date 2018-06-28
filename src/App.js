import React from 'react'; 
import ReactDOM from 'react-dom';
import Application from './components/main.jsx'; 
import { AppContainer } from 'react-hot-loader';
//^^^ Preserve react state

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>, 
  document.getElementById("root"));
}

render(Application);

if (module.hot) {
  module.hot.accept('./components/main.jsx', () => {
    const NewApplication = require('./components/main.jsx').default
    render(NewApplication); 
  }); 
}