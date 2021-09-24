import { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from 'millify'
import { Row, Col, Typography, Select } from 'antd'
import { 
    MoneyCollectOutlined,
    DollarCircleOutlined,
    FundOutlined,
    ExclamationCircleOutlined,
    StopOutlined,
    TrophyOutlined,
    NumberOutlined,
    ThunderboltOutlined,
    CheckOutlined 
} from '@ant-design/icons'

import { useGetCryptoDetailsQuery } from '../services/cryptoApi'

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {

    const { coinId } = useParams(); // useParams allows using URL params as variables
    const [ timePeriod, setTimePeriod ] = useState('7d ');
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const coinDetails = data?.data?.coin;
    if(isFetching) return 'Loading...';

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    // Fetching the coin stats in the form of an array to map over it
    const stats = [
        { title: 'Price to USD', value: `$ ${coinDetails.price && millify(coinDetails.price)}`, icon: <DollarCircleOutlined /> },
        { title: 'Rank', value: coinDetails.rank, icon: <NumberOutlined /> },
        { title: '24h Volume', value: `$ ${coinDetails.volume && millify(coinDetails.volume)}`, icon: <ThunderboltOutlined /> },
        { title: 'Market Cap', value: `$ ${coinDetails.marketCap && millify(coinDetails.marketCap)}`, icon: <DollarCircleOutlined /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${millify(coinDetails.allTimeHigh.price)}`, icon: <TrophyOutlined /> },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: coinDetails.numberOfMarkets, icon: <FundOutlined /> },
        { title: 'Number Of Exchanges', value: coinDetails.numberOfExchanges, icon: <MoneyCollectOutlined /> },
        { title: 'Aprroved Supply', value: coinDetails.approvedSupply ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
        { title: 'Total Supply', value: `$ ${millify(coinDetails.totalSupply)}`, icon: <ExclamationCircleOutlined /> },
        { title: 'Circulating Supply', value: `$ ${millify(coinDetails.circulatingSupply)}`, icon: <ExclamationCircleOutlined /> },
    ];


    return (
        <>
            <Col className="coin-detail-container">
                <Col className="coin-heading-container">
                    <Title level={2} className="coin-name">
                        {coinDetails.name} ({coinDetails.slug})
                    </Title>
                    <p>
                        {coinDetails.name} live place in USD.
                    </p>
                </Col>
                <Select
                    defaultValue="7d"
                    className="select-timeperiod"
                    placeholder="Select Time Period"
                    onChange={value => setTimePeriod(value)}
                >
                    {time.map((date) => <Option key={date}>{date}</Option>)}
                </Select>
                <Col className="stats-container">
                    <Col className="coin-value-statistics">
                        <Col className="coin-value-statistics-heading">
                            <Title level={3} className="coin-details-heading">
                                {coinDetails.name} Value Statistics
                            </Title>
                            <p>
                                An overview of {coinDetails.name} stats
                            </p>
                        </Col>
                        {stats.map(({ icon, title, value })=>(
                            <Col className="coin-stats">
                                <Col className="coin-stats-name">
                                    <Text>{icon}</Text>
                                    <Text>{title}</Text>
                                </Col>
                                <Text className="stats">{value}</Text>
                            </Col>
                        ))}
                    </Col>
                    <Col className="other-stats-info">
                        <Col className="coin-value-statistics-heading">
                            <Title level={3} className="coin-details-heading">
                                Other Statistics
                            </Title>
                            <p>
                                Other {coinDetails.name} stats
                            </p>
                        </Col>
                        {genericStats.map(({ icon, title, value })=>(
                            <Col className="coin-stats">
                                <Col className="coin-stats-name">
                                    <Text>{icon}</Text>
                                    <Text>{title}</Text>
                                </Col>
                                <Text className="stats">{value}</Text>
                            </Col>
                        ))}
                    </Col>
                </Col>
                <Col className="coin-desc-link">
                    <Row className="coin-desc">
                        <Title level={3} className="coin-details-heading">
                            What is {coinDetails.name}?
                            {HTMLReactParser(coinDetails.description)} {/*Description is a Raw HTML so it needs to be parsed*/}
                        </Title>
                    </Row>
                    <Col className="coin-links">
                        <Title level={3} className="coin-details-heading">
                            {coinDetails.name}
                        </Title>
                        {coinDetails.links.map(links => (
                            <Row className="coin-link">
                                <Title level={5} className="link-name">
                                    {links.type}
                                </Title>
                                <a href={links.url} target="_blank" rel="noreferrer">
                                    {links.name}
                                </a>
                            </Row>
                        ))}
                    </Col>
                </Col>
            </Col>
        </>
    )
}

export default CryptoDetails
