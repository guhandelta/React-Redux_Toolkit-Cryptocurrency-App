import { Select, Typography, Avatar, Card, Row, Col } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
    
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 21 });

    if(!cryptoNews?.value) return 'Loading...';

    console.log('====================================');
    console.log('cryptoNews: ', cryptoNews);
    console.log('====================================');

    // const backupImage = 'https://www.cryptocompare.com/media/20646/default-avatar.png';
    const backupImage = 'https://www.coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

    return (
        <Row gutter={[32, 32]}>
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
