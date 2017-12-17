import React, { Component } from 'react';
import styled from 'styled-components';
import { Font, FONT_URL } from '../../utils';


const Navi = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	text-transform: uppercase;
	letter-spacing: 2px;
	flex: 1;
	align-items: center;
	padding-left: 1rem;
	padding-right: 1rem;
`;

const Opening = styled.div`
	font-size: 8pt;
	color: white;
`;

const Links = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 3rem;
	margin-bottom: 2rem;
`;

const LinksName = styled.div`
	font-size: 9pt;
	color: white;
	margin-bottom: 2rem;
	margin-top: 1em;
`;

const Event = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 6rem;
`;

const EventName = styled.div`
	font-size: 9pt;
	color: #ED024B;
`;

const EventDate = styled.div`
	font-size: 9pt;
	color: white;
`;

const Navigation = ({eventDate}) => {


    return (
      <Navi>
        <Opening>
          <div>Öffnungszeiten</div>
          {' '}

          <div>Mo.-Fr.</div>
          {' '}
          <div>10.00-18.00 Uhr</div>
          {' '}

          <div>Sa.</div>
          {' '}
          <div>10.00-17.00 Uhr</div>
        </Opening>
        <Event>
          <EventName>
            Nightshopping
          </EventName>
          <EventDate>
            {eventDate}
          </EventDate>
        </Event>
        <Links>
          <LinksName>Kontakt</LinksName>
          <LinksName>Über uns</LinksName>
          <LinksName>Unsere Marken</LinksName>
        </Links>
      </Navi>
    )
  }

export default Navigation;
