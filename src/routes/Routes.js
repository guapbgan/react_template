import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Form = lazy(() => import('../pages/Form'));
// const Contact = lazy(() => import('../pages/Contact'));

function AppRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="form" element={<Form />} />
                {/* <Route path="contact" element={<Contact />} /> */}
            </Routes>
        </Suspense >
    );
}

export default AppRoutes;
