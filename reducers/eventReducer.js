import eventService from '../services/events'

const eventReducer = (store = [], action) => {
    switch (action.type) {
        case 'INIT-EVENTS':
            return [...action.data]
        case 'INSERT-EVENTS':
            return [...store, ...action.data]
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

export const createEvent = (event) => {
    return async (dispatch) => {
        const response = await eventService.create(event)
        dispatch({type: 'INSERT-EVENT', data: event})
    }
}

export default eventReducer