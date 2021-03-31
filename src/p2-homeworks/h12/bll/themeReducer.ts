export type ThemeType = 'dark' | 'red' | 'some' | 'yellow' | 'darkBlue' | 'standard'

const initState = {
    theme: 'standard' as ThemeType
};

export type ChangeThemeActionType = {
    type: `CHANGE_THEME`
    theme: ThemeType
}

export const changeThemeAC = (theme: ThemeType): ChangeThemeActionType => {
    return {
        type: `CHANGE_THEME` as const,
        theme
    }
}

export const themeReducer = (state = initState, action: ChangeThemeActionType): typeof initState => { // fix any
    switch (action.type) {
        case 'CHANGE_THEME': {
            return {
                ...state, theme: action.theme
            }
        }
        default:
            return state;
    }
};

// export const changeThemeC = (): any => {
// }; // fix any