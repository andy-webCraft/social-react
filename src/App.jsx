import React from 'react';
import './css/App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content/content';
import SidebarContainer from './components/Sidebar/sidebar-container';
import HeaderContainer from './components/Header/header-container';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <div className="app-content">
                    <div className="container">
                        <div className="sidebar-wrapper">
                            <SidebarContainer />
                        </div>
                        <div className="content-wrapper">
                            <Content />
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
