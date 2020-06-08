import React from 'react'
import { Card } from 'antd'
import styled from 'styled-components'
const { Meta } = Card

interface OwnProps {
    onClick: () => void;
    title: string;
    imgSrc: string;
}

const TestCard = ({imgSrc, title, onClick}: OwnProps) => {
    return (
        <CardWrapper>
            <Card
                onClick={onClick}
                hoverable
                cover={<img alt="example" src={imgSrc} />}
            >
                <Meta title={title} />
            </Card>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    .ant-card-body {
        @media (max-width: 499px) {
            padding: 10px;
        }
    };
    .ant-card-meta-title {
        @media (max-width: 499px) {
            font-size: 14px;
            font-weight: 400;
        }
    }
`

export default TestCard
