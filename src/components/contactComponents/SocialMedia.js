import React from 'react';
import styled from 'styled-components';
import Icon from '../common/Icon';

const Wrapper = styled.a`
display: flex;
position: relative;
flex-basis: 50%;
z-index: 1;
background-color: black;
align-items: center;
justify-content: center;
border: solid 3px;
border-color: ${props => (props.colorNormal ? props.colorNormal : 'white')};
margin-right: 1rem;
margin-bottom: 1rem;
cursor: pointer;

&:hover {
  border-color: ${props => props.colorActive};
  .icon {
    color: ${props => props.colorActive};
  }
}

&::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
	background-size: cover;
	background-image: url(${props => props.image});
	filter: blur(0.3px);
	opacity: 0.75;
}

`;

const SocialMedia = ({ className, colorNormal, colorActive, href, image }) => {
  return (
    <Wrapper
      colorNormal={colorNormal}
      colorActive={colorActive}
      href={href}
      image={image}
    >
      <Icon
        className={className}
        colorNormal={colorNormal}
        colorActive={colorActive}
        href={href}
        aria-hidden="true"
      />
    </Wrapper>
  );
};

export default SocialMedia;
