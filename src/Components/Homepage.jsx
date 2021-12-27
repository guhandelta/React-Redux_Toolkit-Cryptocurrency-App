import millify from "millify"
// import { Link } from 'react-router-dom';
import { Typography, Row, Col, Statistic } from 'antd'
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

const Homepage = () => {

    const { data, isFetching } = useGetCryptosQuery();
    const cryptoStats = data?.data?.stats;

    if(isFetching) return 'Loading...';

    return (
        <div>
            <Title>Global Crypto Statistics</Title>
            <Row>
                <Col span={12}>
                    <Statistic title="Total Cryptocurrencies" value={cryptoStats.total} />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Exchanges" value={millify(cryptoStats.totalExchanges)} />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Market Cap" value={millify(cryptoStats.totalMarketCap)} />
                </Col>
                <Col span={12}>
                    <Statistic title="Total 24h Volume" value={millify(cryptoStats.total24hVolume)} />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Markets" value={millify(cryptoStats.totalMarkets)} />
                </Col>
            </Row>
        </div>
    )
}

export default Homepage
