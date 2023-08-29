import React, { useState } from 'react'

function Content(props) {
   
    let [good, setGood] = useState(0)
    let [bad, setBad] = useState(0)
    let [title, setTitle] = useState(["쌍둥이 아기판다","쌍둥이 아기판다","주토피아 동물 아카데미","귀엽게 찰칵!"]);
    let [Desc, setDesc] = useState(["스페셜 이벤트","판다는 곰이 맞을까?","이름을 지어주세요","에버랜드 AR필터"])

    function goodFun(){
        setGood(good+1)
    }
    function notFun(){
        setBad(bad-1)
    }
    function Change(){
        let copy = [...title];
        let copy2 = [...Desc];        
        // ...은 배열의 대괄호를 없애는 기능
        copy = ["쌍둥이 아기판다","쌍둥이 아기판다","주토피아 동물 아카데미","귀엽게 찰칵!"];       
        copy2 = ["스페셜 이벤트","이름을 지어주세요","판다는 곰이 맞을까","에버랜드 AR필터"]
        setTitle(copy);
        setDesc(copy2);

    
    }
    let [modalChk, setModalChk] = useState(false);
    function Modal(){
         
        //  if(modalChk === false){
        //     setModalChk(true)
        //  }else{
        //     setModalChk(false)
        //  }
        
        // modalChk === false ? setModalChk(true) : setModalChk(false)
        
        // modalChk 가 false 라면? setModalChk 가 true 그게 아니라면 setModalChk 가 false
    setModalChk(!modalChk)
        
         

        
    }
  return (
    <>
    <div className="content-item" onClick={Modal}>
            <img src="https://via.placeholder.com/320" alt="테스트"/>
            <h3 className='font-bold text-2xl my-1 text-green-500'>{title[props.arrayNum]}</h3>
            <p>{Desc[props.arrayNum]}</p>
            <p onClick={goodFun}>😘 {good}</p>
            <p onClick={notFun}>😢{bad}</p>
            <span>{props.Desc2}</span>
            <button onClick={Change}>수정</button>     
          </div>
          {
            (modalChk === true && <div className='window' onClick={Modal}></div>)
          }
        
    </>       
  )
}

export default Content