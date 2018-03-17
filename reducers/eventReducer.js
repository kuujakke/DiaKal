import eventService from '../services/events'

const eventReducer = (store = [], action) => {
    switch (action.type) {
        case 'INIT-EVENTS':
            return [...action.data]
        default:
            return store
    }
}

export const initializeEvents = () => {
    return async (dispatch) => {
        const events = await eventService.getAll()
        dispatch({type: 'INIT-EVENTS', data: events})
    }
}

export default eventReducer