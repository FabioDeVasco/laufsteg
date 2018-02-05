import React, { Component } from 'react';
import styled from 'styled-components';
import { Font, FONT_URL } from '../../utils';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';

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
	margin-top: 1.5rem;
	font-family: ${Font.SECONDARY};
`;

const Links = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 3rem;
	margin-bottom: 2rem;
`;

const SuperLink = styled(Link)`
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

const EventName = styled(Link)`
	font-size: 9pt;
	color: #ED024B;
	font-weight: bold;
`;

const EventDate = styled.div`
	font-size: 9pt;
	color: white;
	font-family: ${Font.SECONDARY};
`;

const Navigation = ({ eventDate }) => {
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
        <EventName
          to="next-event"
          spy={true}
          smooth={true}
          offset={80}
          duration={900}
        >
          Nightshopping
        </EventName>
        <EventDate>
          {eventDate}
        </EventDate>
      </Event>
      <Links>
        <SuperLink
          to="contact"
          spy={true}
          smooth={true}
          offset={60}
          duration={1000}
        >
          Kontakt
        </SuperLink>
        <SuperLink
          to="about-us"
          spy={true}
          smooth={true}
          offset={60}
          duration={1100}
        >
          Über uns
        </SuperLink>
        <SuperLink
          to="brands"
          spy={true}
          smooth={true}
          offset={60}
          duration={1200}
        >
          Unsere Marken
        </SuperLink>
      </Links>
    </Navi>
  );
};

export default Navigation;
