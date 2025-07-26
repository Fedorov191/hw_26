import type {HeroInfo} from "../utils/sw-types";

type Props = {
    friend: HeroInfo,
    onClick: () => void
}

const Friend: React.FC<Props> = ({friend, onClick}) => {

    return <img src={friend.img} alt={friend.name} onClick={() => onClick()}/>


};

export default Friend;