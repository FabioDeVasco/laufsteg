import React, { Component } from 'react';
import styled from 'styled-components';
import { Font, FONT_URL } from '../../utils';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';

const Navi = styled.div`
	display: flex;
	flex-direction: column;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	flex: 1;
	align-items: center;
	padding-top: 2rem;
	padding-bottom: 2rem;
	background-color: #606060;

	@media (min-width: 480px) {
		letter-spacing: 0.5px;
		flex-direction: row;
	}

	@media (min-width: 768px) {
		letter-spacing: 1px;
		flex-direction: row;
	}

	@media (min-width: 992px) {
		flex-direction: column;
		letter-spacing: 2px;
	}

`;

const Links = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 0.5rem;
	margin-right: 0.5rem;

	@media (min-width: 480px) {
		margin-left: 0.62rem;
		margin-right: 0.62rem;
	}

	@media (min-width: 768px) {
		margin-left: 1rem;
		margin-right: 1rem;
	}

	@media (min-width: 992px) {
		flex-direction: column;
		margin-top: 5rem;
		margin-bottom: 3rem;
		margin-left: 0rem;
		margin-right: 0rem;

	}
`;

const SuperLink = styled(Link)`
	font-size: 9pt;
	color: white;
	margin-bottom: 2rem;
	margin-top: 1em;
	margin-left: 0.25rem;
	margin-right: 0.25rem;

	@media (min-width: 480px) {
		margin-left: 0.5rem;
		margin-right: 0.5rem;
	}

	@media (min-width: 768px) {
		margin-left: 0.75rem;
		margin-right: 0.75rem;
	}

	@media (min-width: 992px) {
		margin-left: 0rem;
		margin-right: 0rem;
	}
`;

const Event = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0rem;

	@media (min-width: 480px) {
		margin: 1rem;
}
`;

const EventName = styled(Link)`
	font-size: 9pt;
	color: #ED024B;
	font-weight: bold;
`;

const EventDate = styled.div`
	font-size: 9pt;
	color: #606060;
	font-family: ${Font.SECONDARY};
	@media (min-width: 480px) {
		color: white;
	}
`;


const WhiteBackground = styled.div`
	position: absolute;
	left: 0;
	width: 100%;
	background-color: #606060;
	z-index: -1;
	height: 1%;

	@media (min-width: 480px) {
		background-color: #606060;
	}

	@media (min-width: 768px) {
	background-color: #606060;
	}

	@media (min-width: 968px) {
	background-color: #606060;
	height: 0%;
	bottom: 0rem;
	}

	@media (min-width: 992px) {
		bottom: -9rem;
		height: 35%;
		background-color: white;
	}

`;

const Navigation = ({ eventDate }) => {
  return (
    <Navi>
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
			<WhiteBackground/>
    </Navi>
  );
};

export default Navigation;
