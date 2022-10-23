import * as C from "./styles";
import { ReactNode } from "react";
const Layout = ({ children }: { children: ReactNode }) => (
  <C.Container>{children}</C.Container>
);

export default Layout;
