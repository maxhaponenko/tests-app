export const SELECT_GROUP = 'app/test-flow/SELECT_GROUP'
export const SELECT_LEVEL = 'app/test-flow/SELECT_LEVEL'
export const PREV_STEP = 'app/test-flow/PREV_STEP'

export const selectGroup = (testName: string) => ({
    type: SELECT_GROUP,
    payload: {
        testName: testName
    }
})
export const selectLevel = (level: string, duration: number) => ({
    type: SELECT_LEVEL,
    payload: {
        testLevel: level,
        testDuration: duration
    }
})

export const prevStep = () => ({
    type: PREV_STEP
})