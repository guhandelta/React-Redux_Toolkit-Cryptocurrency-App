import millify from "millify";
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoApi'
import { Cryptocurrencies, News } from '../components'

const { Title } = Typography;

const Homepage = () => {

    const { data, isFetching } = useGetCryptosQuery(10);
    const GlobalStatsData = data?.data?.stats;

    if(isFetching) return 'Loading...';

    return (
        <>
            <Title level={2} className="heading">Global Cryptocurrency stats</Title>
            <Row>
                <Col span={12}>
                    <Statistic value={GlobalStatsData?.total} title="Total Cryptocurrencies" />
                </Col>
                <Col span={12}>
                    <Statistic value={millify(GlobalStatsData?.totalExchanges)} title="Total Exchanges" />
                </Col>
                <Col span={12}>
                    <Statistic value={millify(GlobalStatsData?.totalMarketCap)} title="Total Market Cap" />
                </Col>
                <Col span={12}>
                    <Statistic value={millify(GlobalStatsData?.total24hVolume)} title="Total 24h Volume" />
                </Col>
                <Col span={12}>
                    <Statistic value={millify(GlobalStatsData?.totalMarkets)} title="Total Markets" />
                </Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-Title">Top 10 Cryptocurrencies in the world</Title>
                <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More...</Link></Title>
            </div>
            <Cryptocurrencies simplified /> {/* Simplified is ture by default, unless set as simplified={false} */}
            <div className="home-heading-container">
                <Title level={2} className="home-Title">Latest Crypto News</Title>
                <Title level={3} className="show-more"><Link to="/news">Show More...</Link></Title>
            </div>
            <News simplified />
        </>
    )
}

// Video Progredd 56:17

export default Homepage
