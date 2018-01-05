import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route , Switch} from 'react-router-dom' //Para coger la URL del navegador
import reducers from './reducers';
import ShowsGrid from './containers/shows_grid';
import Header from './containers/header';
import Footer from './containers/footer';


import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { ThemeProvider }  from 'styled-components';

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);

ReactDOM.render(

  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <ThemeProvider theme={{
          primaryFontColor: '#1B2F3C',
          secondaryFontColor:'white',
          primaryColor:'#2B5F95',
          alterPrimaryColor:'#efe9e9',
          secondaryColor:'#6AB1D8',
          tertiaryColor:'#1B2F3C',
          fourthColor:'#585858',
          fifthColor:'#c3c3c3'
        }}>
        <div>
        <Header />
        <Switch>
          <Route path="/" component={ShowsGrid} />
        </Switch>
        <Footer/>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.general_container'));
