import React from "react";
import styled from "styled-components";
import { Row } from "./styles";

const WrappButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    padding: ${({ p }) => p ?? `16px 36px`};
    margin: ${({ m }) => m ?? `0`};

    background: ${({ bgColor, secondary }) =>
        bgColor ?? (secondary ? "transparent" : "#2C5DFE")};

    border: none;

    border-radius: 300px;

    font-weight: 700;

    text-align: left;
    letter-spacing: 0.75px;

    color: ${({ secondary, c }) => (c ? c : secondary ? `#2C5DFE` : `white`)};

    transition: 0.2s;
    opacity: ${({ disabled }) => (disabled ? `0.5` : `1`)};
    cursor: ${({ disabled }) => (disabled ? `default` : `pointer`)};

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;

    height: ${({ h }) => h ?? `50px`};
    width: ${({ w }) => w ?? `fit-content`};

    box-shadow: ${({ secondary }) =>
        secondary ? "none" : "0px 10px 30px rgba(44, 93, 254, 0.25)"};
`;

const ButtonWithIcons = ({
    title = `Button`,

    onClick,

    secondary,
    arrow,
    icon,

    h,
    w,
    p,
    m,
    c,

    disabled,
    bgColor,
    as = `button`,
    type = `button`,
}) => {
    return (
        <WrappButton
            h={h}
            w={w}
            p={p}
            m={m}
            secondary={secondary}
            disabled={disabled}
            bgColor={bgColor}
            as={as}
            type={type}
            onClick={onClick}
        >
            <Row m={"0 24px 0 0"}>{icon && icon}</Row>
            <Row ai={"center"} jc={"space-between"} g={"13px"} w={"100%"} c={c}>
                {title}
                {arrow && <img src="/images/svg/arrow.svg" alt="arrow" />}
            </Row>
        </WrappButton>
    );
};

export default ButtonWithIcons;
