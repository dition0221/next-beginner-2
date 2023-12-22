import Nav from "@/components/Nav";

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