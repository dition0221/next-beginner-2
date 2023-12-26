import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();

  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/" className={router.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          href="/about"
          className={router.pathname === "/about" ? "active" : ""}
        >
          About
        </Link>
      </div>

      <style jsx>{`
        nav {
          position: sticky;
          top: 0;
          background-color: whitesmoke;
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.4) 0px 30px 60px -30px;
          a {
            font-weight: 600;
            font-size: 18px;
            &:hover {
              text-decoration: underline;
            }
          }
          .active {
            color: tomato;
          }
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
