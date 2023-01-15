import React from 'react'
import { numToArray } from '../utils'

type propType = {
    totalPages: number
    page: number
    setPage: (arg: number) => void
}

const Pagination = (props: propType) => {

    const { totalPages, page, setPage } = props;
    const array = numToArray(totalPages)
    
    const setPagehandler = (index: number) => {
        setPage(index);
    }

    return (
        <div className='flex gap-[1px]'>
            {array.map((_, index: number) => <div className={`px-3 cursor-pointer ${page === index + 1 ? 'text-black' : 'text-slate-400'} hover:bg-slate-100 rounded-md`} onClick={() => { setPagehandler(index + 1) }}>{index + 1}</div>)}
        </div>
    )
}

export default Pagination