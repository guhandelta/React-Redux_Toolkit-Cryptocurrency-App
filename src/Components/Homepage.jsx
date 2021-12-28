import millify from "millify"
import { Link } from 'react-router-dom';
import { Typography, Row, Col, Statistic } from 'antd'
import { useGetCryptosQuery } from "../services/cryptoApi";

import Cryptocurrencies from './Cryptocurrencies'
import News from './News'

const { Title } = Typography;

const Homepage = () => {

    const { data:cryptosList, isFetching } = useGetCryptosQuery(10);
    const cryptoStats = cryptosList?.data?.stats;

    if(isFetching) return 'Loading...';

    return (
        <>
            <Title level={2} className="heading">Global Crypto Statistics</Title>
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
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
                <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More...</Link></Title>
            </div>
            <Cryptocurrencies simplified /> {/* Simplified is true by default, unless set as simplified={false} */}
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="show-more"><Link to="/news">Show More...</Link></Title>
            </div>
            <News simplified />
        </>
    )
}

export default Homepage
