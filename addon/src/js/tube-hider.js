const state = {
  all: {
    reference: "",
    prevous: "",
    desired: "",
  },
  sideMenu: {},
  homeContent: {},
  header: {},
  secondary: {},
  sections: {},
};

const queryId = (id) => {
  return document.getElementById(id) || {};
};

const populateContent = () => {
  state.all.reference = queryId("content");
  state.sideMenu.reference = queryId("guide");
  state.homeContent.reference = queryId("contents");
  state.header.reference = queryId("header");
  state.secondary.reference = queryId("secondary");
  state.sections.reference = queryId("sections");
};

const updateState = (node, desired) => {
  node.prevous = (((node || {}).reference || {}).style || {}).display;
  node.desired = desired;
  if (desired !== (node || {}).prevous) {
    node.reference.style.display = desired;
  }
};
const hideAll = () => {
  populateContent();
  updateState(state.sideMenu, "none");
  updateState(state.homeContent, "none");
  updateState(state.header, "none");
  // updateState(state.secondary, "none");
  // updateState(state.sections, "none");
};

hideAll();
