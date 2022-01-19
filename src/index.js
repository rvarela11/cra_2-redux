// @vendors
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

// @containers
import Root from './components/App/App';

// @reducers
import { reducer } from './reducers';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// Setting the Material-UI theme
const theme = {
    palette: {
        primary: {
            main: '#49aaca'
        },
        secondary: {
            main: '#ef9a9a'
        }
    },
    status: {
        danger: 'orange'
    },
    typography: {
        useNextVariants: true
    }
};

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Root />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
