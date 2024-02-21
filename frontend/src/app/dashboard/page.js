import PatientsPic from '../components/PatientsPic';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PatientsTime from '../components/PatientsTime';
import { TbHome } from "react-icons/tb";
import { FiPieChart } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
import { PiBellFill } from "react-icons/pi";
import { AiOutlineSetting } from "react-icons/ai";
import { patientsData, chatting } from '../data/data.js'
import { BsChatText, BsThreeDots } from "react-icons/bs";
import { LuNewspaper, LuAlarmClock, LuBell, LuSend } from "react-icons/lu";
import { IoSearchOutline, IoAlarm, IoCall, IoMicOutline } from "react-icons/io5";
import { FaArrowTrendUp, FaArrowRightLong, FaChevronDown } from "react-icons/fa6";

const page = () => {
    return (
        <div className=' w-screen sm:h-screen bg-[#111729] md:flex'>

            {/* sidebar  */}
            <div className=' hidden lg:block ml-8 my-8 relative  md:w-14'>
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
            <div className=' md:flex md:m-3 p-4 md:p-0  md:w-full rounded-3xl bg-[#151C39]  '>
                <div className=' md:ml-8  my-8 lg:w-2/3  rounded-2xl'>
                    {/* search bar  */}
                    <div className=' h-[12%] pb-2 md:pb-0 flex gap-4'>
                        {/* search bar text  */}
                        <div className=' w-[34%]  md:w-[30%]'>
                            <h1 className=' text-[19px]  text-white'>Hello,</h1>
                            <h1 className=' text-[22px] font-bold text-white'>Dr. Colter! ✋</h1>
                        </div>
                        {/* search bar  */}
                        <div className=' flex w-[75%] h-[73%] gap-4'>
                            {/* input  */}
                            <div className='flex w-[85%] md:w-[90%] bg-[#2C3A58] rounded-2xl p-2'>
                                <IoSearchOutline fontSize='medium' style={{ margin: "auto", color: "white", height: "80%", width: "3rem" }} />
                                <input placeholder='Search' className='w-full outline-none bg-transparent h-full rounded-2xl mx-4 placeholder:text-2xl text-2xl hover:outline-none text-white' />
                            </div>
                            {/* bell  */}
                            <div className='w-[55px] bg-[#409BEE] rounded-2xl relative'>
                                <div className='h-[15%] w-[15%] bg-red-700 absolute top-1/3 left-[50%] rounded-full'></div>
                                <LuBell fontSize='medium' style={{ margin: "auto", display: "flex", justifyContent: "center", marginTop: "0.5rem", color: "white", height: "80%", width: "2rem" }} />
                            </div>
                        </div>

                    </div>
                    {/* div 1  */}
                    <div className='  h-[15rem] md:h-[38%] sm:flex md:flex sm:gap-4'>
                        {/* left  */}
                        <div className=' w-full sm:w-[50%] flex justify-center md:flex sm:flex-col gap-4'>
                            {/* top  */}
                            <div className='px-4 pb-2 sm:pb-0 sm:px-0 sm:h-[48%] md:h-[50%] bg-[#1B2C4F] rounded-3xl flex'>
                                <div className=' sm:w-[70%] h-full text-white'>
                                    <h1 className=' font-bold text-4xl  sm:pl-6 pt-4'>42</h1>
                                    <h2 className=' font-semibold sm:pl-6'>Patients Visited</h2>
                                    <h4 className='pl-6 font-light text-sm'>This month</h4>
                                </div>
                                <div className='hidden  sm:block w-[30%] h-full bg-[#2C3A58] flex justify-center items-center rounded-r-3xl'>
                                    <div className='w-[40%] h-[70%] bg-[#409BEE] flex flex-col m-auto  rounded-3xl'>
                                        <div className='w-full h-[35%] bg-[#2f487b] rounded-t-3xl '>                                        </div>
                                        <FaArrowTrendUp className='text-white  m-auto text-sm font-bold' />
                                        <div className='text-white flex justify-center text-xs mb-3 font-semibold'>70%</div>
                                    </div>
                                </div>
                            </div>
                            {/* bottom  */}
                            <div className='h-[48%] pb-2 sm:pb-0 md:h-[50%] bg-[#1B2C4F] rounded-3xl'>
                                <div className='h-[30%] md:h-[15%]  mt-3 flex gap-0 items-center'>
                                    <FaArrowRightLong className='ml-4 mr-3 w-9 rounded-lg  bg-[#409BEE] ' size="22px" />
                                    <h2 className='w-[10rem] sm:w-full text-white'>Upcoming Events</h2>
                                </div>
                                <div className='md:h-[70%] flex  sm:w-full '>
                                    <div className='h-full w-[50%] flex justify-center items-center'>
                                        <div className='h-[50px] mt-3 md:mt-0 w-[50px] bg-red-400 rounded-full'>
                                            {/* image  */}
                                        </div>
                                    </div>
                                    <div className='h-full sm:ml-9 w-[70%] text-white '>
                                        <h1 className='font-bold'>Aliza Shah</h1>
                                        <h1 className=' text-[10px] flex gap-2'> <IoAlarm /> 08:00-09:00 Am</h1>
                                        <span className=' text-[9px] sm:text-[12px] bg-[#2C3A58] rounded-xl px-2 py-1 font-light'>
                                            Visited 7 days ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right  */}
                        <div className=' mt-4 sm:mt-0 sm:w-[50%] bg-[#1B2C4F] rounded-3xl'>
                            <div className='w-full flex items-center justify-between h-[30%] px-4 py-5 '>
                                {/* heading  */}
                                <div className='text-white'>
                                    <h1 className='font-semibold text-[27px]'>Statistics</h1>
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
                    <div className=' h-[50%] gap-4  sm:flex'>
                        {/* patients */}
                        <div className='sm:w-[60%] mt-2  '>
                            <h1 className=" text-white my-2 text-[18px] md:text-2xl font-bold"> Active Patients</h1>
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
                        <div className='sm:w-[40%] mt-2'>
                            <h1 className="  text-white my-2 text-[18px] md:text-2xl font-bold"> Upcoming Events</h1>
                            <div className='  h-[85%] rounded-3xl flex flex-row sm:flex-col justify-center gap-4'>
                                {/* top  */}
                                <div className="pb-3 sm:pb-0 h-[50%] bg-[#1B2C4F] rounded-3xl">
                                    <div className='h-[50%] flex justify-between text-white w-full '>
                                        <div className='ml-3 sm:ml-8 py-2'>
                                            <h1 className=' font-bold'>Team Meeting</h1>
                                            <h3 className='flex text-[12px] items-center'><LuAlarmClock /> 05:00-06:00 Am</h3>
                                        </div>
                                        <div>
                                            <div className=' flex justify-center items-center mt-2 mr-3 h-[40px] w-[40px] md:h-[45px] md:w-[45px] bg-[#2C3A58] rounded-2xl relative'>
                                                <PiBellFill className='w-[2rem] h-[60%]' textColor='#409BEE' size='15px' style={{ margin: "auto", display: "flex", justifyContent: "center", marginTop: "0.5rem", color: "white" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' ml-2 h-[50%] sm:ml-7 mr-3 flex justify-between '>
                                        <PatientsPic
                                            pic1=""
                                            pic2=""
                                            pic3=""
                                            num="4"
                                        />
                                        <div className=' h-[28px] md:h-[32px] w-[30px] sm:w-[40px] text-[25px] flex justify-center items-center mt-1  bg-[#409BEE] rounded-xl'>
                                            <FaArrowRightLong />
                                        </div>
                                    </div>
                                </div>
                                {/* bottom  */}
                                <div className="pb-3 sm:pb-0 flex h-[50%] justify-center bg-[#1B2C4F] rounded-3xl">
                                    <div className='p-3 mx-4 text-white h-full'>
                                        <h1 className='text-[12px] sm:text-base sm:font-[14px]'>Consultation</h1>
                                        <h1 className=' font-bold text-[20px] sm:text-[26px]'>82/100</h1>
                                        <span className='flex gap-2 w-fit px-1 items-center bg-[#2C3A58] rounded-md '> 82%  <FaArrowTrendUp /></span>
                                    </div>
                                    <div className='sm:w-[50%]  sm:h-full '>
                                        <div className='h-[20%] mr-4 sm:mr-7 mb-2 flex justify-end sm:p-2'>
                                            <BsThreeDots size="25px" />
                                        </div>
                                        <div className='flex justify-end items-center mr-7 sm:mr-7'>
                                            <div className=' flex justify-center items-center h-[60px] w-[60px] sm:h-[75px] sm:w-[75px] bg-[#409BEE] rounded-full'>
                                                <div className='h-[40px] w-[40px] sm:h-[55px] sm:w-[55px] bg-[#1B2C4F] rounded-full'>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' md:mx-8 md:my-8 md:w-1/3  bg-[#111729] flex flex-col sm:flex-row md:flex md:flex-col rounded-3xl'>
                    {/* profile  */}
                    <div className=' sm:h-[30rem] md:h-[40%] flex flex-col gap-4'>
                        {/* profile pic  */}
                        <div className='md:h-[70%] md:w-full flex flex-col justify-center    rounded-3xl'>
                            <div className=' mt-10 bg-red-200 h-[7rem] w-[7rem] md:h-[5rem] md:w-[5rem] rounded-full m-auto'>

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
                    <div className='h-[500px] sm:h-[60%] bg-[#1C2A4E] rounded-3xl my-5 mx-5  sm:mx-5 md:my-5'>
                        <div className=' md:w-full h-[15%] sm:h-[20%] p-2 justify-between flex items-center text-white '>
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

                        <div className='chatting-container w-full mt-2 h-[70%] sm:h-[60%] overflow-y-scroll '>
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
                        <div className=' w-[95%] mb-3 flex justify-between items-center h-[10%] sm:h-[15%] m-auto px-4 bg-[#2C3A58] rounded-full'>
                            <IoMicOutline color='white' size="30px" />
                            <input className='w-full bg-transparent md:h-full mx-2 text-white border-none text-[13px] outline-none' placeholder='type your text...' />
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