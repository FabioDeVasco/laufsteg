import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.i`
  margin: 1rem;
  color: ${props => (props.color ? props.color : 'black')};
`;

const Icon = ({ className, color }) => {
  return <Wrapper className={className} color={color} aria-hidden="true" />;
};

export default Icon;
