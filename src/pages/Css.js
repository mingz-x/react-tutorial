// rafce(단축어 자동완성)

import React from 'react'
import '../css/style.scss'
import s from '../css/style.module.scss';

const Css = () => {
    
  let test = {
    c : {color:'green'}
  }

  return (
    <div className="info">
        {/* 
            <div className="test">Css</div>
            <div className={s.test}>Css</div>
            <div style={test.c}>Css</div>
        */}
        <dl>
            <dt>SCSS</dt>
            <dd>npm install sass</dd>
            <dd>import '../css/style.scss'</dd>
            <dd>별도의 컴파일이 필요 없음</dd>

            <dt>module css</dt>
            <dd>파일명 규칙 => 파일명.module.css</dd>
            <dd>import 별칭 from './파일명.module.scss';</dd>
            <dd>className = 별칭.클래스명</dd>
            <dd>클래스명 중복을 방지하기 위해 사용됨</dd>

        </dl>
    </div>
  )
}

export default Css