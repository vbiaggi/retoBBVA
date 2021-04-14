import React from 'react';

//react router
import { Route, Switch, Redirect } from 'react-router-dom';

//Routes
import { HomeRoutes, HomeRouter } from '../home';

const RouterApvSF = () => {
    return (
        <Switch>
            <Route exact path={HomeRoutes} component={HomeRouter}/>
            <Redirect to="/" />
        </Switch>
    );
}

export default RouterApvSF;
