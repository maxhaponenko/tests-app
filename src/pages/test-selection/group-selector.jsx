import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { selectGroup } from 'store/test-flow/test-flow.actions'
import { groups } from 'constants/tests'
import { Row, Col } from 'antd'
import TestsCard from './test-card'
import { technologiesImg } from 'constants/images'


export class GroupSelector extends Component {
    render() {
        return (
            <CardsWrapper>
                <Row gutter={[16, 16]} style={{ margin: 0 }}>
                    <Col className="gutter-row" xs={12} sm={8} md={8} lg={6}>
                        <TestsCard
                            imgSrc={technologiesImg.html}
                            title="HTML"
                            onClick={() => this.props.selectGroup(groups.html)}
                        />
                    </Col>
                    <Col className="gutter-row" xs={12} sm={8} md={8} lg={6}>
                        <TestsCard
                            imgSrc={technologiesImg.css}
                            title="CSS"
                            onClick={() => this.props.selectGroup(groups.css)}
                        />
                    </Col>
                    <Col className="gutter-row" xs={12} sm={8} md={8} lg={6}>
                        <TestsCard
                            imgSrc={technologiesImg.js}
                            title="JavaScript"
                            onClick={() => this.props.selectGroup(groups.js)}
                        />
                    </Col>
                    <Col className="gutter-row" xs={12} sm={8} md={8} lg={6}>
                        <TestsCard
                            imgSrc={technologiesImg.react}
                            title="React"
                            onClick={() => this.props.selectGroup(groups.react)}
                        />
                    </Col>
                </Row>
            </CardsWrapper>

        )
    }
}
const CardsWrapper = styled.div`
    padding: 0 20px;
    max-width: 1000px;
    margin: 0 auto;
`


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    selectGroup: selectGroup
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupSelector)
