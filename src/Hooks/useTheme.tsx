import { useContext } from "react";
import { GetThemeContext } from "../Contexts/theme/GetThemeContext";

export const useTheme = () => {
  const theme = useContext(GetThemeContext);
  return theme;
};
