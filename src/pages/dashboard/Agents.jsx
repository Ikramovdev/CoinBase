import React, { useContext } from 'react'
import Button from '../../components/Button'
import UserIcon from "../../assets/images/userIcon.svg"
import { Checkbox } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/context'
import AgentsItem from '../../components/AgentsItem'

const Agents = () => {
  const {agents,setAgents} = useContext(Context)
  const navigate = useNavigate() 

  function handleChackAll(e){
    if(e.target.cheked){
      agents.forEach(item => item.isChacked = true)
    }
    else {
      agents.forEach(item => item.isChacked = false)
    }
  }
  return (
    <div className='p-[50px]'>
      <p className='font-bold text-[12px] leading-[18px] text-white mb-[33px]'>Admin Management Agents</p>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-[16px] leading-[24px] text-white'>Agents</h2>
        <div className='flex items-center space-x-[20px]'>
          <input className='search-input w-[216px] pt-[12px] pb-[15px] pl-[58px] pr-[5px] border-[2px] border-white rounded-[100px] bg-transparent text-white text-[12px] outline-none focus:shadow-md focus:shadow-white' type="text" name="searching" placeholder='Search Agents' aria-label='Searching....' />
         <Button onClick={()=> navigate("add")} extraStyle={'w-[134px] flex items-center mx-0 justify-center gap-[7.35px]'}>
          <img src={UserIcon} alt="userIcon" width={16} height={12} />
            <span className='font-regular text-[10px] leading-[15px] text-white'>Add Agent</span>
         </Button>
        </div>
      </div>
      <div className='p-[40px] border-[2px] border-white mt-[28px] rounded-lg'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='text-start text-white w-[30%] pl-5'>
                <Checkbox onChange={handleChackAll} className='text-white'>Account Status </Checkbox>
              </th>
              <th className='text-center text-white w-[20%]'>User Name</th>
              <th className='text-center text-white w-[40%]'>Email</th>
              <th className='text-end text-white w-[10%] pr-5'>Action</th>
            </tr>
          </thead>
          <tbody>
            {agents.map(item =><AgentsItem key={item.id} item={item}/>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Agents