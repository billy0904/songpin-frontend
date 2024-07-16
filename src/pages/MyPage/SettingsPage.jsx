import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SideSection from '../../components/common/SideSection';
import backIcon from '../../assets/images/MusicSearchPage/arrow_back.svg';
import userLogoPop from '../../assets/images/MyPage/user-logo-pop.svg'; //임시 유저 프로필

const SettingsPage = () => {
  const navigate = useNavigate();
  const goMyPage = () => {
    navigate('/mypage');
  };
  const goEditPage = () => {
    navigate('/edit');
  };

  return (
    <SideSection>
      <SettingComponent>
        <BackIcon src={backIcon} onClick={goMyPage} />
        <UserInfoBox>
          <UserInformation>
            <UserLogo src={userLogoPop} alt="User logo pop" />
            <UserNameBox>
              <UserName>송핀</UserName>
              <UserMail>songpin@gmail.com</UserMail>
            </UserNameBox>
          </UserInformation>
          <ProfileEditBtn onClick={goEditPage}>프로필 편집</ProfileEditBtn>
        </UserInfoBox>
        <ClickBtnsSection>
          <Button>비밀번호 재설정</Button>
          <Button>로그아웃</Button>
          <Button>회원탈퇴</Button>
        </ClickBtnsSection>
      </SettingComponent>
    </SideSection>
  );
};

export default SettingsPage;

const SettingComponent = styled.div`
  padding: 40px 34px 0 43px;
  /* padding-top: 36px; */
  display: flex;
  flex-direction: column;
`;

const BackIcon = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;
`;

const UserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 31px;
`;

const UserInformation = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserLogo = styled.img`
  width: 60px;
  height: 60px;
  padding-right: 32px;
`;

const UserNameBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const UserName = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const UserMail = styled.div`
  color: var(--gray02, #747474);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const ProfileEditBtn = styled.div`
  color: var(--gray03, #5f5f5f);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  cursor: pointer;
`;

const ClickBtnsSection = styled.div`
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const Button = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  cursor: pointer;
`;
