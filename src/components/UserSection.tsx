
import { FiDownloadCloud, FiEdit2 } from 'react-icons/fi'
import { BiPlus } from 'react-icons/bi'
import { useQuery } from 'react-query'
import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Content } from '../content'
import Badge from './Badge'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import Pagination from './Pagination'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import DialogModal from './DialogModal'
import { fetchUser } from '../api/getUsers'
import Loader from './Loader'
import { responseType, userListType } from '../types/companySetting'
import ModalContent from './modalContent'
import { UserContext } from '../context/userContext'
import { useUserFun } from '../hooks/Useuserdata'



const UserSection = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isEdit, setIsEdit] = useState(false);
    const [targatedId, setTargatedId] = useState<number | undefined>(0);

    const { deleteUser, setUser, users: userList } = useUserFun()
    const [totalPage, setTotalPages] = useState(0);
    // const [userList, setUserList] = useState<userListType[] | any>();
    const [page, setPage] = useState(1)
    const { userSection } = Content

    // api call using useQuery
    const { isLoading, isError, error, data: userData } = useQuery<any>(['userData', page], () => fetchUser(page))

    useEffect(() => {
        if (userData) {
            setUser(userData?.data.data);
            setTotalPages(userData?.data.total_pages)
        }
    }, [isLoading, page])

    // configration to change dailogue box content 
    const AddEditHandler = (event: string) => {
        if (event === 'edit') {
            setIsEdit(true)
            setIsOpen(true)
        } else {
            setIsOpen(true)
        }
    }

    // listing the user of the next and previous page
    const nextPrevhandler = (key: string) => {
        if (key === 'next') {
            if (totalPage === page) {
                return;
            } else {
                setPage(page + 1);
            }
        } else {
            if (page === 1) {
                return;
            } else {
                setPage(page - 1)
            }
        }
    }


    const deleteUserHandler = (id: number | undefined) => {
        deleteUser(id)
    }


    const TopView = () => {
        return (
            <>
                <div className='flex items-center p-4 justify-between border-b-2'>
                    <div>
                        <div className='flex items-center'>
                            <h2 className='font-medium text-xl mr-2'>{userSection.title}</h2>
                            <Badge bgColor='bg-green-200' textColor='text-green-600' content={userData?.data?.total + ' Users'} />
                        </div>
                        <h3 className='text-sm text-slate-500'  >{userSection.subHeading}</h3>
                    </div>
                    <div className='flex items-center gap-1'>
                        <ButtonSecondary icon={<FiDownloadCloud />} text={'Download CSV'} />
                        <ButtonPrimary icon={<BiPlus />} onClick={() => { AddEditHandler('add'); setIsEdit(false) }} text="Add User" />
                    </div>
                </div>
            </>
        )
    }

    const UserList = () => {
        return (
            <div className='py-1'>
                <DialogModal isOpen={isOpen} setIsOpen={setIsOpen}  >
                    <ModalContent
                        targatedId={targatedId}
                        isEdit={isEdit}
                        setIsOpen={setIsOpen}
                        setIsEdit={setIsEdit} />
                </DialogModal>
                <table className='w-full [&>*:nth-child(even)]:bg-gray-100 '>
                    <tr className='text-left text-slate-500 text-sm '>
                        <th className='w-[50%] py-2'><span className='flex items-center gap-1 pl-3'>Name<AiOutlineArrowDown /></span></th>
                        <th className='py-2 '><span className='flex items-center gap-1'>Status<AiOutlineArrowDown /></span></th>
                        <th className='py-2'><span className='flex items-center gap-1'>Role<AiOutlineArrowDown /></span></th>
                        <th className='py-2'><span className='flex items-center gap-1'>Last Login<AiOutlineArrowDown /></span></th>
                        <th className='py-2'></th>
                    </tr>
                    {userList?.map((user: userListType, index: any) => <tr key={index} className='border-b-2'>
                        <td className='w-[50%] pl-3 py-2 flex items-center'>
                            <div className='w-[30px] h-[30px] mr-2 rounded-full overflow-hidden'><img className='w-full h-full bg-cover' src={user.avatar ? user.avatar : 'https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000'} alt="img" /></div>
                            <div className='text-[11px]'>
                                <div>{user?.first_name}</div>
                                <div className='text-slate-500'>{user?.first_name}@techwondoe.com</div>
                            </div>
                        </td>
                        <td className='py-2'>
                            <Badge content='● Active' textColor={'text-green-600'} bgColor={'bg-green-100'} />
                        </td>
                        <td className='py-2 text-[12px] text-slate-500 font-medium'>
                            {user?.role ?? 'Assign role'}
                        </td>
                        <td className='py-2 text-slate-500'>
                            date/time
                        </td>
                        <td className='py-2'>
                            <div className='flex gap-2 items-center justify-center text-slate-600 text-sm'>
                                <div className='p-2 hover:bg-slate-200 rounded-full' onClick={() => { deleteUserHandler(user.id) }} >
                                    <RiDeleteBin6Line className='cursor-pointer' />
                                </div>
                                <div className='p-2 hover:bg-slate-200 rounded-full' onClick={() => { AddEditHandler('edit'); setTargatedId(user.id) }} >
                                    <FiEdit2 className='cursor-pointer' />
                                </div>
                            </div>
                        </td>
                    </tr>)}
                </table>
            </div>
        )
    }

    const BottomView = () => {
        return (
            <div className='py-3 px-4 flex justify-between'>
                <div><ButtonSecondary icon={<AiOutlineArrowLeft />} iconPlacing='left' text={'Previous'} onClick={() => { nextPrevhandler('prev') }} /></div>
                <Pagination page={page} totalPages={totalPage} setPage={setPage} />
                <div><ButtonSecondary text={'Next'} icon={<AiOutlineArrowRight />} iconPlacing='right' onClick={() => { nextPrevhandler('next') }} /></div>
            </div>
        )
    }
    if (isLoading) {
        return <Loader />
    }
    return (
        <div className='bg-white mt-5 shadow-md overflow-hidden rounded-xl'>
            <TopView />
            <UserList />
            <BottomView />
        </div>
    )
}

export default UserSection