import { useContext } from "react";
import { UserContext } from "../context/userContext";

export function useUserFun() {
    const cxt = useContext(UserContext);
    const { deleteUser, addUser, updateUser, setUser, users } = cxt;
    return { deleteUser, addUser, updateUser, users, setUser }
}
