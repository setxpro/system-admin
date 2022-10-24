import { ReactNode } from "react";
import Header from "../../Components/Header";
import Layout from "../../Components/Layout";
import Sidebar from "../../Components/Sidebar";
import { SidebarProvider } from "../../Contexts/SidebarContext";

import * as C from "./styles";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <C.Container>
      <SidebarProvider>
        <Sidebar />
        <C.ContainerHeaderAndLayout>
          <Header />
          <Layout>{children}</Layout>
        </C.ContainerHeaderAndLayout>
      </SidebarProvider>
    </C.Container>
  );
};

export default Template;
