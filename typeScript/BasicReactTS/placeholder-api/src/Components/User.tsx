import { userType } from "./PostApp";

type Props = {
  user: userType[];
};

const User = (props: Props) => {
  return (
    <div>
      {props.user.map((user) => (
        <div className="user--box">
          <h3>{user.name}</h3>
          <h3>{user.username}</h3>
        </div>
      ))}
    </div>
  );
};

export default User;
