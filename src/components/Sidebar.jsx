import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

export default function Sidebar() {
    const [currentLink, setCurrentLink] = useState(1);
    const [navbarState, setNavbarState] = useState(false);

    const handleClick = () => {
        setNavbarState(false);
        console.log(navbarState);
    };

    return (
        <Fragment>
            <Section>
                <div className="top">
                    <div className="brand">
                        <FaTaxi />
                        <span>Accountability</span>
                    </div>
                    <div className="toggle">
                        {navbarState ? (
                            <VscChromeClose onClick={() => handleClick()} />
                        ) : (
                            <GiHamburgerMenu
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setNavbarState(true);
                                }}
                            />
                        )}
                    </div>
                    <div className="links">
                        <ul>
                            <li
                                className={currentLink === 1 ? "active" : ""}
                                onClick={() => setCurrentLink(1)}
                            >
                                <a href="#">
                                    <MdSpaceDashboard />
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li
                                className={currentLink === 2 ? "active" : ""}
                                onClick={() => setCurrentLink(2)}
                            >
                                <a href="#">
                                    <RiDashboard2Fill />
                                    <span>Riders</span>
                                </a>
                            </li>
                            <li
                                className={currentLink === 3 ? "active" : ""}
                                onClick={() => setCurrentLink(3)}
                            >
                                <a href="#">
                                    <FaAddressCard />
                                    <span>Payment Details</span>
                                </a>
                            </li>
                            <li
                                className={currentLink === 4 ? "active" : ""}
                                onClick={() => setCurrentLink(4)}
                            >
                                <a href="#">
                                    <GiTwirlCenter />
                                    <span>Learning Center</span>
                                </a>
                            </li>
                            <li
                                className={currentLink === 5 ? "active" : ""}
                                onClick={() => setCurrentLink(5)}
                            >
                                <a href="#">
                                    <BsFillChatTextFill />
                                    <span>FAQs</span>
                                </a>
                            </li>
                            <li
                                className={currentLink === 6 ? "active" : ""}
                                onClick={() => setCurrentLink(6)}
                            >
                                <a href="#">
                                    <IoIosSettings />
                                    <span>Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="logout">
                    <a href="#">
                        <FiLogOut />
                        <span>Logout</span>
                    </a>
                </div>
            </Section>
            <ResponsiveNav
                state={navbarState}
                className={navbarState ? "show" : ""}
            >
                <div className="responsive__links">
                    <ul>
                        <li
                            className={currentLink === 1 ? "active" : ""}
                            onClick={() => setCurrentLink(1)}
                        >
                            <a href="#">
                                <MdSpaceDashboard />
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li
                            className={currentLink === 2 ? "active" : ""}
                            onClick={() => setCurrentLink(2)}
                        >
                            <a href="#">
                                <RiDashboard2Fill />
                                <span>Riders</span>
                            </a>
                        </li>
                        <li
                            className={currentLink === 3 ? "active" : ""}
                            onClick={() => setCurrentLink(3)}
                        >
                            <a href="#">
                                <FaAddressCard />
                                <span>Payment Details</span>
                            </a>
                        </li>
                        <li
                            className={currentLink === 4 ? "active" : ""}
                            onClick={() => setCurrentLink(4)}
                        >
                            <a href="#">
                                <GiTwirlCenter />
                                <span>Learning Center</span>
                            </a>
                        </li>
                        <li
                            className={currentLink === 5 ? "active" : ""}
                            onClick={() => setCurrentLink(5)}
                        >
                            <a href="#">
                                <BsFillChatTextFill />
                                <span>FAQs</span>
                            </a>
                        </li>
                        <li
                            className={currentLink === 6 ? "active" : ""}
                            onClick={() => setCurrentLink(6)}
                        >
                            <a href="#">
                                <IoIosSettings />
                                <span>Settings</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </ResponsiveNav>
        </Fragment>
    );
}

const Section = styled.section`
    position: fixed;
    left: 0;
    background-color: #212121;
    height: 100vh;
    width: 18vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    gap: 2rem;
    .top {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        .toggle {
            display: none;
        }
        .brand {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            svg {
                color: #ffc107;
                font-size: 2rem;
            }
            span {
                color: #ffc107;
            }
        }
        .links {
            display: flex;
            justify-content: center;
            ul {
                list-style: none;
                flex-direction: column;
                display: flex;
                gap: 1rem;
                li {
                    padding: 0.6rem 1rem;
                    border-radius: 0.6rem;
                    &:hover {
                        background-color: #ffc107;
                        a {
                            color: black;
                        }
                    }
                    a {
                        text-decoration: none;
                        display: flex;
                        gap: 1rem;
                        color: white;
                    }
                }
                .active {
                    background-color: #ffc107;
                    a {
                        color: black;
                    }
                }
            }
        }
    }

    .logout {
        padding: 0.3rem 1rem;
        border-radius: 0.6rem;
        &:hover {
            background-color: #da0037;
        }
        a {
            text-decoration: none;
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: flex-start;
            color: white;
        }
    }

    @media screen and (min-width: 280px) and (max-width: 1084px) {
        position: initial;
        width: 100%;
        height: max-content;
        padding: 1rem;
        .top {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0 1rem;
            .toggle {
                display: block;
                color: white;
                z-index: 99;
                svg {
                    font-size: 1.5rem;
                }
            }
            .brand {
                gap: 1rem;
                justify-content: flex-start;
            }
        }
        .top > .links,
        .logout {
            display: none;
        }
    }
`;

const ResponsiveNav = styled.nav`
    position: fixed;
    top: 0;
    right: -10vw;
    z-index: 10;
    background-color: #212121;
    height: 100vh;
    width: ${({state}) => (state ? "60%" : "0%")};
    transition: 0.4s ease-in-out;
    /* opacity: 0; */
    /* visibility: hidden; */
    padding: 1rem;
    .responsive__links {
        ul {
            list-style: none;
            flex-direction: column;
            display: flex;
            gap: 1rem;
            li {
                padding: 0.6rem 1rem;
                border-radius: 0.6rem;
                &:hover {
                    background-color: #ffc107;
                    a {
                        color: black;
                    }
                }
                a {
                    text-decoration: none;
                    display: flex;
                    gap: 1rem;
                    color: white;
                }
            }
            .active {
                background-color: #ffc107;
                a {
                    color: black;
                }
            }
        }
    }
`;
