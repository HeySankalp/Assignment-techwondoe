import React from 'react'

type propType = {
    itemCategory: string[]
}

const CategoryMapper = (props: propType) => {

    const { itemCategory } = props

    return (
        <div className='flex border-2 w-fit rounded-lg bg-white mt-5 shadow-md'>
            {
                itemCategory.map(items => <div className='border-r-2 px-[10px] last:border-0 pb-[4px] pt-[2px] hover:bg-slate-100 cursor-pointer'>{items}</div>)
            }
        </div>
    )
}

export default CategoryMapper