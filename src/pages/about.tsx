// components
import Seo from "@/components/Seo";

export default function About() {
  return (
    <>
      <Seo title="About" />

      <main>
        <p>NextJS를 이용한 간단한 영화 웹 사이트 입니다.</p>
        <small>Simple movie web site using NextJS.</small>
      </main>

      <style jsx>{`
        p {
          font-size: min(16px, 4vw);
          margin: 0;
        }
        small {
          font-style: italic;
          color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
}
