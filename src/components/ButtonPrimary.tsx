import React, { ReactElement } from 'react'

type propType = {
  iconPlacing?: "left" | "right";
  text: string;
  icon?: ReactElement;
  onClick? : ()=>void
}

const ButtonPrimary = (props: propType) => {
  const { iconPlacing, text, icon, onClick } = props


  return (
    <div className={`border-[2px] hover:bg-blue-600 bg-blue-500 text-white shadow-md cursor-pointer  rounded-lg text-[14px] ${iconPlacing === 'right' ? 'flex-row-reverse' : ''} flex w-fit justify-center items-center gap-2 px-3 py-[3px]`} onClick={onClick}>
      {
        icon &&
        <div>{icon}</div>
      }
      <span>{text}</span>
    </div>
  )
}

export default ButtonPrimary