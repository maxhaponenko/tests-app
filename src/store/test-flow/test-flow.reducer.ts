import { 
    SELECT_GROUP, 
    SELECT_LEVEL, 
    SET_READY_TO_START,
    PREV_STEP, 
    FIRST_STEP,
    DISPOSE_FLOW 
} from './test-flow.actions'
import { TutorialState } from './tutorial-flow/tutorial-flow.reducer'
import { attachReducers } from 'utils/attach-reducers'
import { AppState } from 'store/root.reducer'
import tutorialFLowReducer from './tutorial-flow/tutorial-flow.reducer'
import { tests }  from 'constants/tests';

export interface TestsFlow {
    testId: number | null;
    testName: string;
    testLevel: string;
    testDuration: number | null;
    testStarted: boolean;
    testData: any;
    currentStep: number;
    currentQuestion: number | null;
    isReadyToStart: boolean;
    tutorialFlow?: TutorialState;
}

const initialState: TestsFlow = {
    testId: null,
    testName: '',
    testLevel: '',
    testDuration: 0,
    testStarted: false,
    testData: tests[0].data,
    currentStep: 1,
    currentQuestion: 1,
    isReadyToStart: false,
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
        case SET_READY_TO_START: {
            return {
                ...state,
                isReadyToStart: true
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

export default attachReducers(testsFlowReducer, {
    tutorialFlow: tutorialFLowReducer
})

export class TestsFlowSelector {
    public static isReadyToStart(state: AppState): boolean {
        return state.testFlow.isReadyToStart
    }
}