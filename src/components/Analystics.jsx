import React from "react";
import styled from "styled-components";
import { cardStyle } from "./ReusableStyle";
import { BsFillCalendar2Fill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";

export default function Analystics() {
    return (
        <Section>
            <div className="analytic">
                <div className="content">
                    <h5>Spent this money</h5>
                    <h2>$682.5</h2>
                </div>
                <div className="logo">
                    <BsFillCalendar2Fill />
                </div>
            </div>
            <div className="analytic">
                <div className="logo">
                    <IoStatsChart />
                </div>
                <div className="content">
                    <h5>Earnings</h5>
                    <h2>$82.9</h2>
                </div>
            </div>
            <div className="analytic">
                <div className="logo">
                    <BiGroup />
                </div>
                <div className="content">
                    <h5>New clients</h5>
                    <h2>$322</h2>
                </div>
            </div>
            <div className="analytic">
                <div className="content">
                    <h5>New clients</h5>
                    <h2>$545.10</h2>
                </div>
                <div className="logo">
                    <FiActivity />
                </div>
            </div>
        </Section>
    );
}

const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    .analytic {
        ${cardStyle};
        padding: 1rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 1rem;
        transition: 0.5s ease-in-out;
        &:hover {
            background-color: #ffc107;
            color: black;
            svg {
                color: white;
            }
        }
        .logo {
            background-color: black;
            border-radius: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1.5rem;
            svg {
                font-size: 1.5rem;
            }
        }
    }
    @media screen and (min-width: 280px) and (max-width: 720px) {
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        .analytic {
            &:nth-of-type(3),
            &:nth-of-type(4) {
                flex-direction: row-reverse;
            }
        }
    }
`;
