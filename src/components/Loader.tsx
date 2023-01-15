import React from 'react'
import {SiReact} from 'react-icons/si'

const Loader = () => {
    return (
        <div className="flex justify-center items-center mt-20">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden text-[50px]"><SiReact/></span>
            </div>
        </div>
    )
}

export default Loader