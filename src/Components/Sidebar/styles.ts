import styled from "styled-components";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

export const Container = styled.div<{ openSidebar: boolean }>`
  width: ${(props) => (props.openSidebar ? "200px" : "50px")};
  transition: all 0.5s ease;
  background: #161c30;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;

  z-index: 999;
`;
export const BtnsTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
  padding: 0 5px;
  transition: all 0.5s ease;

  border-bottom: 1px solid rgba(200, 200, 200, 0.4);

  .button-open {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;

    background: rgba(255, 255, 255, 0.4);
    transition: 1s;
    &:hover {
      background: rgba(200, 200, 200, 0.4);
    }

    cursor: pointer;
  }
  .button-close {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;

    background: rgba(255, 255, 255, 0.4);
    transition: 1s;
    &:hover {
      background: rgba(200, 200, 200, 0.4);
    }

    cursor: pointer;
  }
`;
export const BarsIcon = styled(HiOutlineBars3BottomLeft)`
  font-size: 2rem;
  margin: 0;
  color: #fff;
`;
export const CloseIcon = styled(IoMdClose)`
  font-size: 2rem;
  margin: 0;
  color: #fff;
`;
