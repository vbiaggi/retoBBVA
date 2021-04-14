import React from 'react';

//react router
import { Route, Switch, Redirect } from 'react-router-dom';

//Routes
import { HomeRoutes, HomeRouter } from '../home';
import { ProductsRoutes, ProductsRouter } from '../products';
import { AuthRoutes, AuthRouter } from '../auth';

const RouterApvSF = () => {
    return (
        <Switch>
            <Route exact path={HomeRoutes} component={HomeRouter}/>
            <Route exact path={ProductsRoutes} component={ProductsRouter}/>
            <Route exact path={AuthRoutes} component={AuthRouter}/>
            <Redirect to="/" />
        </Switch>
    );
}

export default RouterApvSF;
