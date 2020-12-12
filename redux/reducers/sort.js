const initialState = {
    selectedSort: null,
    sortOption: 'neutral'
};

const sortReducer = (state = initialState, action) => {
    if (action.type === 'SET_SORT') {
        return Object.assign({}, state, {
            selectedSort: action.selectedSort,
            sortOption: action.sortOption
        });
    }
    else return state;
};

export default sortReducer;
