const newEventReducer = (store = {content: ''}, action) => {
    switch (action.type) {
        case 'SET-NEW-EVENT':
            return {...action.data}
        case 'RESET-NEW-EVENT':
            return {content: ''}
        default:
            return store
    }
}

export const setNewEvent = (event) => {
    return async (dispatch) => {
        dispatch({type: 'SET-NEW-EVENT', data: event})
    }
}

export const resetNewEvent = () => {
    return async (dispatch) => {
        dispatch({type: 'RESET-NEW-EVENT'})
    }
}

export default newEventReducer