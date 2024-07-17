import React from 'react';
import styled from 'styled-components';
import PinComponent from './PinComponent';
import pinImage from '../../assets/images/MusicSearchPage/spark_122.svg';

const PinFeed = () => {
  return (
    <div>
      <PinBox>
        <PinImg src={pinImage} alt="핀이미지" />
        <PinNum>9999</PinNum>
      </PinBox>
      <PinComponent />
      <PinComponent />
    </div>
  );
};

export default PinFeed;

const PinBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 37px;
  align-items: center;
`;

const PinImg = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  opacity: 0.8;
  margin-left: 9px;
`;

const PinNum = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 8px;
`;