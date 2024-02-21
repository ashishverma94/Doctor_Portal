import React from 'react'
import { IoAlarm } from 'react-icons/io5'

const PatientsTime = ({ name = "Mark Louis", startTime = "08:00", endTime = "09:00", img = "", bgcolor = "#F5E5E5", margin = "4rem", breakTime = false }) => {
    if (breakTime) {
        return <div className='h-[20%] w-[95%]  m-1 flex justify-center'>
            <div className='text-white  text-sm flex items-center'>
                <h1>{startTime} Am</h1>
            </div>
            <div className='w-[80%] relative   flex justify-center '>
                <hr style={{ position: "absolute", top: "50%", border: "dashed 1px white", width: "22rem" }} ></hr>
                <div className=' bg-[#111729] mt-[3%] py-1 text-white text-[11px] z-10  h-[50%] w-[25%] flex justify-center items-center rounded-2xl'
                >
                    Break Time
                </div>
            </div>
        </div>
    }

    return (
        <div className='h-[20%] w-[95%]  m-1 flex justify-center'>
            <div className='text-white  text-sm flex items-center'>
                <h1>{startTime} Am</h1>
            </div>
            <div className='w-[80%] relative   flex justify-center '>
                <hr style={{ position: "absolute", top: "50%", border: "dashed 1px white", width: "22rem" }} ></hr>
                <div className=' z-10 h-full w-[50%] flex justify-between items-center rounded-2xl'
                    style={{ backgroundColor: bgcolor, marginLeft: margin }}>
                    <div className=' h-[2rem] w-[2rem] border border-black ml-2 bg-yellow-400 rounded-full'>

                    </div>
                    <div className='pr-6'>
                        <div className='font-bold text-[0.9rem]'>{name}</div>
                        <h1 className=' text-[10px] flex gap-1 items-center'> <IoAlarm /> {startTime}-{endTime} Am</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientsTime