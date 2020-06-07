export const SELECT_GROUP = 'app/test-flow/SELECT_GROUP';
export const PREV_STEP = 'app/test-flow/PREV_STEP'

export const selectGroup = (testName: string) => ({
    type: SELECT_GROUP,
    payload: {
        testName: testName
    }
})

export const prevStep = () => ({
    type: PREV_STEP
})