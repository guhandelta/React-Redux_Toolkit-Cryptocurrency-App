import { useState } from "react";
// import HTMLReactParser from "html-react-parser";
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
// import LineChart from './LineChart'
// import Loader from './Loader'

import { useGetCryptoDetailsQuery } from '../services/cryptoApi'

const { Title, Text } = Typography;
const { Option } = Select;


const CryptoDetails = () => {

    const { coinId } = useParams(); // useParams allows using URL params as variables
    console.log('coinId: ', coinId);
    const [ timePeriod, setTimePeriod ] = useState('7d');
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    
    const coinDetails = data?.data?.coin;
    
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

    console.log('data: ', data);

    return (
        <div>
            <h1>CryptoDetails: {coinId}</h1>
        </div>
    )
}

export default CryptoDetails
