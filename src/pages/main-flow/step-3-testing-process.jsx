import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Questions from './components/questions'

export class TestingProcess extends Component {
    render() {
        return (
            <Container className={this.constructor.name}>
                <Questions />
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
