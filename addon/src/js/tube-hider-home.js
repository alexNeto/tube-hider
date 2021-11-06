const populateContent = () => {
  state.all.reference = queryId("content");
  state.sideMenu.reference = queryId("guide");
  state.homeContent.reference = queryId("contents");
  state.header.reference = queryId("header");
};

const hideAll = () => {
  populateContent();
  updateState(state.sideMenu, "none");
  updateState(state.homeContent, "none");
  updateState(state.header, "none");
};

hideAll();
