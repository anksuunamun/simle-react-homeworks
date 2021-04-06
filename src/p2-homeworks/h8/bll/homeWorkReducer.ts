import {HumanType, InitialPeopleType} from '../HW8';

type SortPeopleActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}

type CheckAgeActionType = {
    type: 'check'
    payload: number
}

type ActionType = SortPeopleActionType | CheckAgeActionType;

export const homeWorkReducer = (state: InitialPeopleType, action: ActionType): InitialPeopleType => {
    switch (action.type) {
        case 'sort': {
            let localState = [...state]
            if (action.payload === 'up') {
                const sortFunction = (a: HumanType, b: HumanType) => {
                    return a.name > b.name ? 1 : -1
                }
                localState.sort(sortFunction)
                return localState;
            } else if (action.payload === 'down') {
                const sortFunction = (a: HumanType, b: HumanType) => {
                    return a.name > b.name ? -1 : 1
                }
                localState.sort(sortFunction)
                return localState;
            }
            return state
        }
        case 'check': {
            return state.filter((human: HumanType) => human.age > action.payload);
        }
        default:
            return state
    }
};