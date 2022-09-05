import React from 'react';
import { Route, Routes } from "react-router-dom";
import { withCookies } from "react-cookie";

// Views
import HomeView from "./Views/HomeView";

class App extends React.Component {

    render() {
        return (
            <div>
                <Routes>
                    <Route path='/' element={<HomeView />} />
                </Routes>
            </div>
        );
    }
}

export default withCookies(App);
