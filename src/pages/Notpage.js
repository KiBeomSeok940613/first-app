import React from 'react'
import { NavLink } from 'react-router-dom'

function Notpage() {
  return (
    <div>
        <p className='text-7xl text-center font-bold'>404 Not Found</p>
        <p className='text-5xl text-center'>페이지를 찾을 수 없습니다</p>
        <p className='text-7xl text-center'><NavLink to="/">메인으로 바로가기</NavLink></p>
    </div>
  )
}
// 3.Notpound 페이지는 무조건 맨 밑에 작성해야함

export default Notpage