import { useSidebar } from "../../Hooks/useSidebar";
import * as C from "./styles";

const Sidebar = () => {
  const { openSidebar, wrapperSidebar } = useSidebar();

  return (
    <C.Container openSidebar={openSidebar}>
      <C.BtnsTop>
        {openSidebar ? (
          <C.Buttons onClick={wrapperSidebar}>
            <C.CloseIcon />
          </C.Buttons>
        ) : (
          <C.Buttons onClick={wrapperSidebar}>
            <C.BarsIcon />
          </C.Buttons>
        )}
      </C.BtnsTop>
    </C.Container>
  );
};

export default Sidebar;
