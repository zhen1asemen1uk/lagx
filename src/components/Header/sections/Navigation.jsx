import React from "react";
import { styled } from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

import { MainText } from "../../../reusable/styles";

const Nav = styled.nav`
    background: rgba(33, 46, 57, 0.25);
    backdrop-filter: blur(22.5px);

    border-radius: 300px;
    padding: 19px 36px;
`;

const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 40px;
    list-style-type: none;

    margin: 0;
    padding: 0;
`;

const Li = styled.li`
    cursor: pointer;

    a {
        text-decoration: none;
    }
`;

const arrLinks = [
    { title: "Home", link: "/" },
    { title: "Games", link: "/games" },
    { title: "How it works", link: "/how_it_works" },
    { title: "Pricing", link: "/pricing" },
    { title: "FAQ", link: "/faq" },
];

export default function Navigation() {
    const { pathname } = useLocation();

    return (
        <Nav>
            <Ul>
                {arrLinks.map((el, i) => (
                    <Li key={`${el.link}_${i}`}>
                        <NavLink to={el.link}>
                            <MainText active={pathname === el.link}>
                                {el.title}
                            </MainText>
                        </NavLink>
                    </Li>
                ))}
            </Ul>
        </Nav>
    );
}
