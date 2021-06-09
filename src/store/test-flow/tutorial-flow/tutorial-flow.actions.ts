import { AppState } from "store/root.reducer"

export const START_TUTORIAL = 'app/test-flow/tutorial/START_TUTORIAL'
export const NEXT_TIP = 'app/test-flow/tutorial/NEXT_TIP'
export const SKIP_ALL_TIPS = 'app/test-flow/tutorial/SKIP_ALL_TIPS'
export const CLOSE_TUTORIAL = 'app/test-flow/tutorial/CLOSE_TUTORIAL'

export const startTutorial = () => ({
    type: START_TUTORIAL
})

export const nextTip = () => {
    return (dispatch: any, getState: () => AppState) => {
        const currentTip = getState().testFlow.tutorialFlow!.currentTip;
        if (currentTip < 4) {
            dispatch({type: NEXT_TIP})
        } else {
            dispatch(closeTutorial())
        }
    }
}
export const skipAllTips = () => ({
    type: SKIP_ALL_TIPS
})
export const closeTutorial = () => ({
    type: CLOSE_TUTORIAL
})