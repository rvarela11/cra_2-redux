const initialState = {
    apiDataAllFiltered: []
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_DATA':
            const apiDataNoQ5NoA5C = action.payload.filter(({ name }) => !name.match(/(Q5|A5C)/));
            return {
                ...state,
                apiDataAllFiltered: apiDataNoQ5NoA5C
            };
        default:
            return state;
    }
}
