import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

export class LvlSelector extends Component {
    render() {
        return (
            <CardsWrapper>
                <JuniorLvl><span>Junior</span></JuniorLvl>
                <MiddleLvl><span>Middle</span></MiddleLvl>
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
        box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
        > span {
            color: #000;
        }
    }
    > span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 20px;
        font-weight: 500;
        color: #464646;
        transition: color 200ms;
    }
`
const JuniorLvl = styled(LvlCard)`
    background-color: #95de64;
` 
const MiddleLvl = styled(LvlCard)`
    background-color: #40a9ff;
`


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LvlSelector)
