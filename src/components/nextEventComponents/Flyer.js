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
  margin-left: 6rem;
  margin-top: 2rem;


  &::before {
  	content: "";
  	position: absolute;
  	top: 0;
  	left: 0;
  	right: 0;
  	bottom: 0;
  	z-index: -1;
  	background-size: cover;
  	background-image: url(${require('../../assets/images/Eventpic.png')});

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
  font-size: 26pt;
  color: #ED024B;
  font-weight: bold;
  letter-spacing: 9px;
  margin-top: -1rem;
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
  font-size: 28pt;
  color: #ED024B;
  letter-spacing: 13px;
  margin-top: -0.5rem;
  text-transform: uppercase;
  margin-top: -0.5rem;
  `;

const Time = styled.div`
  color: white;
  font-size: 10pt;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: -0.5rem;
  `;

const MusicContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 1.5rem;
  padding: 0.5;
  `;

const MusicBy = styled.div`
    font-size: 15pt;
    color: #ED024B;
    font-weight: bold;
    letter-spacing: 1px;
    margin-top: -0.5rem;
    font-family: ${Font.SECONDARY};
    `;

const Dj = styled.div`
    color: white;
    font-size: 15pt;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: ${Font.SECONDARY};
    margin-top: -0.5rem;
    `;

const Reference = styled.div`
    color: #BCBCBC;
    font-size: 8pt;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: -0.5rem;
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
