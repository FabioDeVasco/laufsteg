import React from 'react';
import styled from 'styled-components';
import Icon from '../common/Icon';
import { Font, FONT_URL } from '../../utils';

const Wrapper = styled.a`
  display: flex;
	position: relative;
  flex-direction: column;
  color: white;
  font-size: 12pt;
  background-color: grey;
	align-items: center;
	text-align: center;
	justify-content: center;
  border: solid 3px;
  border-color: ${props => (props.colorNormal ? props.colorNormal : 'white')};
	margin-right: 1rem;
	flex-basis: 50%;
	font-size: .9rem;
	letter-spacing: 1px;
	font-weight: bold;
	font-family: ${Font.SECONDARY};

  &:hover {
    border-color: ${props => props.colorActive};
    .icon {
      color: ${props => props.colorActive};
      }
    }
  `;

const InfoCall = ({ className, colorNormal, colorActive, href }) => {
  return (
    <Wrapper colorNormal={colorNormal} colorActive={colorActive} href={href}>
      <Icon
        className={className}
        colorNormal={colorNormal}
        colorActive={colorActive}
        href={href}
        aria-hidden="true"
      />
      {' '}
      <div>+49 7131  20 31 881</div>
      {' '}
      <div>Innerhalb der Öffnungszeiten</div>
    </Wrapper>
  );
};

export default InfoCall;
