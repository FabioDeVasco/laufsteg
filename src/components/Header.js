import React, { Component } from 'react';
import styled from 'styled-components';

// import { Color } from '../utils';

const Wrapper = styled.div`
	font-size: 24pt;
	color: #FFFFFF;
`;

class Header extends Component {
	render() {
		return (
			<Wrapper>Laufsteg</Wrapper>
		);
	}
}

export default Header;