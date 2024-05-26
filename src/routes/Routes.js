import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../components/Layout';

const Home = lazy(() => import('../pages/Home'));
// const About = lazy(() => import('../pages/About'));
// const Contact = lazy(() => import('../pages/Contact'));

function AppRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    {/* <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} /> */}
                </Route>
            </Routes>
        </Suspense>
    );
}

export default AppRoutes;
