import React from 'react';
import {Profile} from '@/src/data';
import styled from 'styled-components/native';

const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled.Image<{
  size: 'small' | 'medium';
}>`
  width: ${props => (props.size === 'small' ? 40 : 50)}px;
  height: ${props => (props.size === 'small' ? 40 : 50)}px;
  border-radius: ${props => (props.size === 'small' ? 20 : 25)}px;
`;

const ProfileTextContainer = styled.View`
  flex: 1;
  gap: 5px;
`;

const ProfileName = styled.Text<{
  size: 'small' | 'medium';
}>`
  font-weight: bold;
  font-size: ${props => (props.size === 'small' ? 12 : 14)}px;
`;

const ProfileIntroduction = styled.Text<{
  size: 'small' | 'medium';
}>`
  font-size: ${props => (props.size === 'small' ? 10 : 14)}px;
`;

interface MyProfileProps {
  Profile: Profile;
  size: 'small' | 'medium';
}

function MyProfile(props: MyProfileProps) {
  const {Profile, size} = props;

  return (
    <ProfileContainer>
      <ProfileImage size={size} source={{uri: Profile.uri}} />

      <ProfileTextContainer>
        <ProfileName size={size}>{Profile.name}</ProfileName>
        <ProfileIntroduction size={size}>
          {Profile.introduction}
        </ProfileIntroduction>
      </ProfileTextContainer>
    </ProfileContainer>
  );
}

export default MyProfile;
