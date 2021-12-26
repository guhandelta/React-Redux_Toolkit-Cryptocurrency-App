import millify from "millify"
import { Typography, Row, Col, Statistic } from 'antd'

const { Title } = Typography;

const Homepage = () => {
    return (
        <div>
            <Title>Global Crpto Statistics</Title>
            <Row>
                <Col span={12}>
                    <Statistic title="Total Cryptocurrencies" value="5" />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Exchanges" value="5" />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Market Cap" value="5" />
                </Col>
                <Col span={12}>
                    <Statistic title="Total 24h Volume" value="5" />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Markets" value="5" />
                </Col>
            </Row>
        </div>
    )
}

export default Homepage