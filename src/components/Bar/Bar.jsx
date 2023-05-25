import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { styled } from "styled-components";

import { Col, Conteiner, Wrapp } from "../../reusable/styles";
import PersonalSvg from "../../reusable/svgs/PersonalSvg";
import KeySvg from "../../reusable/svgs/KeySvg";
import ProfileSvg from "../../reusable/svgs/ProfileSvg";
import FireSvg from "../../reusable/svgs/FireSvg";
import MessegesSvg from "../../reusable/svgs/MessegesSvg";
import AffiliateSvg from "../../reusable/svgs/AffiliateSvg";
import ExitSvg from "../../reusable/svgs/ExitSvg";
import ShareLinkSvg from "../../reusable/svgs/ShareLinkSvg";
import SupportSvg from "../../reusable/svgs/SupportSvg";
import ReccurenceSvg from "../../reusable/svgs/ReccurenceSvg";
import StatisticsSvg from "../../reusable/svgs/StatisticsSvg";
import ButtonWithIcons from "../../reusable/ButtonWithIcons";

const PersonalBlock = styled(Col)`
    position: relative;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const ButtonNearAvatar = styled.img`
    position: absolute;
    top: 70px;
    right: -30px;

    cursor: pointer;
`;

const Avatar = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 130px;
    height: 130px;

    border-radius: 100%;
    margin-bottom: 34px;

    border: 2px solid #2c5dfe;

    border-right: 2px solid #3e424d;
    transform: rotate(-45deg);

    :first-child {
        background: #ffdf80;
        width: 110px;
        height: 110px;
        border-radius: 100%;
        transform: rotate(45deg);
    }
`;

const Name = styled(Col)`
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;

    text-align: center;

    color: #ffffff;
`;

const Email = styled(Col)``;

const Ul = styled.ul`
    padding: 0;
    list-style-type: none;
`;

const Li = styled.li`
    a {
        text-decoration: none;
    }
`;

export default function Bar() {
    const { pathname } = useLocation();

    const arrLinks_1 = [
        {
            title: "My data",
            link: "/myData",
            icon: (
                <PersonalSvg fill={pathname === "/myData" ? "white" : "gray"} />
            ),
        },
        {
            title: "Enter key",
            link: "/enterKey",
            icon: <KeySvg fill={pathname === "/enterKey" ? "white" : "gray"} />,
        },
        {
            title: "Personal information",
            link: "/personalInformation",
            icon: (
                <ProfileSvg
                    fill={
                        pathname === "/personalInformation" ? "white" : "gray"
                    }
                />
            ),
        },
    ];

    const arrLinks_2 = [
        {
            title: "Reward program",
            link: "/rewardProgram",
            icon: (
                <FireSvg
                    fill={pathname === "/rewardProgram" ? "white" : "gray"}
                />
            ),
        },
        {
            title: "Write Testimonials",
            link: "/writeTestimonials",
            icon: (
                <MessegesSvg
                    fill={pathname === "/writeTestimonials" ? "white" : "gray"}
                />
            ),
        },
        {
            title: "Affiliate",
            link: "/affiliate",
            icon: (
                <AffiliateSvg
                    fill={pathname === "/affiliate" ? "white" : "gray"}
                />
            ),
        },
        {
            title: "Statistics",
            link: "/statistics",
            icon: (
                <StatisticsSvg
                    fill={pathname === "/statistics" ? "white" : "gray"}
                />
            ),
        },
        {
            title: "Support",
            link: "/support",
            icon: (
                <SupportSvg fill={pathname === "/support" ? "white" : "gray"} />
            ),
        },
        {
            title: "Reccurence",
            link: "/reccurence",
            icon: (
                <ReccurenceSvg
                    fill={pathname === "/reccurence" ? "white" : "gray"}
                />
            ),
        },
        {
            title: "Share Link",
            link: "/shareLink",
            icon: (
                <ShareLinkSvg
                    fill={pathname === "/shareLink" ? "white" : "gray"}
                />
            ),
        },
        {
            title: "Exit",
            link: "/exit",
            icon: <ExitSvg fill={pathname === "/exit" ? "white" : "gray"} />,
        },
    ];

    return (
        <Wrapp minW={"355px"}>
            <PersonalBlock>
                <Avatar>
                    <img src="/images/avatar.png" alt="avatar" />
                    <ButtonNearAvatar
                        src="/images/svg/button.svg"
                        alt="button"
                    />
                </Avatar>
                <Name>Clayton Santos</Name>
                <Email>johny-perry@gmail.com</Email>
            </PersonalBlock>

            <Col g={"12px"}>
                <Conteiner>
                    <Ul>
                        {arrLinks_1.map((el, i) => (
                            <Li key={`${el.title}_${i}`}>
                                <NavLink to={el.link}>
                                    <ButtonWithIcons
                                        c={
                                            pathname !== el.link
                                                ? "#6B7A99"
                                                : "#fff"
                                        }
                                        w={"100%"}
                                        minW={"200px"}
                                        secondary={pathname !== el.link}
                                        title={
                                            <>
                                                {el.svg}

                                                {el.title}
                                            </>
                                        }
                                        arrow
                                        icon={el.icon}
                                    />
                                </NavLink>
                            </Li>
                        ))}
                    </Ul>
                </Conteiner>

                <Conteiner>
                    <Ul>
                        {arrLinks_2.map((el, i) => (
                            <Li key={`${el.title}_${i}`}>
                                <NavLink to={el.link}>
                                    <ButtonWithIcons
                                        c={
                                            pathname !== el.link
                                                ? "#6B7A99"
                                                : "#fff"
                                        }
                                        w={"100%"}
                                        minW={"200px"}
                                        secondary={pathname !== el.link}
                                        title={
                                            <>
                                                {el.svg}

                                                {el.title}
                                            </>
                                        }
                                        arrow
                                        icon={el.icon}
                                    />
                                </NavLink>
                            </Li>
                        ))}
                    </Ul>
                </Conteiner>
            </Col>
        </Wrapp>
    );
}
