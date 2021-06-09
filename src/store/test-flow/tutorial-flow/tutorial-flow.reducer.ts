import {
    START_TUTORIAL,
    NEXT_TIP,
    SKIP_ALL_TIPS,
    CLOSE_TUTORIAL
} from './tutorial-flow.actions'
import { AppState } from 'store/root.reducer'
export interface TutorialState {
    required: false;
    showTutorial: false;
    currentTip: number;
    isFinished: boolean;
}

const initialState: TutorialState = {
    required: false,
    showTutorial: false,
    currentTip: 0,
    isFinished: false
}

const tutorialFLowReducer = (state = initialState, { type }: any) => {
    switch (type) {
        case START_TUTORIAL: {
            return {
                ...state,
                showTutorial: true,
                currentTip: 1
            }
        }
        case NEXT_TIP: {                                                                
            return { 
                ...state, 
                currentTip: state.currentTip + 1 
            }
        }
        case SKIP_ALL_TIPS: {
            return {
                ...state, 
                isFinished: true,
                showTutorial: false,
                currentTip: 0,
            }
        }
        case CLOSE_TUTORIAL: {
            return {
                ...state, 
                showTutorial: false,
                currentTip: 0,
                isFinished: true
            }
        }
        default:
            return {
                ...state
            }
        }
}

export default tutorialFLowReducer

export class TutorialFlowSelector {
    public static shouldShowTutorial(state: AppState): boolean {
        return state.testFlow.tutorialFlow!.required
    }
}