import React from 'react'
import Navbar from './Navbar'
import Analystics from './Analystics'
import FAQ from './FAQ'
import Earnings from './Earnings'
import Transfer from './Transfer'
import Profile from './Profile'
import styled from 'styled-components'

export default function Dashboard() {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row_one">
          <Analystics />
          <FAQ />
        </div>
        <div className="row_two">
          <Earnings />
          <Transfer />
          <Profile/>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
    color: white;
    margin-left: 18vw;
    padding: 2rem;
    height: 100%;
    .grid {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 1rem;
        margin-top: 2rem;
        .row_one {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            height: 50%;
            gap: 1rem;
        }
        .row_two {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            height: 50%;
            gap: 1rem;
        }
    }
      @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;