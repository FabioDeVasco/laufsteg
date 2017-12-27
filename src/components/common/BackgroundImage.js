import React, { Component } from 'react';
import styled from 'styled-components';

const Image = styled.div`
  background-color: yellow;
  background-image: url(${require('../../assets/images/Facebookpic.png')});
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
  width: 600px;
  height: 500px;
`;

const BackgroundImage = ({ url }) => {
  return <Image />;
};

export default BackgroundImage;
