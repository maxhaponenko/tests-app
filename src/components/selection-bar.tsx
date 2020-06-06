import React, { Component } from 'react'
import styled from 'styled-components'

export default class SelectionBar extends Component {
    render() {
        return (
            <BarWrapper>
                <Image>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="selected test"></img>
                </Image>
                <Title>JavaScript</Title>
            </BarWrapper>
        )
    }
}

const BarWrapper = styled.div`
    position: absolute;
    top: 15px;
    left: 15px;
    height: auto;
    background-color: #ffffff;
    border-radius: 3px;
    overflow: hidden;

    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
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
