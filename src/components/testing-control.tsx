import React, { Component, RefObject } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons'
import { AppState } from 'store/root.reducer'
import styled from 'styled-components'

interface StateProps {
    showControls: boolean;
    innerRef: RefObject<any>;
}

export class TestingControl extends Component<StateProps, {}> {

    render() {

        return (
            <HoverArea ref={this.props.innerRef} className={this.constructor.name} show={this.props.showControls}>
                <div className="controls-container">
                    <Button className="start-button" type="default" size='large'>
                        <PlayCircleOutlined />
                        Start
                    </Button>
                </div>
            </HoverArea>
        )
    }
}

const HoverArea: any = styled.div`
  width: 200px;
  height: 180px;
  position: fixed;
  right: 0;
  bottom: 0;

  & .controls-container {
    position: absolute;
    right: 0;
    bottom: 60px;
    width: 141px;
    height: 54px;
    transform: ${(props: any) => props.show ? 'translate(0%, 0)' : 'translate(100%, 0)'};
    transition: transform 300ms ease-in-out;

    button {
      margin: 7px 0;
      padding: 6.4px 20px;
      border-radius: 3px;
    }

    .start-button {
      color: #52c41a;
      background: #fff;
      border-color: #52c41a;
    }
  }
`


const mapStateToProps = (state: AppState) => ({
    showControls:
        state.testFlow.currentStep > 2
        &&
        (state.testFlow.localStorage.skipTutorial
            || state.testFlow.tutorialFlow!.currentTip >= 3
            || (state.testFlow.tutorialFlow!.isFinished)
        )
})

const mapDispatchToProps = {}

const ConnectedControl = connect(mapStateToProps, mapDispatchToProps)(TestingControl)

export default React.forwardRef((props: any, ref: any) => <ConnectedControl innerRef={ref} {...props} />)