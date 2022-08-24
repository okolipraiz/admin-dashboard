import React from "react";
import styled from "styled-components";
import { FcBusinessman } from "react-icons/fc";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyle } from "./ReusableStyle";
export default function Profile() {
    return (
        <Section>
            <div className="image">
                <FcBusinessman className="image" />
            </div>
            <div className="title">
                <h2>Kishan Sheth</h2>
                <h5>
                    <HiOutlineLocationMarker /> New York, USA
                </h5>
            </div>
            <div className="info">
                <div className="container">
                    <h5>Days at work</h5>
                    <h3>28</h3>
                </div>
                <div className="container">
                    <h5>Rides</h5>
                    <h3>427</h3>
                </div>
                <div className="container">
                    <h5>Hours</h5>
                    <h3>76</h3>
                </div>
            </div>
        </Section>
    );
}
const Section = styled.section`
    ${cardStyle};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    .image {
        max-height: 10rem;
        overflow: hidden;
        border-radius: 20rem;
        .image {
            height: 10rem;
            width: 10rem;
            object-fit: cover;
            border-radius: 20rem;
            transition: 0.5s ease-in-out;
        }
        &:hover {
            .image {
                transform: scale(1.3);
            }
        }
    }
    .title {
        text-align: center;
        h2,
        h5 {
            color: #ffc107;
        }
        h5 {
            letter-spacing: 0.2rem;
        }
    }
    .info {
        display: flex;
        gap: 1rem;
        .container {
            text-align: center;
        }
    }
`;