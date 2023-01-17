import { createContext, useState } from "react"
import { userListType } from "../types/companySetting";


type contextType = {
    users: userListType[] | undefined;
    setUser: (arg: userListType[] | undefined) => void
    deleteUser: (arg: number | undefined) => void
    updateUser: (arg: number, arg2: any) => void
    addUser: (arg: userListType) => void
}

export const UserContext = createContext<contextType>({
    users: [],
    setUser: (content: userListType[] | undefined) => { },
    deleteUser: (id: number | undefined) => { },
    updateUser: (id: number, content: any) => { },
    addUser: (content: userListType) => { }
});


function UserContextProvider({ children }: any) {
    const [userList, setUserList] = useState<userListType[] | undefined>()

    function setUser(content: userListType[] | undefined) {
        setUserList(content)
    }

    function addUser(content: userListType) {
        setUserList((list: userListType[] | undefined) => {
            list?.push(content);
            return list;
        })
    }

    function updateUser(id: number, content: any) {
    }

    function deleteUser(id: number | undefined) {
        const action = window.confirm("Do you really want to delete user ?");
        if (action) {
            setUserList((list: userListType[] | undefined) => {
                return list?.filter((user) => user.id !== id)
            })
        }
    }

    const value = {

        users: userList,
        setUser: setUser,
        addUser: addUser,
        deleteUser: deleteUser,
        updateUser: updateUser,
    }

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )

}

export default UserContextProvider