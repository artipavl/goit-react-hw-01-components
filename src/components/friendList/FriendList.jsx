import { FriendListItem } from "components/friendListItem/FriendListItem";
import css from "components/friendList/FriendList.module.css";

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(frend => <FriendListItem key={frend.id}
                avatar={frend.avatar} name={frend.name} isOnline={frend.isOnline}
            />)}
        </ul>
    )
}