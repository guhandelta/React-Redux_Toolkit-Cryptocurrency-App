import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = () => {

    const { data: cryptoList, isFetching } = useGetCryptosQuery();

    return (
        <div>
            <h1>Cryptocurrencies</h1>
        </div>
    )
}

export default Cryptocurrencies
