export const getPeople = (state) => {
  return state.PeoplePage.currentPeople;
};

export const getPageSize = (state) => {
  return state.PeoplePage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.PeoplePage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.PeoplePage.currentPage;
};

export const getIsFetching = (state) => {
  return state.PeoplePage.isFetching;
};

export const getIsFollowingProgress = (state) => {
  return state.PeoplePage.isFollowingProgress;
};
