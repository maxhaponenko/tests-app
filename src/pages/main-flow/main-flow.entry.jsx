import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


import styled from 'styled-components'
import GroupSelector from './step-1-group-selector'
import LvlSelector from './step-2-lvl-selector'
import TestingProcess from './step-3-testing-process'


class TestSelection extends Component {
    render() {
        return (
            <ContainerCentered>
                <SelectionPanel position={this.props.currentStep}>
                    <GroupSelector />
                    <LvlSelector />
                    <TestingProcess />
                </SelectionPanel>
            </ContainerCentered>
        )
    }
}

const ContainerCentered = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`
const SelectionPanel = styled.div`
    width: 300vw;
    position: relative;
    right: ${(props) => {
        if (props.position === 1) {
            return '0%'
        } else if (props.position === 2) {
            return '100%'
        } else if (props.position === 3) {
            return '200%'
        }
    }};
    transition: right 500ms cubic-bezier(0.175, 0.885, 0.32, 1.175);
    display: flex;
    > div {
        width: 100vw;
    }
`


const mapStateToProps = (state) => ({
    currentStep: state.testFlow.currentStep
})

const mapDispatchToProps = {
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TestSelection))