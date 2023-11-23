import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { UlFriendList } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <UlFriendList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </UlFriendList>
  );
}
