import React, { Component } from 'react'
import { connect } from 'react-redux'
import { prevStep, firstStep, disposeFlow } from 'store/test-flow/test-flow.actions'
import { paths } from 'constants/paths'
import { Button } from 'antd';
import styled from 'styled-components'
import { withRouter } from 'react-router-dom';

export class PreviousStep extends Component {

    goBack = () => {
        if (this.props.history.location.pathname === paths.test) {
            this.props.history.goBack()
            this.props.prevStep()
            setTimeout(() => {
                this.props.prevStep()
            }, 400)
            setTimeout(() => {
                this.props.disposeFlow()
            }, 700)
        } else {
            this.props.prevStep()
            setTimeout(() => {
                this.props.disposeFlow()
            }, 400)
        }
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

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    prevStep: prevStep,
    firstStep: firstStep,
    disposeFlow: disposeFlow
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PreviousStep))
