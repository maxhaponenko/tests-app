import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

export class TestingProcess extends Component {
    render() {
        return (
            <Container className="TestingProcess">
                <div>
                    <Heading>Question 1 of 15</Heading>
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
                
            </Container>
        )
    }
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 70px;
    position: relative;
    > div {
        max-width: 1140px;
        padding: 0 70px;
        margin: 70px auto 0;
    }
`

const Heading = styled.h2`

`
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

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TestingProcess)
