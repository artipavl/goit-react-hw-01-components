import { FriendListItem } from "components/friendListItem/FriendListItem";

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(frend => <FriendListItem key={frend.id}
                avatar={frend.avatar} name={frend.name} isOnline={frend.isOnline}
            />)}
        </ul>
    )
}