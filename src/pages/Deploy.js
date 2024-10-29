import React from 'react'

const Deploy = () => {
  return (
    <div className='info'>
        <dl>
            <dt>Deploy</dt>
            <dd>npm i gh-pages</dd>
            <dd>pagekge.json 수정 <br />
                ㄴ "homepage": "http://id.github.io/repository" <br />
                ㄴ scripts에 추가 ("deploy": "gh-pages -d build")
            </dd>
            <dd>
                BrowserRouter - basename 추가 (basename = "/레파지토리명") <br />
                HashRouter - basename 필요없음
            </dd>
            <dd>
                배포버전생성(npm run build) -> 깃허브 배포(npm run deploy)
            </dd>
        </dl>
    </div>
  )
}

export default Deploy