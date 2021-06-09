import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Tutorial from 'pages/main-flow/components/tutorial'
import Questions from './components/questions'

export class TestingProcess extends Component {

    render() {
        return (
            <Container className={this.constructor.name}>
                <Questions />
                {/* Responsive tutorial with refs */}
                <Tutorial refs={[...this.props.refs]} /> 
                {/* ForMax: should I use Tutorial here? */}
            </Container>
        )
    }
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 70px;
    position: relative;
    > div:first-child {//ForMax: should I use :first-child like this? This way the CSS block doesn't affect Tutorial with this pseudo-class selector
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
