import React, { Component } from 'react';
import styled from 'styled-components';
import { Font, FONT_URL } from '../../utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 550px;
  flex:1;
  z-index: 1;
  border: 3px solid white;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-top: 2rem;


  @media (min-width: 480px) {
    margin-left: 2rem;
    margin-right: 2rem;
    height: 300px;
  }

  @media (min-width: 768px) {
    margin-left: 4rem;
    height: 500px;
    width: 320px;
  }

  @media (min-width: 992px) {
    margin-left: 6rem;
    height: 550px;
    width: 500px;
  }

  &::before {
  	content: "";
  	position: absolute;
  	top: 0;
  	left: 0;
  	right: 0;
  	bottom: 0;
  	z-index: -1;
  	background-size: cover;
  	background-image: url(${require('../../assets/images/EventPicture.jpg')});
    background-position: center;
  }

  `;

const DateContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  margin: 1.5rem;
  padding: 0.5;

  `;

const DayName = styled.div`
  color: white;
  font-size: 10pt;
  text-transform: uppercase;
  letter-spacing: 9px;

  `;

const DayDate = styled.div`
  font-size: 22pt;
  color: #ED024B;
  font-weight: bold;
  letter-spacing: 6px;
  margin-top: -1rem;
  font-family: ${Font.SECONDARY};

  @media (min-width: 480px) {
    font-size: 24pt;
    letter-spacing: 7px;
  }

  @media (min-width: 768px) {
    font-size: 24pt;
    letter-spacing: 9px;
  }

  @media (min-width: 992px) {
    font-size: 28pt;
    letter-spacing: 9px;
  }
  `;

const InfoContainer = styled.div`
  flex:3;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  margin: 1.5rem;
  padding: 0.5;
  `;

const Title = styled.div`
  color: black;
  font-size: 10pt;
  text-transform: uppercase;
  letter-spacing: 2px;
  `;

const Location = styled.div`
  font-size: 22pt;
  color: #ED024B;
  letter-spacing: 9px;
  margin-top: -0.5rem;
  text-transform: uppercase;
  margin-top: -0.5rem;

  @media (min-width: 480px) {
    font-size: 26pt;
    letter-spacing: 10px;
  }

  @media (min-width: 768px) {
    font-size: 24pt;
    letter-spacing: 11px;
  }

  @media (min-width: 992px) {
    font-size: 28pt;
    letter-spacing: 13px;
  }
  `;

const Time = styled.div`
  color: white;
  font-size: 10pt;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: -0.5rem;
  font-family: ${Font.SECONDARY};
  `;

const MusicContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 2rem;
  padding: 0.5;
  @media (min-width: 480px) {
    margin: 2rem;
    padding-bottom: 1.5rem;
  }

  @media (min-width: 768px) {
    margin: 2rem;
  }

  @media (min-width: 992px) {
    margin: 2rem;
  }
  `;

const MusicBy = styled.div`
    font-size: 12pt;
    color: #ED024B;
    font-weight: bold;
    letter-spacing: 1px;
    margin-top: -0.5rem;
    font-family: ${Font.TERTIARY};
    @media (min-width: 480px) {
      font-size: 13pt;
    }

    @media (min-width: 768px) {
      font-size: 14pt;
    }

    @media (min-width: 992px) {
      font-size: 15pt;
    }
    `;

const Dj = styled.div`
    color: white;
    font-size: 12pt;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: ${Font.TERTIARY};
    @media (min-width: 480px) {
      font-size: 13pt;
    }

    @media (min-width: 768px) {
      font-size: 14pt;
    }

    @media (min-width: 992px) {
      font-size: 15pt;
    }

    `;

const Reference = styled.div`
    color: white;
    font-size: 8pt;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: ${Font.SECONDARY};
    `;

const Flyer = ({ eventDate, dayName, time, dj, reference }) => {
  return (
    <Wrapper>
      <DateContainer>
        <DayName>{dayName}</DayName>
        <DayDate>{eventDate}</DayDate>
      </DateContainer>
    <InfoContainer>
      <Title>Nightshopping im</Title>
      <Location>Laufsteg</Location>
      <Time>{time}</Time>
    </InfoContainer>
    <MusicContainer>
      <MusicBy>music by</MusicBy>
      <Dj>{dj}</Dj>
      <Reference>{reference}</Reference>
    </MusicContainer>
    </Wrapper>
  );
};

export default Flyer;
