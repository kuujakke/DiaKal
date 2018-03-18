import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import eventReducer from './reducers/eventReducer'
import newEventReducer from './reducers/newEventReducer'

const reducer = combineReducers({
    events: eventReducer,
    newEvent: newEventReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store