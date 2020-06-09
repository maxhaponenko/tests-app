import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FieldTimeOutlined } from '@ant-design/icons'

export class Timer extends Component {

    state = {
        timeLeft: '',
        isCounting: false
    }

    static getDerivedStateFromProps(props) {
        return {
            timeLeft: `${props.testDuration} : 00`
        }
    }

    startCounting = (testDuration) => {

        var countDownTime = new Date().getTime() + (testDuration * 60 * 1000);

        this.setState({isCounting: true})

        var changeState = (timeLeft) => {
            this.setState({
                timeLeft: timeLeft
            })
        } 

        var x = setInterval(() => {

            let now = new Date().getTime();
            let distance = countDownTime - now;

            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            let secondsFormatted = seconds.toString().length < 2 ? `0${seconds}` : seconds
            let left = minutes + " : " + secondsFormatted;

            if (distance <= 0) {
                clearInterval(x);
                left = `0 : 00`;
                this.setState({
                    timeLeft: left,
                    isCounting: false
                })
            } else {
                changeState(left)
            }

        }, 1000);
    }

    componentDidMount() {
        // this.startCounting(10.2)
    }

    render() {
        
        return (
            <Wrapper ref={this.props.innerRef} show={this.props.showTimer}>
                <FieldTimeOutlined /><span className="time">{this.state.timeLeft}</span>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    position: absolute;
    top: ${props => props.show ? `15px` : `-100px`};
    right: 15px;
    width: 110px;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    transition: all 150ms cubic-bezier(0.175, 0.885, 0.32, 1.175);
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 3px;
        border: 1px solid #00000029;
    }   
    span.anticon {
        font-size: 20px;
        align-self: center;
        flex: 1;
    }
    span.time {
        font-size: 17px;
        line-height: 1rem;
        top: 1px;
        flex: 2;
        text-align: right;
        position: relative;
        padding-right: 3px;
    }

`

const mapStateToProps = (state) => ({
    showTimer: state.testFlow.currentStep > 2,
    testDuration: state.testFlow.testDuration
})

const mapDispatchToProps = {

}

const ConnectedTimer = connect(mapStateToProps, mapDispatchToProps)(Timer)

export default React.forwardRef((props, ref) => <ConnectedTimer innerRef={ref} {...props}/>)
