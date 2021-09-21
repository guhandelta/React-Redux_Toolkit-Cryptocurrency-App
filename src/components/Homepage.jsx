import millify from "millify";
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography;

const Homepage = () => {
    return (
        <>
            <Title level={2} className="heading">Global Cryptocurrency stats</Title>
            <Row>
                <Col span={12}>
                    <Statistic value="5" title="Total Cryptocurrencies" />
                </Col>
                <Col span={12}>
                    <Statistic value="5" title="Total Exchanges" />
                </Col>
                <Col span={12}>
                    <Statistic value="5" title="Total Market Cap" />
                </Col>
                <Col span={12}>
                    <Statistic value="5" title="Total 24h Volume" />
                </Col>
                <Col span={12}>
                    <Statistic value="5" title="Total Markets" />
                </Col>
            </Row>
        </>
    )
}

export default Homepage
