import React, { useRef } from 'react';

//react router
import { BrowserRouter } from 'react-router-dom';

//Global routes
import Modules from '../modules';
import { Navbar } from '../modules/shared/components';

//ScrollRouter
const { componentRouter: RouterBBVA } = Modules.moduleRouter;

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <RouterBBVA />
        </BrowserRouter>
    );
}

export default AppRouter;
