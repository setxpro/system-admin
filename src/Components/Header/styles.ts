import styled from "styled-components";

import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

export const Container = styled.div`
  height: 50px;
  background: ${(props) => props.theme.colors.header};
  transition: all 1s ease;

  position: sticky;
  top: 0;

  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const ContentLeft = styled.div``;

export const ContentRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
export const AvatarAndName = styled.div`
  display: flex;
  gap: 3px;
`;
export const NameArea = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 500;
    color: ${(props) => props.theme.colors.text};
    transition: all 1s ease;
  }

  h4 {
    font-weight: 500;
    color: #999;
    text-align: end;
  }
`;

export const AvatarArea = styled.div`
  .image {
    position: relative;

    img {
      width: 45px;
      border-radius: 50%;
      border: 2px solid ${(props) => props.theme.colors.border};
      transition: all 1s ease;
      padding: 2px;
    }
    &::after {
      width: 12px;
      height: 12px;
      content: "";
      background: #0f0;
      border-radius: 50%;
      bottom: 5px;
      right: 3px;
      position: absolute;

      border: 2px solid ${(props) => props.theme.colors.header};
      transition: all 1s ease;
    }
  }
`;

export const LightIcon = styled(MdOutlineLightMode)`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
`;
export const DarkIcon = styled(MdOutlineNightlight)`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
`;
