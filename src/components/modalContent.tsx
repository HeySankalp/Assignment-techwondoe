import React, { useState } from 'react'
import { userListType } from '../types/companySetting';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';

type propType = {
    isEdit: boolean;
    setIsOpen: (arg: boolean) => void;
    setIsEdit: (arg: boolean) => void;
    setUserList: any
}

const ModalContent = (props: propType) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const { isEdit, setIsEdit, setIsOpen, setUserList } = props;

    const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>, identifier: string) => {
        if (identifier === 'name') {
            setName(e.target.value)
        } else {
            setRole(e.target.value)
        }
    }

    const onAddEditClick = () => {
        // if (isEdit) {
        //     console.log("mai edit krunga");

        // } else {
        //     const newUser = {
        //         "first_name": name,
        //         "role": role,
        //         "id":Math.random()
        //     }
        //     setUserList((list: userListType[]) => {
        //         return list.push(newUser);
        //     })
        //     setName('');
        //     setRole('');
        // }
    }

    return (
        <div className='m-3'>
            <h1>{isEdit ?
                '⚡ Edit User'
                : '⚡ Add New user'
            }</h1>
            <div className='flex flex-col gap-4 mt-2'>
                <input className='border-2 rounded-lg w-full p-2' placeholder='Username' type="text" name='name' value={name} onChange={(e) => { onInputHandler(e, 'name') }} />
                <input className='border-2 rounded-lg w-full p-2' placeholder='Role' type="text" name='role' value={role} onChange={(e) => { onInputHandler(e, 'role') }} />
            </div>
            <div className='mt-4 flex gap-2'>
                <ButtonSecondary text={'Cancel'} onClick={() => { setIsOpen(false); setIsEdit(false) }} />
                <ButtonPrimary text={isEdit ? 'Update' : 'Add User'} onClick={onAddEditClick} />
            </div>
        </div>
    )
}

export default ModalContent