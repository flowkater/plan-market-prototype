import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'containers/Root';
import { AppContainer } from "react-hot-loader";

import configureStore from "modules/configureStore";

const store = configureStore();
const rootEl = document.getElementById('root');


const render = Component =>
    ReactDOM.render(
        <AppContainer>
            <Component store={store} />
        </AppContainer>,
    rootEl
);

window.onload = function () {
    render(Root);
}

if (module.hot) module.hot.accept('./containers/Root', () => render(Root));