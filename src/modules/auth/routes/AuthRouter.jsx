import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';

//Custom routes
import AuthRoutes from './AuthRoutes';

//Pages
import Login from '../pages/Login';

//Components

const AuthRouter = () => {
    return (
        <>
            <Switch>
                <Route
                    exact
                    path={AuthRoutes[0]}
                    component={Login}
                />
            </Switch>
        </>
    )
}
export default AuthRouter;