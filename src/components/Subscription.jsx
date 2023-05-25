import React from "react";
import { styled } from "styled-components";
import { Col, FlexBlock, MainText, Row } from "../reusable/styles";
import { Link } from "react-router-dom";

const Wrapp = styled(FlexBlock)`
    position: relative;

    max-width: 427px;
    max-height: 116px;

    background: #0f1522;
    border-radius: 16px;

    padding: 0px 0px 0px 14px;

    :last-child {
        border-top-right-radius: 16px;
    }
`;

export default function Subscription() {
    return (
        <Wrapp>
            <Row>
                <img src="/images/svg/rubin.svg" alt="" />
                <Col jc={"flex-start"} m={"17px 0 0 23px"}>
                    <MainText ta={"left"} active fz={"17px"} m={"0 0 8px 0"}>
                        Subscription: Enterprise
                    </MainText>
                    <MainText ta={"left"} fz={"12px"} m={"0 0 18px 0"}>
                        Expires in: 17.04.2023{" "}
                    </MainText>
                    <Link to={"#"}>Change</Link>
                </Col>

                <img src="/images/svg/blocks.svg" alt="" />
            </Row>
        </Wrapp>
    );
}
