import css from 'components/friendListItem/FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item} >
      <span className={css.status} style={
        isOnline ? {background: "green"} : {background: "red"}
      }
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
