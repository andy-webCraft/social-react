import React, { useEffect } from 'react';
import './css/App.scss';
import { HashRouter } from 'react-router-dom';
import Content from './components/Content/content';
import SidebarContainer from './components/Sidebar/sidebar-container';
import HeaderContainer from './components/Header/header-container';
import { connect } from 'react-redux';
import { initializedApp, toogleAppTheme } from './Redux/app-reducer';
import Preloader from './components/common/preloader/preloader';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./components/common/themes/themes";

const App = ({ initialized, initializedApp, theme, toogleAppTheme }) => {
    useEffect(() => initializedApp(), [initialized, initializedApp])
    useEffect(() => { localStorage.getItem("theme") && toogleAppTheme(localStorage.getItem("theme")) }, [toogleAppTheme])

    return (
        <HashRouter>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                {!initialized
                    ? <Preloader />
                    : <div className="app-wrapper">
                        <HeaderContainer />
                        <div className="container">
                            <div className="app-content">
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
            </ThemeProvider>
        </HashRouter>
    )
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    theme: state.app.theme,
})

export default connect(mapStateToProps, { initializedApp, toogleAppTheme })(App)