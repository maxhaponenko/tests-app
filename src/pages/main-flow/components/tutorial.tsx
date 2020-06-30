import React, { Component, RefObject } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { connect } from 'react-redux';
import { AppState } from 'store/root.reducer';
import { nextTip, skipAllTips, closeTutorial } from 'store/test-flow/tutorial-flow/tutorial-flow.actions';
import { Button } from 'antd';

interface OwnProps {
    refs: Array<RefObject<any>>;
}
interface StateProps {
    show: boolean;
    currentTip: number;
}
interface DispatchProps {
    nextTip: () => void;
    skipAllTips: () => void;
    closeTutorial: () => void;
}

export class Tutorial extends Component<OwnProps & StateProps & DispatchProps, {}> {

    defaultTargetPosition: object = { offsetTop: 700, offsetLeft: 50 };
    defaultTargetDiameter: number = 200;
    targetRadius: number = this.defaultTargetDiameter / 2;
    tipOffset: number = this.targetRadius + 30;
    tipDiameter: number = 50;
    tipRadius: number = this.tipDiameter / 2;

    tips = [
        "Check how much time you have. Last minute you will notice red glow. Be carefull to fill the test in time!",
        "Navigate through the questions. You can change answers during the test.",
        `Press "Start" button when you will be ready.`,
        "Before start you can go back and choose another level or technology."
    ]

    state = {
        targetPosition: this.defaultTargetPosition,
        tipPosition: {
            top: undefined,
            left: undefined,
        }
    }

    targetRef: RefObject<any> = React.createRef();
    nextButtonRef: RefObject<any> = React.createRef();

    getNodeCenterCoordinates(node: RefObject<any>) {
        let objective = node.current.getBoundingClientRect()
        let offsetTop = objective.top + objective.height / 2
        let offsetLeft = objective.left + objective.width / 2
        return {
            offsetTop,
            offsetLeft
        }
    }

    setTipPosition = (targetPosition: any): void => {
        const horizontalPosition = targetPosition.offsetLeft / window.innerWidth;
        const verticalPosition = targetPosition.offsetTop / window.innerHeight;
        let horizontal = Math.round(horizontalPosition);
        let vertical = Math.round(verticalPosition);

        // horizontal && vertical -> defines tutorial target position
        // 0 && 0 -> left-top
        // 1 && 0 -> right-top
        // 0 && 0 -> left-bottom
        // 0 && 1 -> right-bottom

        if (horizontal === 0 && vertical === 0) {
            this.setState({
                tipPosition: {
                    top: targetPosition.offsetTop + (this.tipOffset + this.tipRadius),
                    left: targetPosition.offsetLeft + (this.tipOffset + this.tipRadius)
                }
            })
        } else if (horizontal === 1 && vertical === 0) {
            this.setState({
                tipPosition: {
                    top: targetPosition.offsetTop + (this.tipOffset + this.tipRadius),
                    left: targetPosition.offsetLeft - (this.tipOffset + this.tipRadius)
                }
            })
        } else if (horizontal === 1 && vertical === 1) {
            this.setState({
                tipPosition: {
                    top: targetPosition.offsetTop - (this.tipOffset + this.tipRadius),
                    left: targetPosition.offsetLeft - (this.tipOffset + this.tipRadius)
                }
            })
        } else if (horizontal === 0 && vertical === 1) {
            this.setState({
                tipPosition: {
                    top: targetPosition.offsetTop - (this.tipOffset + this.tipRadius),
                    left: targetPosition.offsetLeft + (this.tipOffset + this.tipRadius)
                }
            })
        }
    }

