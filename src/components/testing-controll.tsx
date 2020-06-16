import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined, LeftOutlined } from '@ant-design/icons'
import { AppState } from 'store/root.reducer'
import styled from 'styled-components'

export class TestingControll extends Component {
    render() {
        return (
            <HoverArea>
                <div className="controlls-container">
                    <Button className="start-button" type="default" size='large'>
                        <PlayCircleOutlined />
                        Start
                    </Button>
                    <Button danger size='large' disabled>
                        <PauseCircleOutlined />Stop
                    </Button>
                    <div className="clickable">
                        <LeftOutlined />
                    </div>
                </div>
            </HoverArea>
        )
    }
}

const HoverArea = styled.div`
    width: 25vw;
    height: 30vh;
    position: fixed;
    right: 0;
    bottom: 0;
    & .controlls-container {
        position: absolute;
        right: 0;
        bottom: 60px;
        width: 114px;
        height: 110px;
        transform: translate(100%, 0);
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
        .clickable {
            position: absolute;
            left: -29px;
            top: 50%;
            transform: translate(0, -50%);
            width: 30px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            border-left: 1px solid #52c41a;
            border-top: 1px solid #52c41a;
            border-bottom: 1px solid #52c41a;
            transition: all 100ms ease-in-out;
            > span {
                color: #52c41a;
                opacity: 0.8;
            }
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

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TestingControll)
