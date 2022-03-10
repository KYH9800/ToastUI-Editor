// state
const initialState = {
  editorData: {},
};

// actions
export const SET_EDITOR_DATA = 'SET_EDITOR_DATA';

export const setEditorData = (editordata) => {
  return {
    type: SET_EDITOR_DATA,
    editorData: editordata,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDITOR_DATA:
      return {
        ...state,
        editorData: action.editorData,
      };
    default:
      return state;
  }
};

export default reducer;
