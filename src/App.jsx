import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import styled from 'styled-components'

import MainFlow from 'pages/main-flow/main-flow.entry';
import SelectionBar from 'components/selection-bar'
import Timer from 'components/timer'
import QuestionNavigation from 'components/question-navigation'

class App extends React.Component {

   state = {
      isReadyToTips: false,
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
   }

   componentDidUpdate(prevState, prevProps) {
      if (prevProps.currentStep !== this.props.currentStep && this.props.currentStep === 3) {
         setTimeout(() => {
            this.setState({isReadyToTips: true})
         }, 1000)
      }
   }

   render() {
      return (
         <BrowserRouter>
            {/* {this.state.isReadyToTips && this.props.currentStep === 3 && (
               <GuidTarget onClick={() => {
                  this.setState({activeTip: this.state.activeTip === 1 ? 2 : 1})
               }} show={this.state.isReadyToTips} radius={350} position={this.getPosition()}/>
            )} */}
            <Switch>
               <Route exact path="/" component={MainFlow} />
               <Redirect to="/" />
            </Switch>
            <SelectionBar />
            <Timer ref={this.timerRef}/>
            <QuestionNavigation ref={this.questionNavRef}/>
         </BrowserRouter>
      );
   }
}

const GuidTarget = styled.div`
   position: absolute;
   width: ${props => `${props.radius}px`};
   height: ${props => `${props.radius}px`};
   top: ${props => `${props.position.offsetTop - (props.radius / 2)}px`};
   left: ${props => `${props.position.offsetLeft - (props.radius / 2)}px`};
   transition: all 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
   z-index: 99;
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
   currentStep: state.testFlow.currentStep
})

const mapDispatchToProps = {
   
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
