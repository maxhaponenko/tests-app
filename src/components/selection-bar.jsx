import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { technologiesImg } from '../constants/images'
import { groups, levels } from '../constants/tests'
import PreviousStep from './previous-step'
import { capitalizeFirst } from '../utils/capitalize'

class SelectionBar extends Component {
    render() {

        const getImgSrc = (testName) => {
            switch (testName) {
                case groups.html: {
                    return technologiesImg.html
                }
                case groups.css: {
                    return technologiesImg.css
                }
                case groups.js: {
                    return technologiesImg.js
                }
                case groups.react: {
                    return technologiesImg.react
                }
                default: {
                    return 'group'
                }
            }
        }

        return (
            <BarWrapper ref={this.props.innerRef} showBar={this.props.showBar}>
                <PreviousStep />
                <SelectedTest>
                    <Image>
                        <img src={getImgSrc(this.props.testName)} alt="selected test" />
                    </Image>
                    <Title>{capitalizeFirst(this.props.testName)}</Title>
                </SelectedTest>
                <SelectedLevel showLevel={this.props.showLevel} level={this.props.testLevel}>
                    <span>{capitalizeFirst(this.props.testLevel)}</span>
                </SelectedLevel>
            </BarWrapper>
        )
    }
}

const BarWrapper = styled.div`
    position: absolute;
    left: ${(props) => props.showBar ? `15px` : `calc(-15px - 110%)`};
    top: 15px;
    height: auto;
    background-color: #ffffff;
    transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.175);
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
`
const SelectedTest = styled.div`
    position: relative; 
    width: max-content;
    height: auto;
    border-radius: 3px;
    display: flex;
    overflow: hidden;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 3px;
        border: 1px solid #00000029;
    }   
`
const Image = styled.div`
    width: 40px;
    height: 40px;
    img {
        width: inherit;
        height: inherit;
    }
`
const Title = styled.span`
    font-size: 16px;
    font-weight: 500;
    position: relative;
    align-self: center;
    line-height: 1rem;
    padding: 0 20px 0 20px;
`
const SelectedLevel = styled.div`
    position: relative;
    height: auto;
    padding: 0 20px;
    display: flex;
    margin-left: 15px;
    border-radius: 3px;
    color: white;
    font-weight: 500;
    background-color: ${props => {
        if (props.level === levels.junior) {
            return `#95de64`
        } else if (props.level === levels.middle){
            return `#40a9ff`
        }
    }};
    top: ${props => props.showLevel ? `0` : `-100px`};
    transition: all 150ms cubic-bezier(0.175, 0.885, 0.32, 1.175);
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 3px;
        border: 1px solid #00000029;
    }   
    span {
        height: auto;
        align-self: center;
        opacity: 0.9;
        letter-spacing: 0.5px;
    }
`

const mapStateToProps = (state) => ({
    showBar: state.testFlow.currentStep > 1,
    testName: state.testFlow.testName,
    showLevel: state.testFlow.currentStep > 2,
    testLevel: state.testFlow.testLevel
})

const mapDispatchToProps = {

}

const ConnectedSelectionBar = connect(mapStateToProps, mapDispatchToProps)(SelectionBar)

export default React.forwardRef((props, ref) => <ConnectedSelectionBar innerRef={ref} {...props}/>)
