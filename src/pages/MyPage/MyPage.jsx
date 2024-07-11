import React, { useState } from 'react';
import styled from 'styled-components';
//import PinFeedPage from '../../components/MyPage/PinFeedPage';
import MyInfoTop from '../../components/MyPage/MyInfoTop';
import PinFeed from '../../components/MyPage/PinFeed';
import MyPlaylists from '../../components/MyPage/MyPlaylists';
import Bookmarks from '../../components/MyPage/Bookmarks';

const MyPage = () => {
  const [clickedPage, setClickedPage] = useState('pinfeed');

  const handlePageClick = (page) => {
    setClickedPage(page);
  };

  return (
    <SideComponent>
      <SideBar></SideBar>
      <SideBox>
        <Content>
          <MyInfoTop />
          <TopBar>
            <PageSelect>
              <PageItem onClick={() => handlePageClick('pinfeed')} isActive={clickedPage === 'pinfeed'}>
                핀 피드
              </PageItem>
              <PageItem onClick={() => handlePageClick('playlist')} isActive={clickedPage === 'playlist'}>
                플레이리스트
              </PageItem>
              <PageItem onClick={() => handlePageClick('bookmark')} isActive={clickedPage === 'bookmark'}>
                북마크
              </PageItem>
            </PageSelect>
            <Line />
          </TopBar>
          {clickedPage === 'pinfeed' && <PinFeed />}
          {clickedPage === 'playlist' && <MyPlaylists />}
          {clickedPage === 'bookmark' && <Bookmarks />}
        </Content>
      </SideBox>
    </SideComponent>
  );
};

export default MyPage;

const SideComponent = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

const SideBar = styled.div`
  width: 80px;
  border-right: 1px solid var(--gray, #bcbcbc);
`;

const SideBox = styled.div`
  width: 528px;
  border-right: 1px solid var(--gray, #bcbcbc);
  flex-shrink: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageSelect = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
  padding-left: 41px;
`;

const PageItem = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  padding: 6px;
  padding-bottom: 9px;
  ${(props) => props.isActive && 'border-bottom: 3px solid var(--light_black, #232323);'}
`;

const Line = styled.div`
  width: 528px;
  flex-shrink: 0;
  border-bottom: 1px solid var(--gray, #bcbcbc);
`;
