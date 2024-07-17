import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import UserInfo from './UserInfo';
import Followers from './Followers';
import backArrow from '../../assets/images/UsersPage/arrow_back_ios.svg';
import PinFeed from './PinFeed';
import Playlist from './Playlist';
const UserSideSection = () => {
  const [selectedMenu, setSelectedMenu] = useState('pinFeed');
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <SideComponent>
      <SideBar></SideBar>
      <SideBox>
        <ContentBox>
          <BackBtn src={backArrow} onClick={handleBackClick} />
        </ContentBox>
        <ContentBox>
          {/* 글자 크기 24px로 바꿔야 함  */}
          <UserInfo />
          <Followers />
        </ContentBox>
        <ContentBox>
          <MenuBox>
            <MenuText isSelected={selectedMenu === 'pinFeed'} onClick={() => setSelectedMenu('pinFeed')}>
              핀 피드
            </MenuText>
            <MenuText isSelected={selectedMenu === 'playlist'} onClick={() => setSelectedMenu('playlist')}>
              플레이리스트
            </MenuText>
          </MenuBox>
        </ContentBox>
        <Line />
        <FeedBox>{selectedMenu === 'pinFeed' ? <PinFeed /> : <Playlist />}</FeedBox>
      </SideBox>
    </SideComponent>
  );
};

export default UserSideSection;

const SideComponent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 608px;
`;

const SideBar = styled.div`
  width: 80px;
  border-right: 1px solid var(--gray, #bcbcbc);
`;

const SideBox = styled.div`
  width: 528px;
  border-right: 1px solid var(--gray, #bcbcbc);
  /* padding: 33px; */
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-left: 33px;
  padding-right: 33px;
  padding-top: 40px;

  align-items: center;
`;

const BackBtn = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;
`;

const MenuText = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 28px;
  padding-bottom: 9px;
  padding-left: 7px;
  padding-right: 7px;
  cursor: pointer;
  border-bottom: ${(props) => (props.isSelected ? '3px solid var(--light_black, #232323)' : 'none')};
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const Line = styled.div`
  width: 528px;
  height: 1px;
  background: var(--gray, #bcbcbc);
`;

const FeedBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-left: 33px;
  padding-right: 33px;
  padding-top: 25px;

  align-items: center;
`;