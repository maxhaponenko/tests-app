import React, { Component } from 'react'
import { Row, Col } from 'antd';
import styled from 'styled-components'
import TestsCard from './test-card'

export default class TestSelector extends Component {
    render() {
        return (
            <ContainerCentered>
                <Heading>What skill you would like to check?</Heading>
                <Row gutter={[16, 16]}>
                    <Col className="gutter-row" xs={12} sm={8} md={8} lg={6}>
                        <TestsCard 
                            imgSrc="https://webref.ru/assets/images/book/learn-html-css_1.png"
                            title="HTML"
                            onClick={() => console.log('hohoho')}
                        />
                    </Col>
                    <Col className="gutter-row" xs={12} sm={8} md={8} lg={6}>
                        <TestsCard 
                            imgSrc="https://seeklogo.net/wp-content/uploads/2014/11/CSS3-logo-vector.png"
                            title="CSS"
                            onClick={() => console.log('hohoho')}
                        />
                    </Col>
                    <Col className="gutter-row" xs={12} sm={8} md={8} lg={6}>
                        <TestsCard 
                            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                            title="JavaScript"
                            onClick={() => console.log('hohoho')}
                        />
                    </Col>
                    <Col className="gutter-row" xs={12} sm={8} md={8} lg={6}>
                        <TestsCard 
                            imgSrc="https://lh3.googleusercontent.com/proxy/ShJbhlTSHBez5TsRlcD8Mu0SUWcovALs28oyEN4uLJAGabjhNkkcqrRqGltnfYJe2X1Jjwrs_CgM8LGtXNTDamc-zVY9ViZwclZid-_39bOW3Jw"
                            title="React"
                            onClick={() => console.log('hohoho')}
                        />
                    </Col>
                </Row>
            </ContainerCentered>
        )
    }
}

const ContainerCentered = styled.div`
  width: auto;
  height: auto;
  max-width: 1000px;
  position: relative;
  padding: 50px 20px;
  margin: 0 auto;
`

const Heading = styled.h2`
    text-align: center;
    font-weight: 400;
    margin-bottom: 40px;
`
