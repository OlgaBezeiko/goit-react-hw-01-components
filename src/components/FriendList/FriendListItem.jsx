import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <li className={style.item}>
        <span className={isOnline ? style.onLine : style.offLine}>
        </span>
        <img
          className={style.avatar}
          src={avatar}
          alt="Avatar"
          width="50"
        />
        <p className={style.name}>{name}</p>
      </li>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};