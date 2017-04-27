import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from "./js/app";

// MaterialUI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// TapEvents
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Styles
import './index.css';

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>,
    document.getElementById('app')
);
