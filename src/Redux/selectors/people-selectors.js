export const getPeople = (state) => {
  return state.peoplePage.currentPeople;
};

export const getPageSize = (state) => {
  return state.peoplePage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.peoplePage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.peoplePage.currentPage;
};

export const getIsFetching = (state) => {
  return state.peoplePage.isFetching;
};

export const getIsFollowingProgress = (state) => {
  return state.peoplePage.isFollowingProgress;
};
