import { ReactNode } from "react";
import Header from "../components/header/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
