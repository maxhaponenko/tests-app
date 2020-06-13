import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppState } from 'store/root.reducer'
import s from 'styled-components'

export class TestingControll extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TestingControll)
