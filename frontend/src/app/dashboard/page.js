import PatientsPic from '../components/PatientsPic';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PatientsTime from '../components/PatientsTime';
import { patientsData, chatting } from '../data/data.js'
import { TbHome } from "react-icons/tb";
import { LuNewspaper, LuAlarmClock, LuBell, LuSend } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";
import { BsChatText, BsThreeDots } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { IoSearchOutline, IoAlarm, IoCall, IoMicOutline } from "react-icons/io5";
import { FaArrowTrendUp, FaArrowRightLong, FaChevronDown } from "react-icons/fa6";
import { PiBellFill } from "react-icons/pi";

const page = () => {
    return (
        <div className=' w-full h-screen bg-[#111729] md:flex'>
            {/* sidebar  */}
            <div className=' ml-8 my-8 relative  md:w-14'>
                {/* fire  */}
                <div className=" h-14 my-4 flex ">
                    <WhatshotIcon fontSize='medium' style={{ color: "skyblue", height: "2rem", width: "3rem" }} />
                </div>
                {/* icons  */}
                <div className="  h-[40%]  mt-14 flex flex-col  justify-between">
                    <TbHome fontSize='medium' style={{ margin: "auto", color: "white", height: "2rem", width: "1.5rem" }} />
                    <LuNewspaper fontSize='medium' style={{ margin: "auto", color: "white", height: "2rem", width: "1.5rem" }} />
                    <FiPieChart fontSize='medium' style={{ margin: "auto", color: "white", height: "2rem", width: "1.5rem" }} />
                    <BsChatText fontSize='medium' style={{ margin: "auto", color: "white", height: "2rem", width: "1.5rem" }} />
                    <AiOutlineSetting fontSize='medium' style={{ margin: "auto", color: "white", height: "2rem", width: "1.5rem" }} />
                </div>
                {/* logout */}
                <div className=" h-[15%] flex flex-col absolute inset-x-0 bottom-0">
                    <div className='h-[50%] w-[100%] bg-red-400 rounded-full'>

                    </div>
                    <IoMdLogOut fontSize='medium' style={{ margin: "auto", color: "white", height: "2rem", width: "1.5rem" }} />

                </div>
            </div>
            {/* right  */}
            <div className='flex m-6  md:w-full rounded-3xl bg-[#151C39]  '>
                <div className=' md:ml-8  my-8 lg:w-2/3  rounded-2xl'>
                    {/* search bar  */}
                    <div className=' h-[12%] flex gap-4'>
                        {/* search bar text  */}
                        <div className=' w-[25%]'>
                            <h1 className=' text-2xl  text-white'>Hello,</h1>
                            <h1 className=' text-3xl font-bold text-white'>Dr. Colter! ✋</h1>
                        </div>
                        {/* search bar  */}
                        <div className=' flex w-[75%] h-[80%] gap-4'>
                            {/* input  */}
                            <div className='flex w-[90%] bg-[#2C3A58] rounded-2xl p-2'>
                                <IoSearchOutline fontSize='medium' style={{ margin: "auto", color: "white", height: "80%", width: "3rem" }} />
                                <input placeholder='Search' className='w-full outline-none bg-transparent h-full rounded-2xl mx-4 placeholder:text-2xl text-2xl hover:outline-none text-white' />
                            </div>
                            {/* bell  */}
                            <div className='w-[9%] bg-[#409BEE] rounded-2xl relative'>
                                <div className='h-[15%] w-[15%] bg-red-700 absolute top-1/3 left-[50%] rounded-full'></div>
                                <LuBell fontSize='medium' style={{ margin: "auto", display: "flex", justifyContent: "center", marginTop: "0.5rem", color: "white", height: "80%", width: "2rem" }} />
                            </div>
                        </div>

                    </div>
                    {/* div 1  */}
                    <div className=' h-[38%] md:flex gap-4'>
                        {/* left  */}
                        <div className='w-[50%] md:flex flex-col gap-4'>
                            {/* top  */}
                            <div className='h-[50%] bg-[#1B2C4F] rounded-3xl flex'>
                                <div className='w-[70%] h-full text-white'>
                                    <h1 className=' font-bold text-4xl pl-6 pt-4'>42</h1>
                                    <h2 className=' font-semibold pl-6'>Patients Visited</h2>
                                    <h4 className='pl-6 font-light text-sm'>This month</h4>
                                </div>
                                <div className='w-[30%] h-full bg-[#2C3A58] flex justify-center items-center rounded-r-3xl'>
                                    <div className='w-[40%] h-[70%] bg-[#409BEE] flex flex-col m-auto  rounded-3xl'>
                                        <div className='w-full h-[35%] bg-[#2f487b] rounded-t-3xl '>                                        </div>
                                        <FaArrowTrendUp className='text-white  m-auto text-sm font-bold' />
                                        <div className='text-white flex justify-center text-xs mb-3 font-semibold'>70%</div>
                                    </div>
                                </div>
                            </div>
                            {/* bottom  */}
                            <div className='h-[50%] bg-[#1B2C4F] rounded-3xl'>
                                <div className='h-[15%] mt-3 flex w-full'>

                                    <div className='px-3 mx-3  bg-[#409BEE] rounded-xl'>
                                        <FaArrowRightLong />
                                    </div>
                                    <h2 className=' flex items-center text-white'>Upcoming Events</h2>

                                </div>
                                <div className='h-[85%] flex w-full '>
                                    <div className='h-full w-[50%] flex justify-center items-center'>
                                        <div className='h-[50px] w-[50px] bg-red-400 rounded-full'>
                                            {/* image  */}
                                        </div>
                                    </div>
                                    <div className='h-full ml-9 w-[70%] text-white '>
                                        <h1 className='font-bold'>Aliza Shah</h1>
                                        <h1 className=' text-[10px] flex gap-2'> <IoAlarm /> 08:00-09:00 Am</h1>
                                        <span className=' text-[12px] bg-[#2C3A58] rounded-xl px-2 py-1 font-light'>
                                            Visited 7 days ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right  */}
                        <div className='w-[50%] bg-[#1B2C4F] rounded-3xl'>
                            <div className='w-full flex items-center justify-between h-[30%] px-4 py-5 '>
                                {/* heading  */}
                                <div className='text-white'>
                                    <h1 className='font-semibold text-[30px]'>Statistics</h1>
                                    <h1 className='text-[12px] p-0'>November 2023</h1>
                                </div>
                                {/* dropdown  */}
                                <div>
                                    <select className=' bg-[#1B2C4F] py-2 px-2 text-white outline-none rounded-full border border-sky-500' name="monthly" id="cars">
                                        <option value="monthly">monthly</option>
                                        <option value="yearly">yearly</option>
                                        <option value="mercedes">weekly</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* div 2 */}
                    <div className=' h-[50%] gap-4  flex'>
                        {/* patients */}
                        <div className='w-[60%] mt-2  '>
                            <h1 className=" text-white my-2 text-2xl font-bold"> Active Patients</h1>
                            <div className=' bg-[#1B2C4F] flex flex-col  h-[85%] p-3  rounded-3xl'>
                                {
                                    patientsData.map((person) => {
                                        return (
                                            <PatientsTime
                                                name={person?.name}
                                                startTime={person?.startTime}
                                                endTime={person?.endTime}
                                                img=""
                                                bgcolor={person?.bgcolor}
                                                margin={person?.margin}
                                                breakTime={person?.breakTime}
                                            />
                                        )
                                    })
                                }

                            </div>

                        </div>
                        {/* events  */}
                        <div className='w-[40%] mt-2'>
                            <h1 className=" text-white my-2 text-2xl font-bold"> Upcoming Events</h1>
                            <div className='  h-[85%] rounded-3xl flex flex-col gap-4'>
                                {/* top  */}
                                <div className="h-[50%] bg-[#1B2C4F] rounded-3xl">
                                    <div className='h-[50%] flex justify-between text-white w-full '>
                                        <div className='ml-8 py-2'>
                                            <h1 className=' font-bold'>Team Meeting</h1>
                                            <h3 className='flex text-[12px] items-center'><LuAlarmClock /> 05:00-06:00 Am</h3>
                                        </div>
                                        <div>
                                            <div className=' flex justify-center items-center mt-2 mr-3 h-[50px] w-[50px] bg-[#2C3A58] rounded-2xl relative'>
                                                <PiBellFill textColor='#409BEE' fontSize='small' style={{ margin: "auto", display: "flex", justifyContent: "center", marginTop: "0.5rem", color: "white", height: "80%", width: "2rem" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-[50%] px-3 flex justify-between w-full bg '>
                                        <PatientsPic
                                            pic1=""
                                            pic2=""
                                            pic3=""
                                            num="4"
                                        />
                                        <div className=' h-[40px] w-[50px] text-[25px] flex justify-center items-center mt-1  bg-[#409BEE] rounded-xl'>
                                            <FaArrowRightLong />
                                        </div>
                                    </div>
                                </div>
                                {/* bottom  */}
                                <div className=" flex h-[50%] bg-[#1B2C4F] rounded-3xl">
                                    <div className='p-3 mx-4 text-white h-full'>
                                        <h1 className='font-[14px]'>Consultation</h1>
                                        <h1 className=' font-bold text-[28px]'>82/100</h1>
                                        <span className='flex gap-2 w-fit px-1 items-center bg-[#2C3A58] rounded-md '> 82%  <FaArrowTrendUp /></span>
                                    </div>
                                    <div className='w-[50%] h-full '>
                                        <div className='h-[20%] w-full font-extrabold flex justify-end p-2'>
                                            <BsThreeDots />
                                        </div>
                                        <div className='flex justify-end items-center mr-5'>
                                            <div className=' flex justify-center items-center h-[80px] w-[80px] bg-[#409BEE] rounded-full'>
                                                <div className='h-[60px] w-[60px] bg-[#1B2C4F] rounded-full'>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className=' mx-8 my-8 lg:w-1/3 bg-[#111729] flex flex-col rounded-3xl'>
                    {/* profile  */}
                    <div className='h-[40%] flex flex-col gap-4'>
                        {/* profile pic  */}
                        <div className='h-[70%] w-full flex flex-col justify-center    rounded-3xl'>
                            <div className=' mt-10 bg-red-200 h-[5rem] w-[5rem] rounded-full m-auto'>

                            </div>
                            <h1 className='text-white text-2xl font-bold m-auto'>Aliam Colter</h1>
                            <h2 className='text-white text-0.5xl m-auto'>Physician</h2>
                        </div>
                        {/* active patients  */}
                        <div className='h-[23%] mx-4 flex bg-[#1C2A4E] rounded-3xl justify-between text-center items-center'>
                            <div className='p-5'>
                                <h1 className='text-white font-semibold'>Active Patients</h1>
                            </div>
                            <PatientsPic
                                pic1=""
                                pic2=""
                                pic3=""
                                num="8"
                            />
                        </div>
                    </div>
                    {/* chatting  */}
                    <div className='h-[60%] bg-[#1C2A4E] rounded-3xl m-5'>
                        <div className='w-full h-[20%] p-2 justify-between flex items-center text-white '>
                            <div className='flex gap-2'>
                                <div className='h-[40px] w-[40px] bg-white rounded-full'>

                                </div>
                                <div>
                                    <h1 className='font-semibold text-[14px]'>Alexa Max</h1>
                                    <h1 className='text-[9px]'>Active 5 min ago</h1>
                                </div>
                            </div>
                            <div className='bg-[#2C3A58] p-2 rounded-full'>
                                <IoCall size="20px" />
                            </div>

                        </div>
                        <div className='w-[100%]   flex justify-center text-[2px]'>
                            <div className='w-[80%] h-[1px] bg-[#2C3A58]'></div>
                        </div>

                        <div className='chatting-container w-full mt-2 h-[60%] overflow-y-scroll '>
                            {/* <Chat/> */}
                            {
                                chatting.map((message) => {
                                    if (message.type === "person") {
                                        return (
                                            <div className='flex gap-1 '>
                                                <div className='h-[2rem] w-[2rem] my-1 ml-1 bg-red-500 rounded-full'>

                                                </div>
                                                <div className=''>
                                                    {
                                                        message?.texts.map((text) => {
                                                            return <div className=' max-w-[14rem] px-3 my-1  py-2 flex  bg-[#F1F1F1] rounded-2xl'>
                                                                <span className='text-[12px] flex font-semibold'>{text}</span>
                                                            </div>
                                                        })
                                                    }
                                                    <div>
                                                        <p className='text-[10px] w-full mt-1 flex  text-white'>{message.time}</p>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className='flex gap-1 flex-row-reverse mr-1'>
                                                <div className='h-[2rem] w-[2rem] my-1 ml-1 bg-red-500 rounded-full'>

                                                </div>
                                                <div className=''>
                                                    {
                                                        message?.texts.map((text) => {
                                                            return <div className=' max-w-[14rem] px-3 my-1  py-2 flex  bg-[#BDD8F0] rounded-2xl'>
                                                                <span className='text-[12px] flex font-semibold'>{text}</span>
                                                            </div>
                                                        })
                                                    }
                                                    <div>
                                                        <p className='text-[10px] w-full mt-1 flex justify-end text-white'>{message.time}</p>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                }
                                )
                            }

                        </div>
                        <div className=' w-[95%] mb-3 flex justify-between items-center h-[15%] m-auto px-4 bg-[#2C3A58] rounded-full'>
                            <IoMicOutline color='white' size="30px" />
                            <input className='w-full bg-transparent h-full mx-2 text-white border-none text-[13px] outline-none' placeholder='type your text...' />
                            <div className=' bg-[#409BEE] p-2 rounded-md'>
                                <LuSend color='white' size="20px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page