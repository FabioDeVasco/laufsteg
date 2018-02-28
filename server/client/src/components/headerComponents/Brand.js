import React, { Component } from 'react';
import styled from 'styled-components';
import { Font, FONT_URL } from '../../utils';

const Style = styled.div`
	border-color: white;
	border: 2px solid ;
	border-radius: 4px;
	font-size: 18pt;
	letter-spacing: 4px;
	color: white;
	padding: 0.5rem 1rem 0.5rem 1rem;
	position: absolute;
	top: 8%;
	left: 50%;
	transform: translateX(-50%);


	@media (min-width: 480px) {
		border: 2px solid ;
		border-radius: 6px;
		font-size: 26pt;
		letter-spacing: 6px;
		padding: 0.75rem 1.5rem 0.75rem 1.5rem;
	}

	@media (min-width: 768px) {
		border: 3px solid ;
		border-radius: 8px;
		font-size: 30pt;
		letter-spacing: 8px;
		padding: 1rem 2rem 1rem 2rem;
	}

	@media (min-width: 992px) {
		border: 4px solid ;
		border-radius: 10px;
		font-size: 38pt;
		letter-spacing: 10px;
		padding: 1rem 2rem 1rem 2rem;
	}
`;

class Brand extends Component {
  render() {
return (

<Style>Laufsteg</Style>

)
}
}
export default Brand;
