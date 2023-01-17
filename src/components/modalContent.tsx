import React, { useState } from 'react'
import { useUserFun } from '../hooks/Useuserdata';
import { userListType } from '../types/companySetting';
import { create_UUID } from '../utils';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';

type propType = {
    isEdit: boolean;
    setIsOpen: (arg: boolean) => void;
    setIsEdit: (arg: boolean) => void;
    targatedId: number | undefined;
}

const ModalContent = (props: propType) => {
    const { addUser, updateUser } = useUserFun()
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const { isEdit, setIsEdit, setIsOpen } = props;

    const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>, identifier: string) => {
        if (identifier === 'name') {
            setName(e.target.value)
        } else {
            setRole(e.target.value)
        }
    }

    const onAddEditClick = () => {
        if (isEdit) {
            setIsOpen(false);
            setName('');
            setRole(''); 
        } else {
            const newUser = {
                "first_name": name,
                "role": role,
                "id": new Date().getTime()
            }
            addUser(newUser)
            setIsOpen(false);
            setName('');
            setRole('');
        }
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