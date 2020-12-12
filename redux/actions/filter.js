export const setFilter = (index, filter) => {
    return {
        type: 'SET_FILTER',
        index: index,
        filter: filter,
    };
};

export const clearFilter = () => {
    return {
        type: 'CLEAR_FILTER'
    }
}
