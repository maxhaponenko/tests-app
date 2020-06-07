import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { technologiesImg } from 'constants/images'
import PreviousStep from './previous-step'

class SelectionBar extends Component {
    render() {

        const getImgSrc = (testName) => {
            switch (testName) {
                case 'Html': {
                    return technologiesImg.html
                }
                case 'Css': {
                    return technologiesImg.css
                }
                case 'JavaScript': {
                    return technologiesImg.js
                }
                case 'React': {
                    return technologiesImg.react
                }
                default: {
                    return "https://i.pinimg.com/originals/60/95/f5/6095f5e3f52b117495f2bf77641d9d4c.png"
                }
            }
        }

        return (
            <BarWrapper showBar={this.props.showBar}>
                <PreviousStep />
                <CurrentTest>
                    <Image>
                        <img src={getImgSrc(this.props.testName)} alt="selected test"></img>
                    </Image>
                    <Title>{this.props.testName}</Title>
                </CurrentTest>
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
    overflow: hidden;
    transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.175);
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
`
const CurrentTest = styled.div`
    position: relative; 
    width: auto;
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


const mapStateToProps = (state) => ({
    showBar: (state.testFlow.currentStep > 1),
    testName: state.testFlow.testName,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionBar)