import React from "react";
import { Col, FlexBlock, MainText, Row } from "../../reusable/styles";
import { styled } from "styled-components";
import Logo from "../../reusable/Logo";
import { NavLink } from "react-router-dom";
import Button from "../../reusable/Button";

const Wrapp = styled(FlexBlock)`
    margin-top: 100px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Nav = styled.nav``;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    gap: 16px;
    list-style-type: none;

    margin: 0;
    padding: 0;
`;

const Li = styled.li`
    cursor: pointer;
`;

const arrLinks_1 = [
    { title: "Home", link: "/" },
    { title: "Games", link: "/games" },
    { title: "How it works", link: "/how_it_works" },
    { title: "Pricing", link: "/pricing" },
    { title: "FAQ", link: "/faq" },
    { title: "Free trial", link: "/#" },
];

const arrLinks_2 = [
    { title: "Log in", link: "/#" },
    { title: "Register", link: "/#" },
    { title: "Terms of use", link: "/#" },
];

export default function Footer() {
    return (
        <Wrapp h={"320px"} p={"40px 0 0 0"}>
            <Row jc={"space-between"}>
                <Col jc={"space-between"} g={"174px"}>
                    <Logo />
                    <MainText>© 2023 LAGXVPN</MainText>
                </Col>

                <Col>
                    <Nav>
                        <Ul>
                            <Li>
                                <MainText>Homepage</MainText>
                            </Li>
                            {arrLinks_1.map((el, i) => (
                                <Li key={`${el.link}_${el.title}_${i}`}>
                                    <NavLink to={el.link}>
                                        <MainText active>{el.title}</MainText>
                                    </NavLink>
                                </Li>
                            ))}
                        </Ul>
                    </Nav>
                </Col>

                <Col>
                    <Nav>
                        <Ul>
                            <Li>
                                <MainText>Account</MainText>
                            </Li>
                            {arrLinks_2.map((el, i) => (
                                <Li key={`${el.link}_${i}`}>
                                    <NavLink to={el.link}>
                                        <MainText active>{el.title}</MainText>
                                    </NavLink>
                                </Li>
                            ))}
                        </Ul>
                    </Nav>
                </Col>

                <Col g={"16px"}>
                    <MainText>Get the app</MainText>

                    <Button
                        title={
                            <>
                                <img
                                    src="/images/svg/windows_8.1.svg"
                                    alt="windows_8.1"
                                />
                                Download for Windows
                            </>
                        }
                    />
                </Col>
            </Row>
        </Wrapp>
    );
}
