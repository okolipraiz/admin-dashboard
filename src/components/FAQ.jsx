import React from 'react'
import styled from 'styled-components'
import {IoIosArrowForward} from 'react-icons/io'
import { AiFillCalendar } from 'react-icons/ai'
import { IoMdCash } from 'react-icons/io'
import { MdTimelapse } from 'react-icons/md'
import { cardStyle } from './ReusableStyle'


const faqs = [
    {
        icon: <AiFillCalendar />,
        text: "What is the difference between a regular and a premium account?",
    },
    {
        icon: <MdTimelapse />,
        text: "What is the difference between a regular and a premium account?",
    },
    {
        icon: <IoMdCash />,
        text: "What is the difference between a regular and a premium account?",
    },
];

export default function FAQ() {
  return (
      <Section>
          <div className="title">
              <h2>Information for spending</h2>
          </div>
          <div className="faqs">
              {faqs.map((faq, index) => (
                  <div className="faq" key={index}>
                      <div className="info">
                          {faq.icon} <h4>{faq.text}</h4>
                      </div>

                      <IoIosArrowForward />
                  </div>
              ))}
          </div>
      </Section>
  );
}

const Section = styled.section`
    ${cardStyle}
    .title {
        h2 {
            color: #ffc107;
        }
    }
    .faqs {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
        .faq {
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            .info {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            svg {
                font-size: 1.4rem;
            }
            &:nth-of-type(2) {
                border-top: 0.01rem solid #6c6e6e;
                border-bottom: 0.01rem solid #6c6e6e;
                padding: 0.8rem 0;
            }
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        svg {
            font-size: 2rem !important;
        }
    }
`;
