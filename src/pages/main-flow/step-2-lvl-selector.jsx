import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FieldTimeOutlined, QuestionOutlined } from '@ant-design/icons'
import { tests, levels } from 'constants/tests'
import { selectLevel } from 'store/test-flow/test-flow.actions'

export class LvlSelector extends Component {
    render() {

        const relevantTests = tests.filter(item => item.group === this.props.testName)

        return (
            <CardsWrapper>
                {relevantTests.map(item => {
                    if (item.level === levels.junior) {
                        return (
                            <JuniorLvl onClick={() => {
                                this.props.selectLevel(item.level, item.duration)
                            }}>
                                <span>Junior</span>
                                <Description>
                                    <div><FieldTimeOutlined />{item.duration}</div>
                                    <div><QuestionOutlined />{item.questionsAmount}</div>
                                </Description>
                            </JuniorLvl>
                        )
                    } else {
                        return (
                            <MiddleLvl onClick={() => {
                                this.props.selectLevel(item.level, item.duration)
                            }}>
                                <span>Middle</span>
                                <Description>
                                    <div><FieldTimeOutlined />{item.duration}</div>
                                    <div><QuestionOutlined />{item.questionsAmount}</div>
                                </Description>
                            </MiddleLvl>
                        )
                    }
                })}
            </CardsWrapper>
        )
    }
}

const CardsWrapper = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const LvlCard = styled.div`
    width: 200px;
    height: 80px;
    position: relative;
    text-align: center;
    background-color: white;
    border-radius: 3px;
    margin: 0 20px;
    transition: box-shadow 0.3s, border-color 0.3s, -webkit-box-shadow 0.3s;
    &:hover {
        cursor: pointer;
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
const JuniorLvl = styled(LvlCard)`
    background-color: #f5f5f5;
    transition: all 150ms ease-in-out;
    &:hover {
        background-color: #95de64;
    }
`
const MiddleLvl = styled(LvlCard)`
    background-color: #f0f0f0;
    transition: all 150ms ease-in-out;
    &:hover {
        background-color: #40a9ff;
    }
`


const mapStateToProps = (state) => ({
    testName: state.testFlow.testName
})

const mapDispatchToProps = {
    selectLevel: selectLevel
}

export default connect(mapStateToProps, mapDispatchToProps)(LvlSelector)
