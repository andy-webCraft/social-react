import React, { Suspense } from "react";
import { Routes, Route, useMatch, Navigate } from 'react-router-dom';
import ProfileContainer from "./Profile/profile-container";
import FriendsContainer from "./Friends/friends-container";
import MessageContainer from "./Message/message-container";
import GroupContainer from "./Group/group-container";
// import PeopleContainer from "./People/people-container";
import Login from "./Login/login";
import Preloader from "../common/preloader/preloader";
const PeopleContainer = React.lazy(() => import("./People/people-container"));

const Content = (props) => {
    return (
        <div className="content">
            <Suspense fallback={<Preloader />}>
                <Routes>
                    <Route path='' element={props.isLogin ? <Navigate to='/profile' /> : <Navigate to='/login' />} /> 
                    <Route path='/profile'>
                        <Route path='' element={<ProfileContainer />} />
                        <Route path=':userId' element={<ProfileContainer math={useMatch("profile/:userId")} />} />
                    </Route>
                    <Route path='/login' element={<Login />} />
                    <Route path='/friends' element={<FriendsContainer />} />
                    <Route path='/message' element={<MessageContainer />} />
                    <Route path='/group' element={<GroupContainer />} />
                    <Route path='/people' element={<PeopleContainer />} />
                    <Route path='*' element={<div>404 Not Found</div>} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default Content