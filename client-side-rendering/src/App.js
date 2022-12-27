import React, { Component } from 'react';
import  { Route, Routes, NavLink, useNavigate } from 'react-router-dom';
import './App.css';


import Home from './components/home.js';
import First from './components/first.js';
import Second from './components/second.js';
import Main from './components/main.js';



function App () {

  const navigate = useNavigate();

  return (
    <div className='App'>
    클라이언트 사이드 렌더링을 해 보겠습니다.
    <div>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate(1)}>앞으로 가기</button>
    </div>
    <div>
      <ul className='link-list'>
        <li>
          <NavLink style={({ isActive }) => ({ color: isActive ? 'skyBlue' : 'green' })} className="link" to="/">
            메인 페이지로 이동
          </NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => ({ color: isActive ? 'skyBlue' : 'green' })} className="link" to="/home">
            홈 페이지로 이동
          </NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => ({ color: isActive ? 'skyBlue' : 'green' })} className="link" to="/first">
            first 페이지로 이동
          </NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => ({ color: isActive ? 'skyBlue' : 'green' })} className="link" to="/second">
            second 페이지로 이동
          </NavLink>
        </li>
      </ul>
    </div>
    {/* react 6문법으로 바꿨음! 5에서 switch -> Routes로 바뀜
        component -> element로 바뀜
        activeStyle? 이것도 바뀌엇삼
        아래 사이트 참고
        https://velog.io/@ksmfou98/React-Router-v6-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EC%A0%95%EB%A6%AC
    */}
      <Routes>
        <>
          <Route path="/" element={<Main/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/first" element={<First/>}/>
          <Route path="/second" element={<Second/>}/>
        </>
        </Routes>
    </div>
  );
 }


export default App;
