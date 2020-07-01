import React from 'react'

interface OwnProps {
    data: {
        question: string;
        type: string;
        answers: Array<{
            text: string;
            isCorrect: boolean;
        }>
    }
}

const Question = (props: OwnProps) => {

    return (
        <div>
            
        </div>
    )
}


export default Question
