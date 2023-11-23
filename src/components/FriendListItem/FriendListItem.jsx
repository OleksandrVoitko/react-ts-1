import { LiItem, SpanStatus, ImgAvatar, PName } from './FriendListItem.styled';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <LiItem>
      <SpanStatus style={{ backgroundColor: isOnline ? 'green' : 'red' }} />
      <ImgAvatar src={avatar} alt="User avatar" width="48" />
      <PName>{name}</PName>
    </LiItem>
  );
}
