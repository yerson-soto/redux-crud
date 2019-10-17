import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
   render() {
      return (
         <Fragment>
            <Router>
               <Header />

               <div className="container mt-4">
                  <Switch>
                     <Route exact path="/" component={Products} />
                     <Route exact path="/products" component={Products} />
                     <Route exact path="/products/new" component={AddProduct} />
                     <Route exact path="/products/edit/:id" component={EditProduct} />
                  </Switch>
               </div>
            </Router>
         </Fragment>

      );
   }
}

export default App;
