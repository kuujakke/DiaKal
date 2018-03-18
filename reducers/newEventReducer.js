const newEventReducer = (store = {content: ''}, action) => {
    switch (action.type) {
        case 'SET-NEW-EVENT':
            return {...action.data}
        default:
            return store
    }
}

export const setNewEvent = (event) => {
    return async (dispatch) => {
        dispatch({type: 'SET-NEW-EVENT', data: event})
    }
}

export default newEventReducer