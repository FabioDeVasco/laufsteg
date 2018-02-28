import React, { Component } from 'react';
import styled from 'styled-components';
import { Font, FONT_URL } from '../../utils';



const Wrapper = styled.div`
	margin: 1rem;
	display: flex;
	top: 80%;
	right: 25%;
	position: absolute;



	@media (min-width: 480px) {
		right: 10%;
		top: 80%;
	}

	@media (min-width: 768px) {
		right: 10%;
		top: 80%;
	}

	@media (min-width: 992px) {
		right: 5%;
		top: 70%;
	}
`;

const Background = styled.div`
	background-color: white;
	opacity: 0.7;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	position: absolute;

	`;

const Style = styled.div`
	font-size: 9pt;
	letter-spacing: 0.5px;
	color: black;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	text-transform: none;
	font-family: ${Font.SECONDARY};
	font-style: italic;
	margin-right: 1rem;


		@media (min-width: 480px) {
			font-size: 10pt;
			letter-spacing: 1px;
		}

		@media (min-width: 768px) {
			font-size: 12pt;
			letter-spacing: 1.5px;
		}

		@media (min-width: 992px) {
			font-size: 14pt;
			letter-spacing: 2px;
		}

`;


const AccentTitle = ({OpenWeek, OpenWeekEnd}) => {

return (
<Wrapper>
<Background/>
<Style>
<div>Öffnungszeiten</div>
{' '}
<div>Mo.-Fr. {OpenWeek}</div>
{' '}
<div>Sa. {OpenWeekEnd}</div>
</Style>
</Wrapper>

)
}

export default AccentTitle;
