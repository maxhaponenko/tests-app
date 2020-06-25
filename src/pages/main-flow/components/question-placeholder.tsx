import React from 'react'
import styled from 'styled-components'

interface OwnProps {
    count: number;
}

const QuestionPlaceholder = (props: OwnProps) => {
    return (
        <div>
            <h2>Question 1 of {props.count}</h2>
            <Placeholder>
                <Question></Question>
                <Answers>
                    <div />
                    <div />
                    <div />
                    <div />
                </Answers>
            </Placeholder>
        </div>
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

