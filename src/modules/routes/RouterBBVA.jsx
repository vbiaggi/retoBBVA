import React from 'react';

//react router
import { Route, Switch, Redirect } from 'react-router-dom';

//Routes
import { HomeRoutes, HomeRouter } from '../home';
import { ProductsRoutes, ProductsRouter } from '../products';

const RouterApvSF = () => {
    return (
        <Switch>
            <Route exact path={HomeRoutes} component={HomeRouter}/>
            <Route exact path={ProductsRoutes} component={ProductsRouter}/>
            <Redirect to="/" />
        </Switch>
    );
}

export default RouterApvSF;
