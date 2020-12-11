const initialState = {
    filter: {
        keywords: ['test', 'test2']
    }
};

const filterReducer = (state = initialState, action) => {
    if (action.type === 'SET_FILTER') {
        return Object.assign({}, state, {
            filter: action.filter,
        });
    }
    else return state;
};

export default filterReducer;
