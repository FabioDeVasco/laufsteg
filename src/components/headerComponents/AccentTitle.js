import React, { Component } from 'react';
import styled from 'styled-components';
import { Font, FONT_URL } from '../../utils';





const Style = styled.div`
	font-size: 48pt;
	letter-spacing: 2px;
	color: white;
	position: absolute;
	top: 70%;
	left: 50%;
	transform: translateX(-50%);
	text-transform: none;
	font-family: ${Font.SECONDARY};
	font-style: italic;
`;


const AccentTitle = ({title}) => {

return (

<Style>{title}</Style>

)
}

export default AccentTitle;
