import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './modules/layout/index';
import Home from './modules/pages/home/index';
import NotFoundPage from './modules/pages/notFound';

const modulesData = [
  { path: '/', title: 'home', component: <Home /> },
  { path: '/404', title: 'NotFound', component: <NotFoundPage /> },
];

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            {modulesData.map((route) => (
              <Route key={route.title} path={route.path} element={route.component} />
            ))}
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
