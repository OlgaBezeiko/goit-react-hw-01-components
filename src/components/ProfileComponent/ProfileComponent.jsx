import CreateUsersProfile from '..Profile';
import user from '../../Data/user.json';

const ProfileComponent = () => {
  return (
    <div>
      <CreateUsersProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};

export default ProfileComponent;




