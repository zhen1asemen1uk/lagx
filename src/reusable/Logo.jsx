import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Image = styled.img`
    max-height: 32px;
    max-width: 140px;
`;

export default function Logo() {
    return (
        <Link to={`/`}>
            <Image src="/images/svg/logo.svg" alt="logo" />
        </Link>
    );
}
