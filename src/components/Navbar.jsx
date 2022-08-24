import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

export default function Navbar() {
    return (
        <Nav>
            <div className="title">
                <h4>Hi Praise</h4>
                <h1>
                    Welcome to <span>my dasboard</span>
                </h1>
            </div>
                <div className="search">
                    <BiSearch />
                    <input type="text" placeholder="Search" />
                </div>
        </Nav>
    );
}

const Nav = styled.nav`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    color: white;
    .title {
        h1 {
            span {
                color: #ffc107;
            }
        }
    }

    .search {
        background-color: #212121;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem 5rem 1rem 1rem;
        border-radius: 1rem;
        position: absolute;
        right: 20px;

        svg {
            color: #ffc107;
        }
        input {
            background-color: transparent;
            border: none;
            color: #ffc107;
            &::placeholder {
                color: #ffc107;
            }
            &:focus {
                outline: none;
            }
        }
    }
`;
