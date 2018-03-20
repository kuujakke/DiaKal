const initialState = {
    effectiveness: 1,
    bloodGlucose: 0,
    calculatedDose: 0,
}

const calculatorReducer = (store = initialState, action) => {
    switch (action.type) {
        case 'INIT-CALC':
            return {...action.data}
        case 'SET-EFFECTIVENESS':
            return {...store, effectiveness: action.data}
        case 'SET-BLOOD-GLUCOSE':
            return {...store, bloodGlucose: action.data}
        case 'SET-CALCULATED-DOSE':
            return {...store, calculatedDose: action.data}
        default:
            return store
    }
}

export const setEffectiveness = (event) => {
    return async (dispatch) => {
        dispatch({type: 'SET-EFFECTIVENESS', data: event})
    }
}

export const setBloodGlucose = (event) => {
    return async (dispatch) => {
        dispatch({type: 'SET-BLOOD-GLUCOSE', data: event})
    }
}

export const setCalculatedDose = (event) => {
    return async (dispatch) => {
        dispatch({type: 'SET-CALCULATED-DOSE', data: event})
    }
}

export default calculatorReducer