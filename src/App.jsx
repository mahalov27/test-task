import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import UserList from "./components/UserList/UserList";
import RegistartionForm from "./components/RegistartionForm/RegistartionForm";
import Registered from "./components/Registered/Registered";
import { getToken } from "./service/getRequests";


const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const startFetch = async () => {
      await getToken()
    }
    startFetch();
  }, [])

  return (
    <>
      <Header />
      <main>
        <Title />
        <UserList isRegistered={isRegistered} />
        {!isRegistered ? (
          <RegistartionForm setRegistered={setIsRegistered} />
        ) : (
          <Registered />
        )}
      </main>
    </>
  );
};

export default App;
