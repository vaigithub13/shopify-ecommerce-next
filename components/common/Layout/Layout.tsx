import { FC } from "react";
import { Footer } from "@components/common";
import s from "./Layout.module.css";
import Navbar from "../Navbar";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/cart";
import { useUI } from "@components/ui/context";
import { ApiProvider } from "@framework";

const Layout: FC = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI();
  return (
    <ApiProvider>
      <div className={s.root}>
        <Navbar />
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar}>
          <CartSidebar />
        </Sidebar>
        {/* <main style={{ color: "var(--primary)" }} className="fit">÷ */}
        <main className="fit">{children}</main>
        <Footer></Footer>
      </div>
    </ApiProvider>
  );
};

export default Layout;
