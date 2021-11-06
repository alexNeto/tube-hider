const populateContent = () => {
  state.all.reference = queryId("content");
  state.sideMenu.reference = queryId("guide");
  state.homeContent.reference = queryId("contents");
  state.header.reference = queryId("header");
  state.pageManeger.reference = queryId("page-manager");
  state.chipsWrapper.reference = queryId("chips-wrapper");
};

const hideSidemenu = () => {
  updateState(state.sideMenu, "none");
  state.pageManeger.reference.style.marginLeft = 0;
  state.chipsWrapper.reference.style.width = "100%";
  document.getElementsByTagName("body")[0].style.overflowY = "hidden";
};

const hideContents = () => {
  updateState(state.homeContent, "none");
  state.homeContent.reference.style.height = "0";
};

const hideAll = () => {
  populateContent();
  hideSidemenu();
  hideContents();
  updateState(state.header, "none");
};

hideAll();
