import { 
    SELECT_GROUP, 
    SELECT_LEVEL, 
    SET_READY_TO_START,
    PREV_STEP, 
    FIRST_STEP,
    DISPOSE_FLOW 
} from './test-flow.actions'
import {loadState, localStorageKeys} from "../../utils/state-handler";
import { TutorialState } from './tutorial-flow/tutorial-flow.reducer'
import { attachReducers } from 'utils/attach-reducers'
import { AppState } from 'store/root.reducer'
import tutorialFLowReducer from './tutorial-flow/tutorial-flow.reducer'
import { tests }  from 'constants/tests';
import {CLOSE_TUTORIAL, SKIP_ALL_TIPS} from "./tutorial-flow/tutorial-flow.actions";

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
    localStorage: {
        authState: string | null,
        skipTutorial: boolean | null
    }
    tutorialFlow?: TutorialState;
}

console.log('test-flow Reducer');

const authState = loadState(localStorageKeys.AUTH_STATE) //ForMax: Why can't I use it here if loadState is in create-store?
const skipTutorial = loadState(localStorageKeys.SKIP_TUTORIAL) //ForMax: Why can't I use it here if loadState is in create-store

// const authState = localStorage.getItem(localStorageKeys.AUTH_STATE)
// const skipTutorial = localStorage.getItem(localStorageKeys.SKIP_TUTORIAL) === true

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
    localStorage: {
        authState,
        skipTutorial
    }
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
                currentStep: state.currentStep + 1,
                tutorialFlow:{
                    ...state.tutorialFlow,
                    isFinished: false
                }
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

        case SKIP_ALL_TIPS:
        case CLOSE_TUTORIAL: {
            return {
                ...state,
                localStorage:{
                    ...state.localStorage,
                    skipTutorial: true
                }
            }
        }

        default: {
            return {
                ...state
            }
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