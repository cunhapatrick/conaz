import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import App from './App';

WebFont.load({
  google: {
    families: ['Roboto'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
