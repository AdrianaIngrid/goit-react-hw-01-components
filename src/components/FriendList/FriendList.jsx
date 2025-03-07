import FriendListItem from './FriendListItem';
import propTypes from 'prop-types';
import styles from './FriendList.module.css';
function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(itemFriend => (
        <FriendListItem
          isOnline={itemFriend.isOnline}
          avatar={itemFriend.avatar}
          name={itemFriend.name}
          key={itemFriend.id}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
      id: propTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
export default FriendList;
