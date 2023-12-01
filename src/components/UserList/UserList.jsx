import useUserList from "./useUserList";
import CustumButton from "../CustumButton/CustumButton";
import imgCover from "../../assets/photo-cover.svg";
import Spiner from "../Spiner/Spiner";
import styles from "./UserList.module.scss";

// eslint-disable-next-line react/prop-types
const UserList = ({ isRegistered }) => {
  const { userList, lastPage, pending, getNextPage } =
    useUserList(isRegistered);

  const imgError = (e) => {
    e.target.src = imgCover;
  };

  return (
    <section id="users" className={styles.section}>
      <h1>Working with GET request</h1>
      <ul>
        {userList &&
          userList.map((user) => {
            return (
              <li key={user.id}>
                <img
                  src={user.photo}
                  alt={`photo ${user.name}`}
                  onError={imgError}
                />
                <h2>{user.name}</h2>
                <div>
                  <p>{user.position}</p>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                </div>
              </li>
            );
          })}
      </ul>
      {lastPage ||
        (!pending && (
          <CustumButton onClick={getNextPage}>Show more</CustumButton>
        ))}
      {pending && <Spiner />}
    </section>
  );
};

export default UserList;
