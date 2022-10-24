import styled from "styled-components";
import { TbTextWrapDisabled, TbTextWrap } from "react-icons/tb";

export const Container = styled.div<{ openSidebar: boolean }>`
  width: ${(props) => (props.openSidebar ? "200px" : "50px")};
  transition: all 1s ease;
  background: ${(props) => props.theme.colors.sidebar};
  color: ${(props) => props.theme.colors.text};
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
`;

export const Buttons = styled.div`
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
`;

export const BarsIcon = styled(TbTextWrapDisabled)`
  font-size: 2rem;
  color: #fff;
`;
export const CloseIcon = styled(TbTextWrap)`
  font-size: 2rem;
  color: #fff;
`;
