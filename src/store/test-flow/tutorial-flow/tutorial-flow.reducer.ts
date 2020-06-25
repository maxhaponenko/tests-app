import {
    START_TUTORIAL,
    NEXT_TIP,
    SKIP_ALL_TIPS
} from './tutorial-flow.actions'
import { AppState } from 'store/root.reducer'
export interface TutorialState {
    required: false;
    showTutorial: false;
    activeTip: number;
    isFinished: boolean;
}

const initialState: TutorialState = {
    required: false,
    showTutorial: false,
    activeTip: 0,
    isFinished: false
}

export default (state = initialState, { type, payload }: any) => {
    switch (type) {
        case START_TUTORIAL: {
            return {
                ...state,
                showTutorial: true,
                activeTip: 1
            }
        }
        case NEXT_TIP: {                                                                  
            return { 
                ...state, 
                activeTip: state.activeTip + 1 
            }
        }
        case SKIP_ALL_TIPS: {                                                                  
            return { 
                ...state, 
                isFinished: true,
                activeTip: 0,
            }
        }
        default:
            return state
        }
}

export class TutorialFlowSelector {
    public static shouldShowTutorial(state: AppState): boolean {
        return state.testFlow.tutorialFlow!.required
    }
}