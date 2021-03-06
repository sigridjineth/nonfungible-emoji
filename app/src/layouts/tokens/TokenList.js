import React, { Component } from "react";
import { Alert, Col, Image, Panel, Row } from "react-bootstrap";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { Glyphicon } from "react-bootstrap";
import SendToken from "./SendToken";

export function TokenList(props) {
    let tokenList = props.items.map(e => (
        <Row key={e.tokenId}>
            <Col>
                <Panel bsStyle="info">
                    <Panel.Heading>
                        <Panel.Title>
                            <Glyphicon glyph="th-large">
                                Asset Image
                            </Glyphicon>
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body style={{height: '130px'}}>
                        <div style={{position: 'relative'}}>
                            <Image src={e.f} className="Emoji-img"></Image>
                            <Image src={e.e} className="Emoji-img"></Image>
                            <Image src={e.m} className="Emoji-img"></Image>
                            <p className="ethUSD-desc">
                                ETHUSD Price when minting the NFT: {e.ETHUSD}
                            </p>
                            <p className="Token-desc">
                                Token ID: EMJ - {e.tokenId}
                            </p>
                        </div>
                    </Panel.Body>
                    <Panel.Footer>
                        <SendToken flag={props.flag && props.tokenId === e.tokenId} 
                            tokenId={props.tokenId} 
                            buttonType={props.buttonType}>
                        </SendToken>
                        <ButtonGroup justified>
                            <Button href="#" bsStyle="primary" onClick={props.handleTransfer} id={e.tokenId}>
                                Transfer
                            </Button>
                            <Button href="#" bsStyle="info" onClick={props.handleApprove} id={e.tokenId}>
                                Allow
                            </Button>
                            <Button href="#" bsStyle="danger" onClick={props.handleBurn} id={e.tokenId}>
                                Burn
                            </Button>
                        </ButtonGroup>
                    </Panel.Footer>
                </Panel>
            </Col>
        </Row>
    ))

    if (tokenList.length === 0) {
        tokenList = <Alert bsStyle="warning">
            <strong>Please wait for seconds to load the data. If you have not minted your NFT yet, please do it and try again.</strong>
        </Alert>
    }

    return tokenList;
}