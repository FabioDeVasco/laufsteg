import React, { Component } from 'react';
import styled from 'styled-components';
import { Font, FONT_URL } from '../../utils';

const Style = styled.div`
	border-color: white;
	border: 4px solid ;
	border-radius: 10px;
	font-size: 38pt;
	letter-spacing: 10px;
	color: white;
	padding: 1rem 2rem 1rem 2rem;
	position: absolute;
	top: 8%;
	left: 50%;
	transform: translateX(-50%);
`;

class Brand extends Component {
  render() {
return (

<Style>Laufsteg</Style>

)
}
}
export default Brand;
