import React, { Component } from 'react';
import styled from 'styled-components';

// import { Color } from '../utils';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	background-color: #606060


`;

const Titel = styled.div`
	font-size: 24pt;
	color: white;


`;


class Header extends Component {
	render() {
		return (
			<Wrapper>
				<Titel> DAMENBEKLEIDUNG/ TASCHEN/ ACCESSOIRES </Titel>
			</Wrapper>
		);
	}
}

export default Header;
