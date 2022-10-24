import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  background: #ffffff;

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
    color: #eee;
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
      border: 2px solid #7367f0;
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

      border: 2px solid #283046;
    }
  }
`;
