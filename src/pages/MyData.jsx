import React from "react";
import Subscription from "../components/Subscription";
import { Conteiner, MainText, Row } from "../reusable/styles";
import Button from "../reusable/Button";

export default function MyData() {
    return (
        <Row  jc={"space-between"}>
            <Conteiner>
                My Data
                <Row g={"15px"} m={"16px 0 12px 0"}>
                    <MainText fz={"15px"} fw={"400"}>
                        Full Name
                    </MainText>
                    <MainText active fz={"15px"} fw={"700"}>
                        Clayton Santos{" "}
                    </MainText>
                </Row>
                <Row g={"15px"} m={"0px 0 24px 0"}>
                    <MainText fz={"15px"} fw={"400"}>
                        Email:
                    </MainText>
                    <MainText active fz={"15px"} fw={"700"}>
                        johny-perry@gmail.com
                    </MainText>
                </Row>
                <Button title={"Change password"} />
            </Conteiner>

            <Subscription />
        </Row>
    );
}
