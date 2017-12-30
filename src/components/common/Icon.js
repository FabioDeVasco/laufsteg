import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.i`
  margin: 1rem;
  color: ${props => (props.colorNormal ? props.colorNormal : 'black')};
  cursor: pointer;

  &:hover {
    color: ${props => props.colorActive}
  }
`;

const Icon = ({ className, colorNormal, colorActive}) => {
  return <Wrapper className={className} colorNormal={colorNormal} colorActive={colorActive} aria-hidden="true" />;
};

export default Icon;
