import { Select, Typography, Avatar, Card, Row, Col } from 'antd';
import moment from 'moment';
import { useState } from 'react';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {

    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 21 });
    const { data } = useGetCryptosQuery(100);

    if(!cryptoNews?.value) return 'Loading...';

    console.log('cryptoNews: ', cryptoNews);

    // const backupImage = 'https://www.cryptocompare.com/media/20646/default-avatar.png';
    const backupImage = 'https://www.coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';
    // console.log('data: ', data);
    // console.log('data.data: ', data.data);
    // console.log('data.data.coins: ', data.data.coins);
    // console.log('data.data.coins.name: ', data.data.coins.name);
    return (
        <Row gutter={[32, 32]}>
            {!simplified && (
                <Col span={24}>
                    <Select 
                        showSearch
                        className="select-news" 
                        placeholder="Select a Cryptocurrecny"
                        optionFilterProp="children"	
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="Cryptocurrency">Cryptocurrency</Option>
                        {data?.data?.coins.map((coin) => { 
                            return <Option key={coin.id} value={coin.name}>{coin.name}</Option>
                        })}
                    </Select>

                </Col>
            )}
            {cryptoNews.value.map(news => (
                <Col xs={24} sm={12} lg={8} key={news.id} span={24}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.name}</Title>
                                <img style={{ maxWidth:"200px", maxHeight:"100px" }} src={news?.image?.thumbnail?.contentUrl || backupImage} alt="news" />
                            </div>
                            <p>
                                {news.description > 100
                                    ? news.description.substring(0, 100) + '...'
                                    : news.description
                                }
                            </p>
                            <div className="provider-container">
                                <>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || backupImage} alt="news" />
                                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                </>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News
