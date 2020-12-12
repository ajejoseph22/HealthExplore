export const setSort = (selectedSort, sortOption) => {
    return {
        type: 'SET_SORT',
        selectedSort: selectedSort,
        sortOption: sortOption,
    };
};
