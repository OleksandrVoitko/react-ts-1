import { DivWrapper, DivSection } from './App.styled';
import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <DivWrapper>
      <DivSection>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </DivSection>
      <DivSection>
        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> */}
      </DivSection>
      <DivSection>
        <FriendList friends={friends} />
      </DivSection>
    </DivWrapper>
  );
};
