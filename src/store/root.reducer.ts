import { combineReducers } from 'redux';
import testFlowReducer, { TestsFlow } from './test-flow/test-flow.reducer'

export interface AppState {
    testFlow: TestsFlow
}

const rootReducer = combineReducers({
    testFlow: testFlowReducer
})

export default rootReducer