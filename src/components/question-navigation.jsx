import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

export class QuestionNavigation extends Component {
    render() {
        return (
            <Wrapper ref={this.props.innerRef} show={this.props.showNavigation} className="question-navigation">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    max-width: 90%;
    height: 30px;
    width: 100%;
    position: absolute;
    bottom: ${props => props.show ? `10px` : `-100px`};
    display: flex;
    justify-content: space-between;
    left: 50%;
    transform: translate(-50%, 0);
    align-self: center;
    transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.175) 300ms;
    > div {
        flex: 1;
        width: auto;
        height: 10px;
        background-color: #d9d9d9;
        border-radius: 3px;
        margin: 0 3px;
        align-self: center;
        transition: all 100ms;
        &:hover {
            cursor: pointer;
            height: 15px;
        }
    }
`

const mapStateToProps = (state) => ({
    showNavigation: state.testFlow.currentStep === 3
})

const mapDispatchToProps = {
    
}

const ConnectedQuestionNavigation = connect(mapStateToProps, mapDispatchToProps)(QuestionNavigation)

export default React.forwardRef((props, ref) => <ConnectedQuestionNavigation innerRef={ref} {...props} />)
