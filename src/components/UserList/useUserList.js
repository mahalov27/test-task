import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { getUserList } from "../../service/getRequests";

const useUserList = (isRegistered) => {
  const [userList, setUserList] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setPending(true);
      try {
        const response = await getUserList();
        setUserList(response.data.users);
        setCurrentPage(response.data.page);
      } catch (err) {
        toast.error(err.message, {
          toastId: "user list",
        });
      }
      setPending(false);
    };
    fetch();
  }, [isRegistered]);

  const getNextPage = async (e) => {
    e.preventDefault();
    setPending(true);
    try {
      const response = await getUserList(currentPage + 1);
      setCurrentPage(response.data.page);
      setUserList((prevState) => {
        return [...prevState, ...response.data.users];
      });
      if (currentPage + 1 === response.data.total_pages) {
        setLastPage(true);
      }
    } catch (err) {
      toast.error(err.message, {
        toastId: "next user list",
      });
    }
    setPending(false);
  };

  return {userList, lastPage, pending, getNextPage};
};

export default useUserList;
