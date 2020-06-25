export const START_TUTORIAL = 'app/test-flow/tutorial/START_TUTORIAL'
export const NEXT_TIP = 'app/test-flow/tutorial/NEXT_TIP'
export const SKIP_ALL_TIPS = 'app/test-flow/tutorial/SKIP_ALL_TIPS'
// export const ANIMATE_FINAL_STEP = 'app/test-flow/tutorial/ANIMATE_FINAL_STEP'

export const startTutorial = () => ({
    type: START_TUTORIAL
})
export const nextTip = () => ({
    type: NEXT_TIP
})
export const skipAllTips = () => ({
    type: SKIP_ALL_TIPS
})