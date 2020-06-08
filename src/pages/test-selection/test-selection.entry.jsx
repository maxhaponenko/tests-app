import React, { Component } from 'react'
import { connect } from 'react-redux'


import styled from 'styled-components'
import GroupSelector from './group-selector'
import LvlSelector from './lvl-selector'



class TestSelection extends Component {


    render() {

        return (
            <ContainerCentered>
                <Heading>{this.props.currentStep === 1 ? `What skill you would like to check?` : `Please, select your level`}</Heading>
                <SelectionPanel position={this.props.currentStep}>
                    <GroupSelector />
                    <LvlSelector />
                </SelectionPanel>
            </ContainerCentered>
        )
    }
}

const ContainerCentered = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
  top: 50%;
  transform: translate(0, -55%);
`
const Heading = styled.h2`
    text-align: center;
    font-weight: 400;
    margin-bottom: 40px;
    transition: all 200ms ease-in-out;
`
const SelectionPanel = styled.div`
    width: 200vw;
    position: relative;
    left: ${(props) => {
        if (props.position === 1) {
            return '-100%'
        } else if (props.position === 2) {
            return '0%'
        }
    }};
    transition: left 500ms cubic-bezier(0.175, 0.885, 0.32, 1.175);
    display: flex;
    flex-direction: row-reverse;
    > div {
        width: 100vw;
    }
`


const mapStateToProps = (state) => ({
    currentStep: state.testFlow.currentStep
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TestSelection)