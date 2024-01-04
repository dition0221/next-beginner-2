# Next - Beginner (2)

### NextJS를 이용한 간단한 영화 웹 사이트 입니다. Simple movie web site using NextJS.

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
    - 모든 페이지(컴포넌트)의 최상위 컴포넌트(청사진)
      - 페이지 컴포넌트들이 렌더링되기 전에 먼저 실행되는 파일
      - app의 전역 layout 및 설정을 관리하는 파일
        - layout은 따로 컴포넌트를 사용하는 것을 권장
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
    - 다른 컴포넌트에서는 .css파일을 import 할 수 없는데, '\_app.tsx'에서는 가능함
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
  - Layout
    - '\_app.tsx'파일에는 많은 내용을 넣지않기 때문에, layout 파일을 따로 생성해 사용
    - ex.
      ```
      // Layout.tsx
        interface ILayoutProps {
          children: React.ReactNode;
        }
        export default function Layout({ children }: ILayoutProps) {
          return (
            <>
              <Nav />
              {children}
            </>
          );
        }
      // _app.tsx
        export default function App({ Components, pageProps }: AppProps) {
          return (
            <Layout>
              <Components {...pageProps} />
            </Layout>
          );
        }
      ```
  - &lt;head&gt;
    - 내장 기능으로 &lt;head&gt;태그를 수정할 수 있음
      - 'react-helmet' 등의 패키지를 사용할 필요 x
    - 기본형 : `<Head> ... </Head>`
      - import Head from "next/head";
    - ex.
      ```
      interface ISeoProps {
        title: string;
      }
      export default function Seo({ title }: ISeoProps) {
        return (
          <Head>
            <title>{`${title} | Next Movies`}</title>
          </Head>
        );
      }
      ```
  - Redirect & Rewrites
    - 'next.config.js'파일에서 설정 가능
    - Redirect
      - 특정 URL로의 요청을 다른 URL로 자동으로 전환하는 기능
        - 사용자가 URL이 바뀌는 것을 알 수 있음
      - 기본형
        ```
        async redirect() {
          return [
            {
              source: "출발경로URL",
              destination: "도착경로URL",
              permanent?: 불리언값,
            },
            ......
          ];
        }
        ```
        - permanent(영구적) 값에 따라서, 브라우저나 검색엔진이 해당 정보를 기억하는지의 여부가 결정됨
        - destination에 외보 URL 경로를 입력이 가능함
        - path matching 기능
      - ex.
        ```
        {
          source: "old/:path*",
          destination: "new/:path*",
        }
        ```
    - Rewrites
      - 서버에서의 실제 경로를 변경하지 않고, 클라이언트로 보내는 URL을 변경하는 기능
        - URL이 바뀌지 않아, 사용자가 바뀐지 모름
      - 기본형
        ```
        async rewrites() {
          return [
            {
              source: "출발경로URL",
              destination: "도착경로URL",
            },
            ......
          ];
        }
        ```
  - API Routes
    - NextJS에서 서버 측 코드를 구현하여, 간단하게 API 엔드포인트를 생성하는 방법
      - 서버 측에서 동작하므로 클라이언트에서 API 키가 노출되지 않음
        - 서버 측 코드에서만 사용되기 때문
        - 클라이언트 측에서는 해당 API Routes에 대한 요청을 보내고, 서버에서는 해당 요청을 처리하고 응답을 생성
        - 클라이언트는 단순히 서버로 요청을 보내고 응답을 받았을 뿐
    - 파일명 : `/pages/api/파일경로.ts`
    - 기본형
      ```
      import type { NextApiRequest, NextApiResponse } from "next";
      export default function handler(
        req: NextApiRequest,
        res: NextApiResponse<JSON데이터타입>
      ) {
        res.status(200).json(JSON데이터);
      }
      ```
    - '.env.local' 파일을 사용해 API 키를 저장
      - 불러올 떄에는 `process.env.변수명`으로 불러옴
      - 서버 측에서만 사용 시 'NEXT_PUBLIC' 접두사가 필요 없음
    - 동적 route 가능
    - ex.
      ```
      export default async function handler(
        req: NextApiRequest,
        res: NextApiResponse<IMovie[]>
      ) {
        const url =
          "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1&region=ko-KR";
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.API_KEY}`,
          },
        };
        const { results }: { results: IMovie[] } = await (await fetch(url, options)).json();
        res.status(200).json(results);
      }
      ```
- **23-12-26 : #2.3 ~ #2.8 / SSR + dynamic URL**
  - SSR (Server Side Render)
    - 서버에서 페이지를 완전히 rendering하여, 클라이언트에 전송하는 방식
      - JavaScript를 사용하지 않더라도 데이터를 rendering하여 보여줌
      - 사전 생성된 HTML페이지에 데이터가 포함됨
        - \_\_NEXT_DATA\_\_'란 &lt;script&gt;에 데이터가 담김
    - 장점
      1. 초기 로딩 속도가 빠름
      2. SEO(검색 엔진 최적화)에 유리함
    - 기본형
      ```
      export function getServerSideProps() {
        return { props: { 보낼 데이터 } };
      }
      ```
      - 컴포넌트의 내용은 서버 측에서만 작동함
        - 서버 측에서 동작하여, API 키를 숨길 수 있음
      - 컴포넌트명은 절대 바꾸지 말 것
        - 페이지.tsx 파일 내에서 작성
      - object를 return 해야 함
        - 'props' 키명에 원하는 데이터를 object 형태로 전송함
        - 실제 컴포넌트에서 props로 받음
        - '\_app.tsx'가 알아서 pageProps로 사용함
    - ex.
      ```
      export default function Home({ movies }: { movies: IMovie[] }) { ... }
      export async function getServerSideProps() {
        const movies: IMovie[] = await (await fetch("http://localhost:3000/api/getMovies")).json();
        return { props: { movies } };
      }
      ```
    - 서버 측에서 동작하므로, 상대경로 사용 불가능
      - 상대경로는 클라이언트 측에서만 사용 가능
  - Dynamic URL
    - 사용자가 접속하는 동적인 콘텐츠를 가진 웹 페이지의 주소
      - 'react-router-dom'에서는 '/:id'와 같은 방식으로 동작함
    - 파일명 : `[파리미터명].tsx`
    - 'useRouter()'의 '.query'로부터 파라미터 값을 가져올 수 있음
      - 파일명과 같은 파라미터명을 가짐
    - ex.
      ```
      // pages/movies/[id].tsx
        export default function Detail() {
          const router = useRouter();
          console.log(router.query);
          return <div>Detail</div>;
        }
      // '/movies/123132'에 접속 시 '{ id: 123123 }' 콘솔이 나타남
      ```
  - 라우터를 사용해 (query)데이터를 보내는 방법
    - fetch API 보다 속도가 빠름
    1. useRouter().push()
       - 기본형
         ```
         const 라우터명 = useRouter();
         라우터명.push(
          {
            pathname: 이동할URL,
            query: { 보낼데이터 },
          },
          ?보여질URL(마스킹),
         );
         ```
       - query : URL에 '?'뒤에 오는 쿼리 문자열
         - '라우터명.query'를 통해 데이터를 가져올 수 있음
       - 보여질URL(마스킹) : [옵션] URL에 쿼리 문자열을 가릴 수 있음
       - ex.
         ```
         const router = useRouter();
         router.push(
          {
            pathname: `/movies/${id}`,
            query: {
              title: "MOVIE",
            },
          },
          `/movies/${id}`
         );
         ```
    2. &lt;Link&gt;
       - 기본형
         ```
         <Link href={{
           pathname: 이동할URL,
           query: { 보낼데이터 },
         }}
         ?as="보여질URL(마스킹)"> ... </Link>
         ```
       - ex.
         ```
         <Link
           href={{
             pathname: `/movies/${movie.id}`,
             query: {
               title: movie.title,
             },
           }}
           as={`/movies/${movie.id}`}
         > ... </Link>
         ```
  - Catch-All URL
    - dynamic URL이 여러 개 있어도 전부 잡아낼 수 있는 URL
    - 파일명 : `[...파라미터명].tsx`
    - '라우터명.query'를 통해 파라미터 값을 가져올 수 있으며, 배열로 이루어져 있음
      - ex. `'/movies/12/34/56'으로 접속 시 'pages/movies/[...id].tsx'파일에서 '라우터명.query = { id: [12, 34, 56] }' 값을 가짐`
    - URL로 직접 이동 시 '라우터명.query'에서 Error가 발생함
      - 서버에서 아직 존재하지 않는 배열이기 때문
      - 해결법 : '또는 빈배열' (|| []) 코드를 추가함
      - ex.
        ```
        // [...params].tsx
        const [title, movieId] = (router.query.params as string[]) || [];
        ```
    - SEO에 최적화시키기 위해 SSR 방법을 사용할 수 있음
      - 'getServerSideProps'의 첫 번째 매개변수(context)를 통해 server-side context 정보를 가져올 수 있음
      - 기본형 : `export function getServerSideProps(ctx: GetServerSidePropsContext) { ... }`
      - ex.
        ```
        export function getServerSideProps({
          query: { params },
        }: GetServerSidePropsContext) {
          return {
            props: { params },
          };
        }
        ```
  - 404 페이지
    - 404 페이지를 직접 커스텀마이징을 할 수 있음
    - 파일명 : `/pages/404.tsx`
- **23-12-28 : CSS(1)**
- **24-01-03 : CSS(2)**
  - ~~Issue : gh-pages로 배포 시 실패 현상~~
- **24-01-04 : Deploy**
  - Fix : Vercel로 배포
- **24-01-05 : CSS(3)**
  - Fix
    - 배경색 수정
    - [Nav] &lt;Link&gt; CSS 수정
  - Update : [About] 문구 추가
