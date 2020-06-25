import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled, { keyframes, css } from 'styled-components'

import GroupSelector from './step-1-group-selector'
import LvlSelector from './step-2-lvl-selector'
import TestingProcess from './step-3-testing-process'
import SelectionBar from 'components/selection-bar'
import Timer from 'components/timer'
import QuestionNavigation from 'components/question-navigation'
import TestingControll from 'components/testing-controll'

import { skipAllTips } from 'store/test-flow/tutorial-flow/tutorial-flow.actions'


class TestSelection extends Component {

    state = {
        showTutorial: false,
        activeTip: 1,
    }

    timerRef = React.createRef();
    questionNavRef = React.createRef();

    getNodeCenterCoordinats(node) {
        let objective = node.current.getBoundingClientRect()
        let offsetTop = objective.top + objective.height / 2
        let offsetLeft = objective.left + objective.width / 2
        return {
            offsetTop,
            offsetLeft
        }
    }

    getPosition = () => {
        if (this.state.activeTip === 1) {
            return this.getNodeCenterCoordinats(this.timerRef)
        } else if (this.state.activeTip === 2) {
            return this.getNodeCenterCoordinats(this.questionNavRef)
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({showTutorial: true})
         }, 5000)
    }

    componentDidUpdate(prevState, prevProps) {
        
    }

    finishTutorial = () => {
        this.props.skipAllTips()
        setTimeout(() => {
            this.setState({showTutorial: false})
        }, 300) 
    }

    render() {
        debugger
        return (
            <ContainerCentered>
                {this.state.showTutorial && this.props.currentStep === 3 && (
                    <GuidTarget
                        onClick={() => {
                            if (this.state.activeTip === 1) {
                                this.setState({ activeTip: 2 })
                            } else {
                                this.finishTutorial()
                            }
                        }}
                        show={this.state.showTutorial && !this.props.isTutorialFinished} 
                        radius={350} 
                        position={this.getPosition()}
                    />
                )}
                <SelectionPanel position={this.props.currentStep}>
                    <GroupSelector />
                    <LvlSelector />
                    <TestingProcess />
                </SelectionPanel>


                <SelectionBar />
                <Timer ref={this.timerRef} />
                <TestingControll />
                <QuestionNavigation ref={this.questionNavRef} />
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

const dissapear = keyframes`
    0% {
        display: block;
        opacity: 1;
    }
    99% {
        display: block;
        opacity: 0;
    }
    100% {
        display: none;
    }
`
const appear = keyframes`
    0% {
        display: block;
        opacity: 0;
    }
    100% {
        display: block;
        opacity: 1;
    }
`
const GuidTarget = styled.div`
   position: absolute;
   opacity: ${props => props.show ? 1 : 0};
   width: ${props => `${props.radius}px`};
   height: ${props => `${props.radius}px`};
   top: ${props => `${props.position.offsetTop - (props.radius / 2)}px`};
   left: ${props => `${props.position.offsetLeft - (props.radius / 2)}px`};
   transition: all 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
   z-index: 99;
   animation: ${props => {
       if (props.show) {
           return css`${appear} 300ms`
       }
   }};
   animation: ${props => {
       if (!props.show) {
           return css`${dissapear} 300ms`
       }
   }};
   animation-fill-mode: both;	
   &:after {
      content: '';
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      background-color: transparent;
      border-radius: 50%;
      box-sizing: content-box;
      border: 250vw solid rgba(0,0,0,0.5);
   }
`


const mapStateToProps = (state) => ({
    currentStep: state.testFlow.currentStep,
    isTutorialFinished: state.testFlow.tutorialFlow.isFinished
})

const mapDispatchToProps = {
    skipAllTips: skipAllTips,

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TestSelection))