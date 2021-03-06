import settingsService from '../services/settings'

const settingsReducer = (store = {}, action) => {
    switch (action.type) {
        case 'INIT-SETTINGS':
            return {...action.data}
        case 'SET-BLOOD-GLUCOSE-EFFECTIVENESS':
            return {...store, bloodGlucoseEffectiveness: action.data}
        case 'SET-CARBOHYDRATES-EFFECTIVENESS':
            return {...store, carbohydratesEffectiveness: action.data}
        case 'SET-DEFAULT-TARGET-BLOOD-GLUCOSE':
            return {...store, defaultTargetBloodGlucose: action.data}
        default:
            return store
    }
}

export const initializeSettings = () => {
    return async (dispatch) => {
        const settings = await settingsService.getSettings()
        dispatch({type: 'INIT-SETTINGS', data: settings})
    }
}

export const setBloodGlucoseEffectiveness = (event) => {
    return (dispatch) => {
        dispatch({type: 'SET-BLOOD-GLUCOSE-EFFECTIVENESS', data: event})
    }
}

export const setCarbohydratesEffectiveness = (event) => {
    return (dispatch) => {
        dispatch({type: 'SET-CARBOHYDRATES-EFFECTIVENESS', data: event})
    }
}

export const setDefaultTargetBloodGlucose = (event) => {
    return (dispatch) => {
        dispatch({type: 'SET-DEFAULT-TARGET-BLOOD-GLUCOSE', data: event})
    }
}

export default settingsReducer