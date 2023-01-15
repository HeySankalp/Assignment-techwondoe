import React from 'react'

type propType = {
    content: string;
    textColor: string;
    bgColor : string
}

const Badge = (props: propType) => {
    const { textColor, content , bgColor } = props

    return (
        <span
            className={`${textColor} ${bgColor} text-[10px] px-2 py-[1.5px] rounded-full font-medium`}
        >{content}</span>
    )
}

export default Badge