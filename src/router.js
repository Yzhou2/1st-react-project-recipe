import React from "react";
import { Switch, Route } from "react-router-dom";

import App from './App';
import SearchResult from './components/SearchResult';
import MainBody from './components/MainBody';
import Kitchenware from './components/Kitchenware';
import Products from './components/Products';
import Wine from './components/Wine';
import Cart from './components/Cart';

export default (
  <Switch>
    <Route component={ MainBody } path="/" exact />
    <Route component={ SearchResult } path="/searchresults/:food" />
    <Route component={ Kitchenware } path="/kitchenware"  />
    <Route component={ Products } path="/products"  />
    <Route component={ Wine } path="/wine"  />
    <Route component={ Cart } path="/cart"  />
  </Switch>
)
