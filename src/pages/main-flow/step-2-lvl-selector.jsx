import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { tests } from 'constants/tests'
import { selectLevel } from 'store/test-flow/test-flow.actions'
import { startTutorial } from 'store/test-flow/tutorial-flow/tutorial-flow.actions'
import LevelCard from './components/level-card'
// import {loadState, localStorageKeys} from "utils/state-handler";

export class LvlSelector extends Component {
    render() {

        const relevantTests = tests.filter(item => item.group === this.props.testName)
        // console.log(state.testFlow.localStorage.skipTutorial)
        // const skipTutorial = loadState(localStorageKeys.SKIP_TUTORIAL) === true
        // console.log('ST', loadState(localStorageKeys.SKIP_TUTORIAL))
        return (
            <Container className="test">
                <Heading>Select level</Heading>
                <CardsWrapper>
                    {relevantTests.map((item, index) => {
                        return (
                            <LevelCard
                                key = {index}
                                title={item.level}
                                type={item.level}
                                duration={item.duration}
                                questionsAmount={item.questionsAmount}
                                onClick={() => {
                                    this.props.selectLevel(item.level, item.duration);
                                    // if (!this.props.skipTutorial) setTimeout(() => {
                                    //     this.props.startTutorial();
                                    // }, 1500)
                                }}
                            />
                        )
                    })}
                </CardsWrapper>
            </Container>
        )
    }
}

const Container = styled.div`
    position: relative;
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Heading = styled.h2`
    text-align: center;
    font-weight: 400;
    transition: all 200ms ease-in-out;
    margin: 0 auto 30px;
`
const CardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 130px;
`

const mapStateToProps = (state) => ({
    testName: state.testFlow.testName
})

const mapDispatchToProps = {
    selectLevel,
    startTutorial,
}

export default connect(mapStateToProps, mapDispatchToProps)(LvlSelector)
