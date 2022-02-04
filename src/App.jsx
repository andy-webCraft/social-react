import React, { useEffect } from 'react';
import './css/App.css';
import { HashRouter } from 'react-router-dom';
import Content from './components/Content/content';
import SidebarContainer from './components/Sidebar/sidebar-container';
import HeaderContainer from './components/Header/header-container';
import { connect } from 'react-redux';
import { initializedApp } from './Redux/app-reducer';
import Preloader from './components/common/preloader/preloader';

const App = ({ initialized, initializedApp }) => {
    useEffect(() => initializedApp(), [initialized, initializedApp])

    return (
        <HashRouter>
            {!initialized
                ? <Preloader />
                : <div className="app-wrapper">
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
            }
        </HashRouter>
    )
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps, { initializedApp })(App)