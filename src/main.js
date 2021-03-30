import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Catalog from './components/catalog';
import App from './App.js';
import Instagram from './components/instagram';
import Shoppingcart from './components/shoppingcart';
import { CartContextProvider } from './Global/CartContext'
import { ProductsContextProvider } from './Global/ProductsContext'


const Main = () => (
    <ProductsContextProvider>
        <CartContextProvider>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/instagram" component={Instagram} />
                <Route path="/catalog" component={Catalog} />
                <Route path="/shoppingcart" component={Shoppingcart} />
            </Switch>
        </CartContextProvider>
    </ProductsContextProvider>

)

export default Main;