import React, { ReactElement } from 'react'

type proptype = {
    iconPlacing?: "left" | "right";
    text: string;
    icon?: ReactElement;
    onClick? : ()=>void
}

const ButtonSecondary = (props: proptype) => {

    const { iconPlacing, text, icon, onClick } = props


    return (
        <div className={`border-[2px] hover:bg-stone-100 rounded-lg text-[14px] shadow-md cursor-pointer ${iconPlacing === 'right' ? 'flex-row-reverse' : ''} flex w-fit justify-center items-center gap-2 px-3 py-[3px]`} onClick={onClick}>
            {
                icon &&
                <div>{icon}</div>
            }
            <span>{text}</span>
        </div>
    )
}

export default ButtonSecondary