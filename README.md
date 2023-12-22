# Next - Beginner (2)

### Next.js 입문기 (2번째)

- Next.js : 14버전

<img src="https://img.shields.io/badge/Next.js-000?style=flat-square&logo=nextdotjs&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/>

---

- **23-12-20 : #0.2 ~ #1.7 / NextJS Overview**
  - Framework VS Library
    - Framework : 코드를 규칙에 맞게 적어야 함 (ex. NextJS)
    - Library : 코드를 마음대로 적을 수 있음 (ex. ReactJS)
  - Next.js
    - React 기반의 web app을 쉽게 개발할 수 있도록 도와주는 JS framework
      - 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(Static Site Generation; SSG)과 같은 고급 기능을 제공하여, web app의 성능과 검색 엔진 최적화(SEO)를 향상 시킬 수 있음
    - 설치법 : `npx create-next-app@latest`
      - (강의를 따라갈 시 app router 사용 x)
  - 페이지(Route)를 추가하는 법
    - 사용법 : 'pages'폴더에서 폴더와 파일명으로 경로를 설정함
      - NextJS가 자동으로 파일의 경로를 URL로 사용함
      - 컴포넌트를 export default 해야하지만, 컴포넌트명은 중요하지 않음
    - 'index'파일명은 "/"를 의미함
    - 404페이지가 자동으로 주어져있으며, 커스텀마이징이 가능함
  - NextJS이 렌더링 방식
    - app에 있는 페이지들이 정적으로 pre-rendering 됨
      - 컴포넌트의 HTML(JSX) 요소를 가져와 보여준 후, JS를 실행해 보여줌
      - JS를 비활성화해도 정적인 요소들은 렌더링 됨
      - 소스코드에서 HTML(JSX)이 존재함
    - React는 CSR(Client-Side Render) 방식
      - 사용자의 브라우저가 UI를 만드는 모든 것을 함
      - 소스코드에서 root &lt;div&gt;만 존재하고, 나머지는 JS로 이루어져 있음
      - 비어있는 &lt;div&gt;(흰 화면)을 가져온 후, JS를 실행해 UI를 보여줌
  - Hydration
    - 정적(HTML)인 app이 React app이 되는 것
      - NextJS는 렌더링이 끝났을 때 HTML이 됨
        - 사용자는 JS가 로딩되지 않더라도 콘텐츠를 볼 수 있음
      - 추후 JS가 로딩되었을 때, 이미 존재하는 것들과 연결되어 일반적인 React App이 됨
    - 장점
      1. 사용자가 초기 상태의 pre-rendering된 HTML 페이지를 먼저 볼 수 있음
      2. 상호작용이 일어나면 React App이 되어, 잘 동작함
      3. SEO(검색 엔진 최적화)에 좋음
  - &lt;Link&gt;
    - App 내에서 페이지를 navigate할 때에는 &lt;Link&gt;태그를 사용
      - 'react-router-dom'의 &lt;Link&gt;를 사용하는 이유와 같음
        - &lt;a&gt;태그를 사용하면 App 자체를 새롭게 rendering 함
    - import Link from "next/link";
  - useRouter()
    - 현재 페이지의 경로 및 쿼리 파라미터와 관련된 정보를 가져올 수 있는 hook
    - 기본형 : `const 라우터명 = useRouter();`
    - router 객체를 사용하여, Router 관련 정보에 접근할 수 있음
      - router.pathname : 현재 페이지의 경로를 나타내는 문자열
        - ex. `홈페이지는 '/'로 표시되며, /about 페이지는 '/about'로 표시`
      - router.query : 쿼리 문자열 파라미터를 포함하는 객체
        - ex. `'/product?id-1' 페이지에서 { id: '1' }를 반환`
      - router.asPath : 브라우저의 주소 표시줄에서 현재 페이지의 경로를 나타내는 문자열
        - 이 경로는 실제로 서버 라우트 및 브라우저 라우트 간의 차이를 나타냄
      - router.push() : 페이지를 이동하는 메서드
      - router.replace() : 페이지를 이동하는 메서드이며, 이전 페이지는 브라우저 히스토리에서 사라짐
      - router.prefetch() : 다음 페이지로의 사전 로드를 시작
        - 페이지가 클릭되기 전에 페이지를 미리 로드하여, 빠른 페이지 전환을 가능하게 함
  - CSS
    1. JSX에서 'styles'프로퍼티를 사용하는 방법
    2. '.module.css'(또는 .scs)를 사용하는 방법
       - 파일명 : 컴포넌트명.module.css
       - 선언법 : class를 사용한 CSS를 작성
       - 사용법 : '.module.css'파일을 불러와 className 프로퍼티에 사용
         - 2게 이상의 className을 사용 시 아래의 한 가지 방법을 사용
           1. 백틱(``)과 띄어쓰기를 사용해 string을 만들어 사용
           2. 배열. join(" ")을 사용
       - 소스코드 검사에서 무작위 class명을 가지므로, 재사용이 가능
         - 충돌이 없음 (다른 .module.css파일에서 같은 class명을 사용 가능)
       - NextJS에서 기본적으로 SCSS 사용이 가능 (.module.css처럼 사용)
    3. styled JSX 방법
    4. 다른 CSS 패키지를 사용하는 방법 (Tailwind CSS, styled-components 등)
  - styled JSX
    - App에 styles를 추가하는 또 다른 방식 (NextJS 고유의 방식)
    - 사용법 : `` <style jsx>{` ...... `}</style> ``
      - SCSS코드처럼 사용
    - 소스코드에서는 무작위의 class명을 가지며, 해당 컴포넌트에서만 적용됨
    - App 전체에 전역 CSS를 사용 시 'global' 프로퍼티를 추가
      - 해당 컴포넌트를 포함한 하위 컴포넌트의 스타일링
  - App 컴포넌트
    - 모든 페이지(컴포넌트)의 최상위 컴포넌트 ~청사진~
      - 페이지 컴포넌트들이 렌더링되기 전에 먼저 실행되는 파일
      - app의 전역 layout 및 설정을 관리하는 파일
      - 기본적으로 NextJS에 내장되어 있음
    - 파일명 : `/pages/_app.tsx`
    - 기본형
      ```
      import { AppProps } from "next/app";
      export default function 컴포넌트명({ Components, pageProps }: AppProps) {
        return <Components {...pageProps} />
      }
      ```
      - Components : 현재 페이지를 나타내는 React 컴포넌트
      - pageProps : 현재 페이지로 전달되는 속성들
        - 페이지 컴포넌트에서 getInitialProps 함수를 통해 서버에서 가져오거나 초기화할 수 있는 속성들을 포함함
        - pageProps에는 서버 렌더링 시에 생성된 초기 데이터가 포함됨
    - 다른 컴포넌트에서는 .css파일을 import 할 수 없는데, \_app.tsx에서는 가능함
    - ex.
      ```
      export default function App({ Component, pageProps }: AppProps) {
        return (
          <>
            <Nav />
            <Component {...pageProps} />
            <style jsx global>{`
              a {
                background-color: green;
              }
            `}</style>
          </>
        );
      }
      ```
- **23-12-22 : #2.0 ~ #2.2 / Fetch data**
