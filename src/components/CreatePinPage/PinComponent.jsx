import React, { useState } from 'react';
import styled from 'styled-components';
import pinImage from '../../assets/images/MusicSearchPage/Rectangle 217.png';

const PinComponent = ({ onPinClick }) => {

  return (
    <PinBox onClick={onPinClick}>
      <PinImg src={pinImage} alt="앨범 이미지" />
      <TextBox>
        <PinTitle>
          <TitleText>사랑</TitleText>
        </PinTitle>
        <PinSinger>임재범</PinSinger>
      </TextBox>
    </PinBox>
  );
};

export default PinComponent;

const PinBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 462px;
  height: 100px;
  border-radius: 8px;
  background: var(--offwhite, #efefef);
  cursor: pointer;
  margin-bottom: 12px;
  &:active {
    border-radius: 8px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), var(--offwhite, #efefef);
  }
`;

const PinImg = styled.img`
  width: 78px;
  height: 78px;
  padding: 11px;
  padding-left: 12px;
  border-radius: 4px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 15px 10px 29px;
  width: 100%;
`;

const PinTitle = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 4px;
  align-items: center;
`;

const TitleText = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const PinSinger = styled.div`
  color: var(--gray02, #747474);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;