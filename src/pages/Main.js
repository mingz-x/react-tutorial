import React from 'react'

const Main = () => {
  return (
    <div className="info">
        <dl>
          <dt>React 프로젝트 생성 및 실행</dt>
          <dd>비주얼 코드 (react폴더 열기)</dd>
          <dd>터미널 (ctrl + j)에 이용</dd>
          <dd>React환경 모듈 설치 (npm i -g create-react-app)</dd>
          <dd>
              프로젝트 생성 (npx create-react-app tutorial) <br />
              ㄴ 폴더 이동 (cd tutorial) <br />
              ㄴ 프로젝트 실행 (npm start) <br />
              ㄴ 프로젝트 중지 (ctrl + c)
          </dd>

          <dt>문법</dt>
          <dd>JSX(Javascript XML) - 스크립트 확장 문법</dd>
          <dd>Fragments(&#60;&#62;&#60;/&#62;){/* (&lt;&gt;&lt;/&gt;)(빈태그,깡통태그) */} - 자식요소들을 그룹 지정 할 수 있음</dd>
          <dd>
              내보내기 (export default 컨포넌트명) <br />
              ㄴ 가져오기(js,img) (inport 별칭 from './파일명') <br />
              ㄴ 가져오기(css) (inport './파일명')
          </dd>
          {/* <dd></dd> */}
        </dl>
    </div>
  )
}

export default Main;