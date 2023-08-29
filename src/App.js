// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Content from "./Content";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Notpage from "./pages/Notpage";
// import Styled from "./Styled";


  


function App() {

  
  
  // react 에선 앞쪽에 기범석 , 뒤쪽엔 기범석을 바꿀수있는 변수가 들어감 
  // 변수는 리턴 위쪽에 작성 
  // 변수는 중괄호 문법 중괄호가 변수를 가져오는 문법
  



  return (
   <>
    <Nav />
    <Routes >
      <Route path="/" element={<Main/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/*" element={<Notpage/>}/>
      
    </Routes>
    {/* 네비는 그대로 남아 있고 하단 애들만 바뀌는 구조 

    
    
    */}
    </> 
    //  <div className="App">
        
      
    //    

    //    {/* <h3 className={Name} style={{color: "pink", backgroundColor: "skyblue"}}>hello react{Name}</h3> */}
    //    <div className="content">
    //     <Content arrayNum = "0"/>
    //     <Content arrayNum = "1"/>
    //     <Content arrayNum = "2"/>
    //     <Content arrayNum = "3"/>
    //    </div>
    //   <Styled />
    //   </div>
  
  );
}

export default App;
