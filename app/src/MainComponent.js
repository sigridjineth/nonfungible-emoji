import React, { Component } from "react";
import PropTypes from "prop-types";

import logo from "./logo.png";

class MainComponent extends Component {

    constructor(props, context) {
        super(props);
        this.contracts = context.drizzle.contracts;
        this.deedToken = this.contracts.DeedToken;
    }

    componentDidMount = () => {
        this.dataKey = this.deedToken.methods.totalSupply.cacheCall();
    }

    handleClick = () => {
        this.totalSupply = this.props.DeedToken.totalSupply[this.dataKey].value;
    }

    handleSayHello = () => {
        this.props.onClickSayHello(this.input.value);
    }


    render () {

        return (
            <div className="container">
                <img src={logo} alt="drizzle-logo" border="0" width="200" height="200"/>
                <h2>Account</h2>
                {this.props.accounts[0]}
                <h2>Balance</h2>
                {this.props.accountBalances[this.props.accounts[0]]}
                <h2>DeedToken Instance</h2>
                {this.props.DeedToken.initialized && "True"}
                <h2>Total Supply</h2>
                <p>{this.totalSupply}</p>
                <button onClick={this.handleClick}>Total Supply</button>
                <h2>Say Hello</h2>
                <p>{this.props.hello}</p>
                <input type="text" ref={(ref)=>this.input=ref}/><button onClick={this.handleSayHello}>Say Hello!</button>
            </div>
        )
    }
}

// legacy context API
// The legacy API will continue working for all 16.x releases.
MainComponent.contextTypes = {
    drizzle: PropTypes.object
}

export default MainComponent;