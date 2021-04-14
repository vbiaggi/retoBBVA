import React, { useRef } from 'react';

//react router
import { BrowserRouter } from 'react-router-dom';

//Global routes
import Modules from '../modules';

//ScrollRouter
import ScrollToTopRouter from './ScrollTopRouter';

const { componentRouter: RouterBBVA } = Modules.moduleRouter;

const AppRouter = () => {
    //hooks
    const refContainer = useRef();

    return (
        <BrowserRouter>
            <ScrollToTopRouter anotherContainer={refContainer} />
            <RouterBBVA />
        </BrowserRouter>
    );
}

export default AppRouter;
