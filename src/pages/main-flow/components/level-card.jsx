import React from 'react'
import styled from 'styled-components'
import { FieldTimeOutlined, QuestionOutlined } from '@ant-design/icons'
import { capitalizeFirst } from 'utils/capitalize'


const LevelCard = ({type, title, duration, questionsAmount, onClick}) => {
    return (
        <LvlCard type={type} onClick={onClick}>
            <span>{capitalizeFirst(title)}</span>
            <Description>
                <div><FieldTimeOutlined />{duration}</div>
                <div><QuestionOutlined />{questionsAmount}</div>
            </Description>
        </LvlCard>
    )
}

const LvlCard = styled.div`
    width: 200px;
    height: 80px;
    position: relative;
    text-align: center;
    background-color: ${props => props.type === 'junior' ? `#f5f5f5` : `#f0f0f0`};
    border-radius: 3px;
    margin: 0 20px;
    transition: box-shadow 0.3s, border-color 0.3s, -webkit-box-shadow 0.3s;
    transition: all 150ms ease-in-out;
    &:hover {
        cursor: pointer;
        background-color: ${props => props.type === 'junior' ? `#95de64` : `#40a9ff`};
        height: 115px;
        box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
        > span {
            color: #000;
        }
        > div {
            height: auto;
            opacity: 1;
        }
    }
    > span {
        position: relative;
        padding-top: 23px;
        display: block;
        font-size: 20px;
        font-weight: 500;
        color: #464646;
        transition: color 200ms;
    }
`
const Description = styled.div`
    position: relative;
    height: 0px;
    opacity: 0;
    overflow: hidden;
    transition: all 200ms ease-in-out;
    display: flex;
    justify-content: space-evenly;
    > div {
        font-size: 15px;
        font-weight: 500;
        padding-top: 10px;
        span {
            margin-right: 5px;
        }
    }
`


export default LevelCard