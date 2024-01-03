import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
