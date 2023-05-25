import styled from "styled-components";

export const FlexBlock = styled.div`
    ${({ pos }) => pos && `position: ${pos}`};
    ${({ posT }) => posT && `top: ${posT}`};
    ${({ posL }) => posL && `left: ${posL}`};
    ${({ posR }) => posR && `right: ${posR}`};
    ${({ posB }) => posB && `bottom: ${posB}`};

    display: ${({ d }) => d ?? `flex`};
    flex-direction: ${({ fd }) => fd ?? `column`};
    ${({ jc }) => jc && `justify-content:${jc}`};
    ${({ ai }) => ai && `align-items:${ai}`};

    ${({ p }) => p && `padding: ${p}`};
    ${({ m }) => m && `margin: ${m}`};

    ${({ w }) => w && `width: ${w}`};
    ${({ minW }) => minW && `min-width: ${minW}`};
    ${({ maxW }) => maxW && `max-width: ${maxW}`};

    ${({ h }) => h && `height: ${h}`};
    ${({ minH }) => minH && `min-height: ${minH}`};
    ${({ maxH }) => maxH && `max-height: ${maxH}`};

    ${({ c }) => c && `color: ${c}`};
    ${({ bg }) => bg && `background: ${bg}`};
    ${({ g }) => g && `gap: ${g}`};

    ${({ b }) => b && `border: ${b}`};
    ${({ cursor }) => (cursor ? `pointer` : `default`)};
    ${({ ta }) => (ta ? `text-align` : ta)};
`;

export const Wrapp = styled(FlexBlock)`
    flex-direction: ${({ fd }) => fd ?? `column`};
`;

export const Row = styled(FlexBlock)`
    flex-direction: ${({ fd }) => fd ?? `row`};
`;

export const Col = styled(FlexBlock)``;

export const MainText = styled(FlexBlock)`
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: ${({ fz }) => fz ?? "16px"};
    line-height: 120%;

    text-align: ${({ ta }) => ta ?? `center`};
    letter-spacing: -0.34px;

    color: ${({ active }) => (active ? "#FFFFFF" : "rgba(227, 229, 232, 0.5)")};

    flex: none;

    flex-grow: 0;
`;

export const SubText = styled(FlexBlock)``;

export const Conteiner = styled(FlexBlock)`
    border: 2px solid #0e1326;
    padding: 24px;
    border-radius: 20px;
`;
