import React from 'react'

const Chat = () => {
    return (
        <div className='flex gap-1 '>
            <div className='h-[2rem] w-[2rem] bg-red-500 rounded-full'>

            </div>
            <div>
                <div className=' max-w-[14rem] px-3 py-1  bg-[#F1F1F1] rounded-2xl'>
                    <p className='text-[12px] font-semibold'>hello doctor i have headache in my stomach</p>
                </div>
                <div>
                    <p className='text-[10px] w-full mt-1 flex justify-end font-semibold text-white'>Tue 02:32pm</p>
                </div>
            </div>
        </div>
    )
}

export default Chat