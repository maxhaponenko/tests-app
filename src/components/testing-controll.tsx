import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined, LeftOutlined } from '@ant-design/icons'
import { AppState } from 'store/root.reducer'
import { TutorialFlowSelector } from 'store/test-flow/tutorial-flow/tutorial-flow.reducer'
import { TestsFlowSelector } from 'store/test-flow/test-flow.reducer'
import styled from 'styled-components'

interface StateProps {
    showControll: boolean;
}

export class TestingControll extends Component<StateProps, {}> {
    
    render() {
        
        return (
            <HoverArea className={this.constructor.name} show={this.props.showControll}>
                <div className="controlls-container">
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
    width: 25vw;
    height: 30vh;
    position: fixed;
    right: 0;
    bottom: 0;
    & .controlls-container {
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
    &:hover,&:focus {
        & .clickable {
            transform: translate(200%, -50%);
            opacity: 0;
        }
        & .controlls-container {
            transform: translate(0%, 0);
        }
    }
`


const mapStateToProps = (state: AppState) => ({
    showControll: TestsFlowSelector.isReadyToStart(state)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TestingControll)
