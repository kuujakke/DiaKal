const initialState = {
    effectiveness: 1,
    bloodGlucose: 0,
    carbohydrates: 0,
    insulinUnits: 0,
    BGInsulinEffect: 2,
    CarbInsulinEffect: 10,
    targetBloodGlucose: 7,
}

const calculatorReducer = (store = initialState, action) => {
    switch (action.type) {
        case 'INIT-CALC':
            return {...action.data}
        case 'SET-EFFECTIVENESS':
            const stateEff = {...store, effectiveness: action.data}
            return {...stateEff, insulinUnits: calculateDose(stateEff)}
        case 'SET-BLOOD-GLUCOSE':
            const stateBG = {...store, bloodGlucose: action.data}
            return {...stateBG, insulinUnits: calculateDose(stateBG)}
        case 'SET-TARGET-BLOOD-GLUCOSE':
            const stateTargetBG = {...store, targetBloodGlucose: action.data}
            return {...stateTargetBG, insulinUnits: calculateDose(stateTargetBG)}
        case 'SET-CARBOHYDRATES':
            const stateCarb = {...store, carbohydrates: action.data}
            return {...stateCarb, insulinUnits: calculateDose(stateCarb)}
        default:
            return store
    }
}

export const setEffectiveness = (event) => {
    return (dispatch) => {
        dispatch({type: 'SET-EFFECTIVENESS', data: event})
    }
}

export const setBloodGlucose = (event) => {
    return (dispatch) => {
        dispatch({type: 'SET-BLOOD-GLUCOSE', data: event})
    }
}

export const setTargetBloodGlucose = (event) => {
    return (dispatch) => {
        dispatch({type: 'SET-TARGET-BLOOD-GLUCOSE', data: event})
    }
}

export const setCarbohydrates = (event) => {
    return (dispatch) => {
        dispatch({type: 'SET-CARBOHYDRATES', data: event})
    }
}

const calculateDose = (state) => {
    const BGEffectiveness = state.BGInsulinEffect * state.effectiveness
    const CarbEffectiveness = state.CarbInsulinEffect * state.effectiveness
    const excessGlucose = state.bloodGlucose - state.targetBloodGlucose
    return (excessGlucose / BGEffectiveness) + (state.carbohydrates / CarbEffectiveness)
}

export default calculatorReducer