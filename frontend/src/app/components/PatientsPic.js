import React from 'react'

const PatientsPic = ({ pic1, pic2, pic3, num }) => {
    return (
        <div className='relative flex h-10 w-40 '>
            <div className='h-10 w-10 bg-red-400 absolute rounded-full'>

            </div>
            <div className='h-10 w-10 bg-green-600 absolute ml-[26px]  rounded-full'>

            </div>
            <div className='h-10 w-10 bg-blue-600 absolute ml-[54px] rounded-full'>

            </div>
            <div className='h-10 w-10 bg-white absolute ml-[78px] rounded-full font-bold flex justify-center items-center'>
                {num}+
            </div>
        </div>
    )
}

export default PatientsPic