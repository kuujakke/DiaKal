import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import eventReducer from './reducers/eventReducer'

const reducer = combineReducers({
    events: eventReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store