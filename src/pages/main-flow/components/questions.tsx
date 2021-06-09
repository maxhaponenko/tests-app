import React from 'react'
import { connect } from 'react-redux'
import { AppState } from 'store/root.reducer'
import QuestionPlaceholder from './question-placeholder'
import Question from 'pages/main-flow/components/question'
import { TestData } from 'constants/tests'

interface StateProps {
    isTestStarted: boolean;
    currentQuestion: number;
    testData: Array<TestData>;
}

const Questions = (props: StateProps) => {

    const { 
        isTestStarted,
        testData,
        currentQuestion,
    } = props

    const totalQuestionsCount = testData.length

    return (
        <div>
            <h2>Question {currentQuestion} of {totalQuestionsCount}</h2>
            {isTestStarted ?  <Question data={testData[currentQuestion - 1]}/> : <QuestionPlaceholder />}
            
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    isTestStarted: state.testFlow.testStarted,
    currentQuestion: state.testFlow.currentQuestion,
    testData: state.testFlow.testData
})

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps, mapDispatchToProps)(Questions as any)

