export const localStorageKeys = {
    AUTH_STATE: 'authState',
    SKIP_TUTORIAL: 'skipTutorial'
}

export const saveState = (state) => {
    try {
        // console.log(state.localStorage)
        if (state.testFlow.localStorage) {
            for (const [localStorageKey, localStorageValue] of Object.entries(state.testFlow.localStorage)) {
                console.log(localStorageKey, localStorageValue);
                const serialisedLocalStorageValue = JSON.stringify(localStorageValue);
                localStorage.setItem(localStorageKey, serialisedLocalStorageValue);
            }
        }
    } catch (err) {
        console.error(err)
    }
};
console.log('Init loadState');
export const loadState = (key) => {
    try {
        const serialisedState = localStorage.getItem(key);
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};