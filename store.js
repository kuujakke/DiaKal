import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import eventReducer from './reducers/eventReducer'
import newEventReducer from './reducers/newEventReducer'
import Navigation from './components/Navigation'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

const navReducer = (state, action) => {
  const nextState = Navigation.router.getStateForAction(action, state);
  return nextState || state;
}

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
)

const reducer = combineReducers({
    events: eventReducer,
    newEvent: newEventReducer,
    navigation: navReducer
})

const store = createStore(reducer, applyMiddleware(thunk, middleware))

export default store