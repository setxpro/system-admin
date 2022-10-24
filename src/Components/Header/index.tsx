import { useTheme } from "../../Hooks/useTheme";
import * as C from "./styles";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <C.Container>
      <C.ContentLeft>LEFT</C.ContentLeft>
      <C.ContentRight>
        <div onClick={toggleTheme}>
          {theme.title === "light" && <C.DarkIcon />}
          {theme.title === "dark" && <C.LightIcon />}
        </div>
        <C.AvatarAndName>
          <C.NameArea>
            <h3>Patrick Anjos</h3>
            <h4>Developer</h4>
          </C.NameArea>
          <C.AvatarArea>
            <div className="image">
              <img src="https:github.com/setxpro.png" alt="avatar" />
            </div>
          </C.AvatarArea>
        </C.AvatarAndName>
      </C.ContentRight>
    </C.Container>
  );
};

export default Header;
