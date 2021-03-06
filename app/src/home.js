import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MainContainer from './MainContainer';
import { Link } from 'react-router-dom'
// import IpfsContainer from "./layouts/ipfs/IpfsContainer";
import {Issue, Token, Logo} from './images'
import IssueContainer from './layouts/issue/issueContainer';
import TokensContainer from './layouts/tokens/TokensContainer';


class Home extends Component {
    render() {
        return (
            <div className="Menu-header">
                <Link to={"/"}><img src={Logo} border="0" width="50" height="50" className="App-Logo" alt="logo"></img></Link>
                <Link to={"/issue"}><img src={Issue} border="0" width="80" height="50" className="Menu-Item" alt="issue"></img></Link>
                <Link to={"/tokens"}><img src={Token} border="0" width="50" height="50" className="Menu-Item" alt="tokens"></img></Link>
                <Route exact path={"/"} component={MainContainer}/>
                <Route exact path={"/issue"} component={IssueContainer}/>
                <Route exact path={"/tokens"} component={TokensContainer}/>
            </div>
        );
    }
}

export default Home