import Duck from 'extensible-duck'

export default new Duck({
    namespace: 'my-app',
    store: 'app',
    types: ['FETCH_DATA'],
    initialState: require('../initialState'),
    reducer: (state, action, duck) => {
        switch (action.type) {
            default:
                return state;
        }
    },
    selectors: {
        root: state => state
    },
    creators: (duck) => ({
        fetchData: () => ({type: duck.types.FETCH_DATA})
    })

})
