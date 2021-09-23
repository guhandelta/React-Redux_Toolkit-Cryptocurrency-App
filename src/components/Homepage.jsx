import millify from "millify";
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoApi'

const { Title } = Typography;

const Homepage = () => {

    const { data, isFetching } = useGetCryptosQuery();
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
                    <Statistic value="5"/*{millify(GlobalStatsData?.totalExchanges)}*/ title="Total Exchanges" />
                </Col>
                <Col span={12}>
                    <Statistic value="5"/*{millify(GlobalStatsData?.totalMarketCap)}*/ title="Total Market Cap" />
                </Col>
                <Col span={12}>
                    <Statistic value="5"/*{millify(GlobalStatsData?.total24hVolume)}*/ title="Total 24h Volume" />
                </Col>
                <Col span={12}>
                    <Statistic value="5"/*{millify(GlobalStatsData?.totalMarkets)}*/ title="Total Markets" />
                </Col>
            </Row>
        </>
    )
}

export default Homepage
