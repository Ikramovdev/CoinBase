import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../components/Button';
import UserIcon from "../../assets/images/userIcon.svg"
import { Context } from '../../context/context';

const AgentMore = () => {
    const {agents,setAgents} = useContext(Context)
    const {id} = useParams()

    const singleData = agents.find(item => item.id == id)
  return (
    <div className='p-[50px]'> 
      <p className='font-bold text-[12px] leading-[18px] text-white mb-[33px]'>Admin Management Agents</p>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-[16px] leading-[24px] text-white'>{singleData.username}</h2>
        <div className='flex items-center space-x-[20px]'>
         <Button onClick={()=> navigate("add")} extraStyle={'w-[134px] flex items-center mx-0 justify-center gap-[7.35px]'}>
          <img src={UserIcon} alt="userIcon" width={16} height={12} />
            <span className='font-regular text-[10px] leading-[15px] text-white'>Add Agent</span>
         </Button>
        </div>
      </div>
      <ul className='w-[60%] border-[2px] border-white rounded-lg p-3 mt-10 pt-[60px] pl-[40px]'>
            <li className='flex items-center gap-1 mb-[43px]'>
                <img className='rounded-full' src={singleData.img} width={260} height={243} />
            </li>
            <li className='flex items-center gap-1 mb-[15px]'>
                <span className='font-bold text-[20px] text-white leading-[32px]'>Agent Name:</span>
                <p className='font-regular text-[20px] text-white leading-[32px]'>{singleData.username}</p>
            </li>
            <li className='flex items-center gap-1 mb-5'>
                <span className='font-bold text-[20px] text-white leading-[32px]'>Agent Email: </span>
                <p className='font-regular text-[20px] text-white leading-[32px]'>{singleData.useremail}</p>
            </li>
            <li className='flex items-center gap-1 mb-[15px]'>
                <span className='font-bold text-[20px] text-white leading-[32px]'>Agent Abouot:</span>
                <p className='font-regular text-[20px] text-white leading-[32px]'>{singleData.about}</p>
            </li>
            <li className='flex items-center gap-1 mb-[80px]'>
                <span className='font-bold text-[20px] text-white leading-[32px]'>Agent Status: </span>
                <p className={`font-bold text-[20px] text-white leading-[32px] w-[91px] rounded-[215px] py-[5px] text-center cursor-pointer ${singleData.status ? `bg-green-400` :`bg-red-500`}`}>{singleData.status ? "Active":"down"}</p>
            </li>
      </ul>
    </div>
  )
}

export default AgentMore