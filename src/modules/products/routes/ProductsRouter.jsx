import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';

//Custom routes
import ProductsRoutes from './ProductsRoutes';

//Pages
import Products from '../pages/Products';

//Components

const ProductsRouter = () => {
    return (
        <>
            <Switch>
                <Route
                    exact
                    path={ProductsRoutes[0]}
                    component={Products}
                />
            </Switch>
        </>
    )
}
export default ProductsRouter;