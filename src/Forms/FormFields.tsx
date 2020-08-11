import React from "react";

const Input: React.FC<PropsInputType> = ({name, idName, type, handleChange, value}) => {
    return (
        <div>
            <label htmlFor={idName}>{name}</label>
            <input
                id={idName}
                name={idName}
                type={type}
                onChange={handleChange}
                value={value}
            />
        </div>
    )
}

type PropsInputType = {
    name: string
    idName: string
    type:string
    handleChange: any
    value: string
}