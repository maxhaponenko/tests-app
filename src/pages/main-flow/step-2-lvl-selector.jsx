import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { tests } from 'constants/tests'
import { selectLevel } from 'store/test-flow/test-flow.actions'
import LevelCard from './components/level-card'

export class LvlSelector extends Component {
    render() {

        const relevantTests = tests.filter(item => item.group === this.props.testName)

        return (
            <Container className="test">
                <Heading>Select level</Heading>
                <CardsWrapper>
                    {relevantTests.map(item => {
                        return (
                            <LevelCard 
                                title={item.level}
                                type={item.level}
                                duration={item.duration}
                                questionsAmount={item.questionsAmount}
                                onClick={() => this.props.selectLevel(item.level, item.duration)}
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
    selectLevel: selectLevel
}

export default connect(mapStateToProps, mapDispatchToProps)(LvlSelector)
