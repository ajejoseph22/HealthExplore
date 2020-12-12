const initialState = {
    filterIndex: null,
    filter: null
};

const filterReducer = (state = initialState, action) => {
    if (action.type === 'SET_FILTER') {
        return Object.assign({}, state, {
            filterIndex: action.index,
            filter: action.filter
        });
    }
    else if (action.type === 'CLEAR_FILTER') {
        return Object.assign({}, state, {
            filterIndex: null,
            filter: null
        });
    }
    else return state;
};

export default filterReducer;
