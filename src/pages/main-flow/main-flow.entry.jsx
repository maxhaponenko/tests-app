import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import GroupSelector from './step-1-group-selector'
import LvlSelector from './step-2-lvl-selector'
import TestingProcess from './step-3-testing-process'
import SelectionBar from 'components/selection-bar'
import Timer from 'components/timer'
import QuestionNavigation from 'components/question-navigation'
import TestingControll from 'components/testing-controll'
import Tutorial from 'pages/main-flow/components/tutorial'

import { nextTip, skipAllTips } from 'store/test-flow/tutorial-flow/tutorial-flow.actions'


class TestSelection extends Component {

    state = {
        showTutorial: false,
        activeTip: 1,
    }

    selectionRef = React.createRef();
    timerRef = React.createRef();
    questionNavRef = React.createRef();
    controllsRef = React.createRef();

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showTutorial: true })
        }, 15000)
    }


    finishTutorial = () => {
        this.props.skipAllTips()
        setTimeout(() => {
            this.setState({ showTutorial: false })
        }, 300)
    }

    render() {

        return (
            <ContainerCentered>

                {/* Main flow: select test technology, level and component with testing process */}
                <SelectionPanel position={this.props.currentStep}>
                    <GroupSelector />
                    <LvlSelector />
                    <TestingProcess />
                </SelectionPanel>

                {/* Additional components for controlling the process and general info */}
                <SelectionBar ref={this.selectionRef} />
                <Timer ref={this.timerRef} />
                <TestingControll ref={this.controllsRef} />
                <QuestionNavigation ref={this.questionNavRef} />

                {/* Responsive tutorial with refs */}
                <Tutorial
                    refs={[this.timerRef, this.questionNavRef, this.controllsRef, this.selectionRef]}
                />
                
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
    currentStep: state.testFlow.currentStep,
    isTutorialFinished: state.testFlow.tutorialFlow.isFinished,
    showTutorial: state.testFlow.tutorialFlow.showTutorial
})

const mapDispatchToProps = {
    skipAllTips: skipAllTips,
    nextTip: nextTip,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TestSelection))