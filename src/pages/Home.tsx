import React from 'react'
import CategoryMapper from '../components/CategoryMapper'
import UserSection from '../components/UserSection'
import { Content } from '../content'

const Home = () => {

    const { topHeading, itemCategory } = Content;

    return (
        <div className='w-full h-[100vh] bg-slate-50 p-[20px]'>
            <h1 className='text-[30px] font-medium '>{topHeading}</h1>
            <CategoryMapper itemCategory={itemCategory}/>
            <UserSection/>
        </div>
    )
}

export default Home