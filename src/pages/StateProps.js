import React, { useState } from 'react'

const StateProps = () => {
  return (
    <div className='info'>
        <dl>
            <dt>State</dt>
            <dd>improt{useState} from 'react'</dd>
            <dd>let [변수,변수수정] = useState(값)</dd>
            <dd>변수 값이 변경되었을 때 DOM을 업데이트하고 싶을 때 사용</dd>
            
            <dt>Props</dt>
            <dd>부모컨포넌트에서 자식컨포넌트로 값을 보내줄 때 사용</dd>
            <dd><textarea>{'<컨포넌트명 data=100/>'}</textarea></dd>
            <dd>
              <textarea cols="60" rows="7">
                {
`#부모컨포넌트
  <컨포넌트명 data=100/>

#자식컨포넌트
  function 컨포넌트명({data}){
    //data는 부모 쪽에서 넘어온 100이다.
  }`
                }
              </textarea>
            </dd>
        </dl>
    </div>
  )
}

export default StateProps