import React from 'react'
import { styled } from 'styled-components'


const Style = styled.div `
// 태그가 된다
    background-color: orange;
    font-size: 3rem;
    ul{
        max-width: 1200px;
        margin: 0 auto; 
        display: flex; 
        justify-content: space-between;
        
    }
    ` 
    

function Styled() {
    let Menu = ["메뉴1","메뉴2","메뉴3","메뉴4","메뉴5"];
  return (
    <Style>
        <ul>
            {
                Menu.map((el,i)=>{
                    return(
                        <li className='text-center' key={i}>{el}</li>
                        // 고유값을 넣을땐 key={}
                    )
                })
            }
        </ul>
    </Style>
  )
}

export default Styled