    setTutorialPosition = (): void => {
        if (this.props.currentTip === 1) {
            const position: object = this.getNodeCenterCoordinates(this.props.refs[0])
            this.setState({ targetPosition: position }, () => this.setTipPosition(position))
        } else if (this.props.currentTip === 2) {
            const position: object = this.getNodeCenterCoordinates(this.props.refs[1])
            this.setState({ targetPosition: position }, () => this.setTipPosition(position))
        } else if (this.props.currentTip === 3) {
            const position: object = this.getNodeCenterCoordinates(this.props.refs[2])
            this.setState({ targetPosition: position }, () => this.setTipPosition(position))
        } else if (this.props.currentTip === 4) {
            const position: object = this.getNodeCenterCoordinates(this.props.refs[3])
            this.setState({ targetPosition: position }, () => this.setTipPosition(position))
        } else {
            this.setState({ targetPosition: this.defaultTargetPosition }, () => this.setTipPosition(this.defaultTargetPosition))
        }
    }

    componentDidMount() {
        this.setTutorialPosition();
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevProps.currentTip !== this.props.currentTip) {
            this.setTutorialPosition();
        }
    }

    render() {
        console.log(this.props)
        return (
            <>
                <TipContainer
                    position={this.state.tipPosition}
                    show={this.props.show}
                >
                    <div className="tutorial-tip__text">
                        {this.tips[this.props.currentTip - 1]}
                    </div>
                    <div className="tutorial-tip__actions">
                        <Button 
                            className="tutorial-tip__skip-btn" 
                            ghost 
                            type="dashed" 
                            onClick={this.props.skipAllTips}
                        >
                            SKIP
                        </Button>
                        <Button 
                            className="tutorial-tip__next-btn" 
                            ghost 
                            ref={this.nextButtonRef}
                            onClick={() => {
                                this.nextButtonRef.current.blur();
                                this.props.nextTip();
                            }}
                        >
                            NEXT
                        </Button>
                    </div>
                    
                </TipContainer>
                <Target
                    show={this.props.show}
                    diameter={this.defaultTargetDiameter}
                    position={this.state.targetPosition}
                    ref={this.targetRef}
                />

            </>
        )

    }
}

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
const Target: any = styled.div`
   position: absolute;
   display: ${(props: any) => !props.show ? 'none' : 'unset'};
   opacity: ${(props: any) => props.show ? 1 : 0};
   width: ${(props: any) => `${props.diameter}px`};
   height: ${(props: any) => `${props.diameter}px`};
   top: ${(props: any) => `${props.position.offsetTop - (props.diameter / 2)}px`};
   left: ${(props: any) => `${props.position.offsetLeft - (props.diameter / 2)}px`};
   transition: all 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
   z-index: 99;
   animation: ${(props: any): any => {
        if (props.show) {
            return css`${appear} 300ms`
        } else {
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
const TipContainer: any = styled.div`
    width: 200px;
    height: auto;
    border-radius: 50%;
    position: absolute;
    top: ${(props: any) => `${props.position.top}px`};
    left: ${(props: any) => `${props.position.left}px`};
    transform: translate(-50%, -50%);
    transition: all 100ms ease-in-out 50ms;
    color: white;
    font-weight: 400;
    text-align: left;
    z-index: 100;
    display: ${(props: any) => !props.show ? 'none' : 'unset'};
    opacity: ${(props: any) => props.show ? 1 : 0};
    animation: ${(props: any): any => {
        if (props.show) {
            return css`${appear} 300ms`
        } else {
            return css`${dissapear} 300ms`
        }
    }};
    animation-fill-mode: both;	
    .tutorial-tip {
        &__text {
            margin-bottom: 10px;
            cursor: default;
            pointer-events: none;
        }
        &__actions {
            display: flex;
            > button:first-child {
                margin-right: 10px;
            }
        }
        &__skip-btn:hover {
            color: #d9d9d9;
            border-color: #d9d9d9;
        }
        &__next-btn {
            &:hover {
                color: #52c41a;
                border-color: #52c41a;
            }  
        }
    }
`

const mapStateToProps = (state: AppState) => ({
    show: state.testFlow.tutorialFlow!.showTutorial,
    currentTip: state.testFlow.tutorialFlow!.currentTip,
})

const mapDispatchToProps = {
    nextTip: nextTip,
    skipAllTips: skipAllTips,
    closeTutorial: closeTutorial
}


export default connect(mapStateToProps, mapDispatchToProps)(Tutorial)
