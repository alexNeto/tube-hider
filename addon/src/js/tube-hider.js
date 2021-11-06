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

const updateState = (node, desired) => {
  node.prevous = (((node || {}).reference || {}).style || {}).display;
  node.desired = desired;
  if (desired !== (node || {}).prevous) {
    node.reference.style.display = desired;
  }
};
