import React from 'react';

import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(

    // <React.StrictMode>
    <BrowserRouter>
        {/* <App tab="home" />); */}
        <App />
    </BrowserRouter>
    // </React.StrictMode>
    ,);