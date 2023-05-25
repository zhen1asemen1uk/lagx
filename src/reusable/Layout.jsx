import React from "react";

import styled from "styled-components";

import { Col, Row } from "./styles";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Bar from "../components/Bar/Bar";

const Wrapp = styled(Col)`
    padding: 20px 140px;
`;

const Main = styled.div`
    flex: 1 1 auto;
`;

const MainLayout = ({ children }) => {
    return (
        <Wrapp minH="100vh">
            <Header />
            <Main>
                <Row g={"24px"} w={"100%"}>
                    <Bar />
                    <div style={{ width: "100%", margin: "100px 0 0 0" }}>
                        {children}
                    </div>
                </Row>
            </Main>
            <Footer />
        </Wrapp>
    );
};

export default MainLayout;
