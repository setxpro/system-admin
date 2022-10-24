import { useSidebar } from "../../Hooks/useSidebar";
import * as C from "./styles";

const Sidebar = () => {
  const { openSidebar, wrapperSidebar } = useSidebar();

  return (
    <C.Container openSidebar={openSidebar}>
      <C.BtnsTop>
        {!openSidebar ? (
          <div className="button-open" onClick={wrapperSidebar}>
            <C.BarsIcon />
          </div>
        ) : (
          <div className="button-close" onClick={wrapperSidebar}>
            <C.CloseIcon />
          </div>
        )}
      </C.BtnsTop>
    </C.Container>
  );
};

export default Sidebar;
