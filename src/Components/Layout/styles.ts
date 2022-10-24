import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  transition: all 1s ease;
  background: ${(props) => props.theme.colors.layout};
  color: ${(props) => props.theme.colors.text};
`;
