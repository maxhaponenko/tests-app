import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import QuestionPlaceholder from './components/question-placeholder'
export class TestingProcess extends Component {
    render() {
        return (
            <Container>
                <QuestionPlaceholder count={15}/>
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

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TestingProcess)
