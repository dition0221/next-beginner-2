// components
import Seo from "@/components/Seo";

export default function About() {
  return (
    <>
      <Seo title="About" />

      <main>
        <p>NextJS를 이용한 간단한 영화 웹 사이트.</p>
        <small>Simple movie web site using NextJS.</small>

        <p>Styled-JSX를 이용한 스타일링.</p>
        <small>Styled this web site using Styled-JSX.</small>

        <p>API Route와 SSR을 사용해 보았으며, API 키를 숨김.</p>
        <small>
          I Tried to use API Route & SSR, and I tried hiding API key.
        </small>

        <p>Vercel을 통한 배포 작업.</p>
        <small>Deployment took place with Vessel.</small>
      </main>

      <style jsx>{`
        p {
          font-size: min(16px, 4vw);
          margin: 0;
        }
        small {
          font-style: italic;
          color: rgba(0, 0, 0, 0.5);
          display: block;
          margin-bottom: 20px;
        }
      `}</style>
    </>
  );
}
