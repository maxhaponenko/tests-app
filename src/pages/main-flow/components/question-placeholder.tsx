import React from 'react'
import styled from 'styled-components'


const QuestionPlaceholder = () => {
    return (
        <Placeholder>
            <Question></Question>
            <Answers>
                <div />
                <div />
                <div />
                <div />
            </Answers>
        </Placeholder>
    )
}


const Placeholder = styled.div`
    height: 300px;
`
const Question = styled.div`
    width: 60%;
    height: 50px;
    border-radius: 3px;
    background-color: #f5f5f5;
    margin-bottom: 20px;
    margin-top: 20px;
`
const Answers = styled.div`
    > div {
        width: 80%;
        height: 40px;
        border-radius: 3px;
        background-color: #f5f5f5;
        margin-top: 10px;
    }
`

export default QuestionPlaceholder

