import {
    NEXT_TIP
} from './tutorial-flow.actions'

interface TutorialState {
    currentStep: number;
    isFinished: boolean;
}

const initialState: TutorialState = {
    currentStep: 0,
    isFinished: false
}

export default (state = initialState, { type, payload }: any) => {
    switch (type) {
        case NEXT_TIP:
            return { ...state, ...payload }
        default:
            return state
        }
}
