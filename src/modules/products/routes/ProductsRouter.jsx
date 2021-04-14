import React from 'react'
import { Route, Switch } from 'react-router-dom';

//Custom routes
import ProductsRoutes from './ProductsRoutes';

//Pages
import Products from '../pages/Products';
import recommendlist from '../pages/recommendlist';
import dataform from '../pages/dataform';

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
                   <Route
                    exact
                    path={ProductsRoutes[1]}
                    component={recommendlist}
                />
                  <Route
                    exact
                    path={ProductsRoutes[2]}
                    component={dataform}
                />
            </Switch>
        </>
    )
}
export default ProductsRouter;