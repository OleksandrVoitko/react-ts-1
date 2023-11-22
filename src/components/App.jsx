import { DivWrapper } from './App.styled';

import { Profile } from './Profile/Profile';
import user from '../data/user.json';

export const App = () => {
  return (
    <DivWrapper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </DivWrapper>
  );
};
