import { 
    SELECT_GROUP, 
    SELECT_LEVEL, 
    PREV_STEP, 
    FIRST_STEP,
    DISPOSE_FLOW 
} from './test-flow.actions'

export interface TestsFlow {
    testId: number | null;
    testName: string;
    testLevel: string;
    testDuration: number | null;
    testStarted: boolean;
    currentStep: number;
    currentQuestion: number | null;
}

const initialState: TestsFlow = {
    testId: null,
    testName: '',
    testLevel: '',
    testDuration: 0,
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
        case SELECT_LEVEL: {
            return {
                ...state,
                testLevel: action.payload.testLevel,
                testDuration: action.payload.testDuration,
                currentStep: state.currentStep + 1
            }
        }
        case PREV_STEP: {
            return {
                ...state,
                currentStep: state.currentStep - 1
            }
        }
        case FIRST_STEP: {
            return {
                ...state,
                currentStep: 1
            }
        }
        case DISPOSE_FLOW: {
            return initialState
        }
        default: {
            return state
        }
    }
}

export default testsFlowReducer