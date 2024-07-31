import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import pinImage from '../../assets/images/UsersPage/library_music.svg';
import Playlist from '../PlaylistPage/Playlist';

const PlaylistFeed = () => {
  const navigate = useNavigate();

  const handlePlaylistClick = (id) => {
    navigate(`/playlist/${id}`);
  };
  return (
    <PlaylistFeedContainer>
      <PinBox>
        <PinImg src={pinImage} alt="핀이미지" />
        <PinNum>50</PinNum>
      </PinBox>
      <PlaylistContainer>
          <Playlist onClick={() => handlePlaylistClick(1)} />
          <Playlist onClick={() => handlePlaylistClick(2)} />
          <Playlist onClick={() => handlePlaylistClick(3)} />
        </PlaylistContainer>
    </PlaylistFeedContainer>
  );
};

export default PlaylistFeed;

const PlaylistFeedContainer = styled.div`
display:flex;
flex-direction:column;
`;

const PinBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 22px;
  margin-left: 34px;
  align-items: center;
`;

const PinImg = styled.img`
  width: 30px;
  height: 30px;
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

const PlaylistContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px 20px 70px 20px;
`;