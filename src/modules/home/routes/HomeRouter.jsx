import React from 'react'
import { Route, Switch } from 'react-router-dom';

//Custom routes
import HomeRoutes from './HomeRoutes';

//Pages
import Home from '../pages/Home';

//Components

const HomeRouter = () => {
    return (
        <>
            <Switch>
                <Route
                    exact
                    path={HomeRoutes[0]}
                    component={Home}
                />
            </Switch>
        </>
    )
}
export default HomeRouter;