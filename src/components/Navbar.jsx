import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src="../icons/crypto-icon.png" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">CryptoDeck</Link>
                </Typography.Title>
                {/* <Button className="menu-control-container"> {/* For mobile phones * /}

                </Button> */}
            </div>
        </div>
    )
}

export default Navbar
