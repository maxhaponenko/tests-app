import React, { Component } from 'react'
import { connect } from 'react-redux'
import { prevStep, firstStep, disposeFlow } from '../store/test-flow/test-flow.actions'
import { Button } from 'antd';
import styled from 'styled-components'
import { withRouter } from 'react-router-dom';

export class PreviousStep extends Component {

    goBack = () => {
        this.props.prevStep()
    }

    render() {
        return (
            <BackButton danger onClick={this.goBack}>
                Back
            </BackButton>
        )
    }
}

const BackButton = styled(Button)`
    border-radius: 3px;
    height: auto;
    margin-right: 15px;
`

const mapStateToProps = () => ({
    
})

const mapDispatchToProps = {
    prevStep: prevStep,
    firstStep: firstStep,
    disposeFlow: disposeFlow
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PreviousStep))
