import React from "react";

import Navigation from "./sections/Navigation";
import Logo from "../../reusable/Logo";
import Button from "../../reusable/Button";
import { Row, Wrapp } from "../../reusable/styles";

export default function Header() {
    return (
        <Wrapp h={"80px"} fd={"row"} ai={"center"} jc={"space-between"}>
            <Logo />
            <Navigation />
            <Row>
                <Button title="Log in" secondary />
                <Button title="Free Trial" />
            </Row>
        </Wrapp>
    );
}
