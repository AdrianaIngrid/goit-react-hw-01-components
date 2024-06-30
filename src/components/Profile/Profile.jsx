import user from './Profile/user.json';
import propTypes from 'prop-types';
import styles from './Profile.module.css';
function Profile() {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img
            src={user.avatar}
            alt={user.username}
            className={styles.avatar}
          />
          <p className={styles.name}>{user.username}</p>
          <p className={styles.tag}>{user.tag}</p>
          <p className={styles.location}>{user.location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.statsItem}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{user.stats.followers}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{user.stats.views}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
Profile.propTypes = {
  username: propTypes.string,
  tag: propTypes.string,
  location: propTypes.string,
  avatar: propTypes.string,
  stats: propTypes.object,
}
export default Profile;
