import React from "react";
import { Routes, Route, useMatch } from 'react-router-dom';
import ProfileContainer from "./Profile/profile-container";
import FriendsContainer from "./Friends/friends-container";
import MessageContainer from "./Message/message-container";
import GroupContainer from "./Group/group-container";
import PeopleContainer from "./People/people-container";
import Login from "./Login/login";

const Content = (props) => {
    return (
        <div className="content">
            <Routes>
                <Route path='/profile'>
                    <Route path='' element={<ProfileContainer />} />
                    <Route path=':userId' element={<ProfileContainer math={useMatch("profile/:userId")} />} />
                </Route>
                {/* <Route path='/profile/:userId' element={<ProfileContainer />} /> */}
                <Route path='/login' element={<Login />} />
                <Route path='/friends' element={<FriendsContainer />} />
                <Route path='/message' element={<MessageContainer />} />
                <Route path='/group' element={<GroupContainer />} />
                <Route path='/people' element={<PeopleContainer />} />
            </Routes>
        </div>
    )
}

export default Content