

const initState = {
    loading: false,
};

export type SetLoadingActionType = {
    type: 'SET_LOADING',
    loading: boolean,
}

export const SetLoadingAC = (loading: boolean): SetLoadingActionType => {
    return {
        type: 'SET_LOADING', loading
    }
}

export const loadingReducer = (state = initState, action: SetLoadingActionType): typeof initState => { // fix any
    switch (action.type) {
        case 'SET_LOADING': {
            return {...state, loading: action.loading};
        }
        default:
            return state;
    }
};
//
// export const loadingAC = (): any => {
// }; // fix any