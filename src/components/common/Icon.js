import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  margin: 1rem;
  color: ${props => (props.colorNormal ? props.colorNormal : 'black')};
  cursor: pointer;

  &:hover {
    color: ${props => props.colorActive}
  }
`;

const Icon = ({ className, colorNormal, colorActive, href}) => {
  return <Wrapper className={className} colorNormal={colorNormal} colorActive={colorActive} href={href} aria-hidden="true" />;
};

export default Icon;
