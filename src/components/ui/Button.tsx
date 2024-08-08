
import React from 'react';

interface ButtonProps{
    children:React.ReactNode
}
const Button:React.FC<ButtonProps>= ({children}:ButtonProps) => {
    return (
        <button className='px-14 py-2 bg-[#111827] rounded-full text-gray-50 hover:bg-opacity-85 duration-300 hover:duration-300 hover:scale-105'>
           {children}
        </button>
    );
};

export default React.memo(Button);