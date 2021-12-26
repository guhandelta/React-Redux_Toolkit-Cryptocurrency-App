import { Switch, Route, NavLink as Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './Components';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/coin/:id">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
