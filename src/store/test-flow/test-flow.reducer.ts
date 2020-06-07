import { SELECT_GROUP, PREV_STEP } from './test-flow.actions'

export interface TestsFlow {
    testId: number | null;
    testName: string;
    testStarted: boolean;
    currentStep: number;
    currentQuestion: number | null;
}

const initialState: TestsFlow = {
    testId: null,
    testName: '',
    testStarted: false,
    currentStep: 1,
    currentQuestion: null,
}

const testsFlowReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SELECT_GROUP: {
            return {
                ...state,
                testName: action.payload.testName,
                currentStep: state.currentStep + 1
            }
        }
        case PREV_STEP: {
            return {
                ...state,
                currentStep: state.currentStep - 1
            }
        }
        default: {
            return state
        }
    }
}

export default testsFlowReducer