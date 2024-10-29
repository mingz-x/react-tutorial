import { useLocation, useNavigate } from 'react-router-dom'

import React from 'react'

const Router = () => {
  const params = useLocation();
  console.log(params.state.page);

  const navi = useNavigate();
  console.log(navi);
  function move(){
    navi('/');
  }
//   move()

  return (
    <div className='info' onClick={move}>
        <dl>
            <dt>Router</dt>
            <dd>모듈 설치 (npm install react-router-dom)</dd>
            <dd>모듈 가져오기 (import &#123; BrowserRouter as Router, Route, Link, Routes &#125; from 'react-router-dom')</dd>
            <dd>
                작동원리 <br />
                ㄴ Link컨포넌트로 브라우저 주소창 변경 <br />
                ㄴ 브라우저 주소값과 path값을 비교하여 일치하는 컨포넌트를 화면에 노출
                <br/>
<textarea cols="100" rows="15">
{ 
 `<Router>
    <header>
        <Link to="/">HOME</Link>
        <Link to="/css">CSS</Link>
        <Link to="/router">Router</Link>
        <Link to="/state">State&Props</Link>
        <Link to="/state">Github Deploy</Link>
    </header>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/css" element={<Css />} />
        <Route path="/router" element={<RouterPage />} />
        <Route path="/*" element={<Not />} />
    </Routes>
</Router>`
}
</textarea>
            </dd>
            <dd>
                Link컨포넌트에서 state로 값 전달 <br />
                ㄴ useLocation( )으로 값 가져오기
            </dd>
            <dd>
                useNavigate('/css') <br />
                ㄴ 스크립트 영역에서 원하는 컴포넌트로 이동
            </dd>
        </dl>
    </div>
  )
}

export default Router