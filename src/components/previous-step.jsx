import React, { Component } from 'react'
import { connect } from 'react-redux'
import { prevStep } from 'store/test-flow/test-flow.actions'
import { Button } from 'antd';
import styled from 'styled-components'

export class PreviousStep extends Component {
    render() {
        return (
            <BackButton danger onClick={this.props.prevStep}>
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
    prevStep: prevStep
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviousStep)
