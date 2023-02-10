import React from "react";
import Nav from "./Nav";
import UserData from "./UserData";

export default function MainCom() {
  const [user, setUser] = React.useState([]);
  const [myId, setMyId] = React.useState();
  const [userData, setUserData] = React.useState([]);

  //Dropdown Api
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setUser(data));
  }, []);

  // Clicking on user getting id
  const showUserData = (e) => {
    const id = e.target.getAttribute("myid");
    setMyId(id);
  };

  // UserData Api
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + myId)
      .then((resp) => resp.json())
      .then((data) => setUserData(data));
  }, [myId]);

  return (
    <div>
      <Nav click={showUserData} allDtat={user} />
      <UserData uData={userData} />
    </div>
  );
}
